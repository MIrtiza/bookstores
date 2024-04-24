
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/redux/features/cartSlice';
import { favouriteList, addFavorite } from '@/redux/features/favoriteSlice'
import axios from 'axios'
import Layout from '@/layout';
import Header from '@/components/header';
import Categories from '@/components/categories';
import RangeSlider from '@/components/rangeSlider';
import CardBook from '@/components/cardBook';
import BookSidePopup from '@/components/bookSidePopup'
import { Container, Grid, Box, List, ListItem } from '@mui/material';
import Loading from '@/components/Loading';
import { APIBASE } from '@/components/apiBase';



export default function Home() {
  const [featureBook, setFeatureBook] = useState([]);
  const [bookCopy, setBookCopy] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const isPopupEnable = useSelector((state) => state.toggleDetail.isPopupEnable)


  const searchData = useSelector((state) => state.search.searchValue);
  const rangeSearchVal = useSelector((state) => state.search.rangeSearchVal);
  const categoryData = useSelector((state)=> state.search.categorySearchVal)




  useEffect(() => {
  
    axios.get(APIBASE)
      .then((response) => {
        setFeatureBook(response.data.BookData);
        setBookCopy(response.data.BookData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(true);
      })

  }, [])

  useEffect(() => {
    isPopupEnable ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isPopupEnable])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

  }

  // favotite handler ==================

  // useEffect(() => {
  //   dispatch(addFavorite(featureBook))

  // }, [featureBook])


  const handleFavorite = (product) => {
    dispatch(addFavorite(product))
    // console.log(product)
    // setFeatureBook(featureBook.map(book => {
    //   if (book.save === product.save) {
    //     return { ...book, save: !book.save }
    //   }
    //   else {
    //     return book
    //   }
    // }))


  }

  useEffect(() => {
    if(rangeSearchVal.length){
      const searchList = bookCopy.filter((item) => {
        return item.title.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 && item.price > rangeSearchVal[0] && item.price < rangeSearchVal[1] || item.author.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 && item.price > rangeSearchVal[0] && item.price < rangeSearchVal[1]; 
      });
      setFeatureBook(searchList);
    }else{
      const searchList = bookCopy.filter((item) => {
        return item.title.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 || item.author.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 ;
      });
      setFeatureBook(searchList);
    }
    
  }, [searchData])


  useEffect(()=>{
    const minRange= rangeSearchVal[0];
    const maxRange = rangeSearchVal[1];
    console.log({minRange, maxRange})

    if(searchData.length){
      const rangeFilter = bookCopy.filter((item) => {
        return item.title.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 && item.price > rangeSearchVal[0] && item.price < rangeSearchVal[1] || item.author.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 && item.price > rangeSearchVal[0] && item.price < rangeSearchVal[1]; 
      });
      setFeatureBook(rangeFilter);
    }else{
      const rangeFilter = bookCopy.filter((item) => {
        return item.price > minRange && item.price < maxRange ;
      });
      setFeatureBook(rangeFilter);
    }
 
  },[rangeSearchVal])


// =============== Category filter ==============

  useEffect(()=>{
    const adventure = categoryData.adventure ===true ? 'adventure' : false
   const FantasyFiction = categoryData.FantasyFiction === true ? 'Fantasy Fiction' : false
   const selfhelp = categoryData.selfhelp === true ? 'self help' : false;
    const romance = categoryData.romance === true ? 'romance' : false

    const categoryFilter = bookCopy.filter((item) => {
      return item.category.indexOf(adventure) !== -1 
            || item.category.indexOf(FantasyFiction) !== -1
            || item.category.indexOf(selfhelp) !== -1
            || item.category.indexOf(romance) !== -1
    })
    setFeatureBook(categoryFilter);
    console.log({categoryData})
  },[categoryData])


  const ShowFeature = () => {
    return (
      <>
        {
          featureBook.length ?  
          featureBook.map((product, ind) => {

            const { id = 1, title = '', author = '', price = '', bookUrl = '' } = product ?? {}

            return (
              <ListItem key={ind}>
                <CardBook
                  id={id}
                  title={title}
                  author={author}
                  price={price}
                  bookUrl={bookUrl}
                  save={product.save}
                  handleAddToCart={() => handleAddToCart(product)}
                  handleFavorite={() => handleFavorite(product)}


                />
                <div className='reckBg'></div>
              </ListItem>
            )
          })
          : <h6>No Data</h6>
        }
      </>
    )
  }

  return (
    <>
      <Layout title="Bookstores" description="Book shop bookstores book store near me">
        <Header />

        <Box component="section" className={isPopupEnable == true ? 'feedSec overlaybody' : 'feedSec'}>
          <Container maxWidth="xl">
            <Grid container spacing={2}>

              <Grid xl={3} md={12} sm={12} sx={{ px: 2, width:"100%" }}>
                <Box component="aside" className='widgetAside'>

                  <Categories />

                  <Box component="div" className='priceRangeWidget' sx={{ px: 4 }}>
                    <span style={{ marginBottom: 42, display: "block" }}>
                      Price Range
                    </span>
                    <RangeSlider />
                  </Box>
                </Box>
              </Grid>

              <Grid xl={9} sm={12} sx={{ px: 2, width:"100%"  }}>
                <h2>New Arrivals</h2>
                <Box component="div" className='itemWraper' style={{ padding: 0 }}>

                  <List
                    className='itemList'
                    component="ul"
                  >
                    {loading ? <Loading /> : <ShowFeature />}
                  </List>
                </Box>
              </Grid>

            </Grid>
          </Container>
          <BookSidePopup />
        </Box>
      </Layout>
    </>
  )
}

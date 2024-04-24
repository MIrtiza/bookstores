import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { addFavorite } from '@/redux/features/favoriteSlice'
import { Container, Grid, Box, List, ListItem} from '@mui/material';
import Layout from "@/layout"
import Header from '@/components/header';
import CardBook from '@/components/cardBook';
import BookSidePopup from '@/components/bookSidePopup'
import { useState } from 'react';


const Favorite = ()=>{
  const dispatch = useDispatch();
  // const [favItems, setFavItems] = useState(useSelector(state=> state.favorite.favoriteItems))
  const favItems = useSelector(state=> state.favorite.favoriteItems);
  // console.log({favItems})


  const isPopupEnable = useSelector((state)=> state.toggleDetail.isPopupEnable)
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }

  const handleFavorite = (product)=>{
    dispatch(addFavorite(product))
    // const filterData = favItems.filter((item)=>item.id != product.id);
    // console.log({filterData})
    // setFavItems(filterData)
    // localStorage.setItem("favItems", JSON.stringify(filterData))

  }
    return(
        <Layout>
              <Header />
              <Box component="section" className={isPopupEnable == true ? 'feedSec overlaybody' : 'feedSec'}>
              <Container maxWidth="xl">
              <Grid container spacing={2}>
            
                 <Grid xl={9} sx={{ px: 2 }}>
                <h2>Yours Favorite Books</h2>
                <Box component="div" className='itemWraper' style={{padding:0}}>
                
                  <List
                    className='itemList'
                    component="ul"
                  >
                      {
                  favItems.map((item, ind)=>{
                    return(
                      <ListItem key={ind}>
                        <CardBook title={item.title} author={item.author} price={item.price} bookUrl={item.bookUrl} save={item.save} 
                        handleAddToCart={()=>handleAddToCart(item)}
                        handleFavorite={()=>handleFavorite(item)}
                        />
                      </ListItem>
                    )
                  })
                }
                  </List>
                </Box>
              </Grid>
              </Grid>
             
              </Container>
              </Box>
              <BookSidePopup />
        </Layout>
    )
}

export default Favorite
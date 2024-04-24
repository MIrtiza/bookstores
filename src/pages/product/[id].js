import { useState, useEffect } from 'react'
import { Button }  from '@mui/material';
import { useRouter } from 'next/router'
import { APIBASE } from '@/components/apiBase';
import axios from 'axios';
import Image from 'next/image';
import Layout from '@/layout';
import Header from '@/components/header';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';




export const Product = ()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query

    const [data, setData] = useState({});
    const [mainImg, setMainImg] = useState()
    // console.log(mainImg.img)
   

    useEffect(()=>{
        axios.get(APIBASE)
        .then((response)=>{
            setData(response.data.BookData[id]);
            setMainImg(response.data.BookData[id].images[0].img)
            // console.log( data.images)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])



    const handleAddToCart = (product)=>{
        console.log(product)
        dispatch(addToCart(product))
      }

      const DetailBooks = ()=>{
        return (
            data.images?.map((imgData , ind) => (
                <div class = "img-item" key={ind}>
                    <a href = "#" data-id = {ind} onClick={()=> setMainImg(imgData.img)}>
                        <img src = {imgData.img} width="100" height={100} alt = "shoe image" style={{objectFit:"contain", background:"#000"}}/>
                    </a>
                </div>
            ))
        )
      }
    return (
        <Layout title="Detail Page" description={data.title}>
            <Header />

            <Container maxWidth="xl">
            <div class = "card-wrapper">
                <div class = "card">
                    {/* <!-- card left --> */}
                    <div class = "product-imgs">
                    <div class = "img-display">
                        <div class = "img-showcase">
                        <Image src = {mainImg} alt = "shoe image" width="100" height={100}  
                        style={{height: 500, objectFit:"contain", background:"#000"}} />
                        </div>
                    </div>

                    <div class = "img-select">
                      { data?.images ?  <DetailBooks/> : <p>no other images</p> }                      
                    </div>
                    </div>
                
                    <div class = "product-content">
                    <h2 class = "product-title">{data.title}</h2>
                    <div class = "product-rating">
                        <i class = "fas fa-star"></i>
                        <i class = "fas fa-star"></i>
                        <i class = "fas fa-star"></i>
                        <i class = "fas fa-star"></i>
                        <i class = "fas fa-star-half-alt"></i>
                        {/* <span>4.7 (21)</span> */}
                    </div>

                    <div class = "product-price">
                        <p class = "new-price" >Price: <span style={{fontWeight: "800"}}>PKR {data.price} </span></p>
                    </div>

                    <div class = "product-detail">
                        <h2>about this item: </h2>
                        <p> {data.plot} </p>
                        <ul>
                        
                        <li>Available: <span>in stock</span></li>
                        <li>Category: <span> {data.category} </span></li>
                        <li>Shipping Area: <span>All over the world</span></li>
                        <li>Shipping Fee: <span> Depends on Distance </span></li>
                        </ul>
                    </div>

                    <div class = "purchase-info">
                        <Button type = "button" class = "btn" onClick={()=> handleAddToCart(data)}>
                        Add to Cart <i class = "fas fa-shopping-cart"></i>
                        </Button>
                    </div>

                    </div>
                </div>
            </div>
            </Container>
        </Layout>
    )
}

export default Product
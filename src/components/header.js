import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Link, Typography, Avatar, Button } from '@mui/material';
import { WhatsApp, FavoriteBorderOutlined, Person2Outlined, SearchRounded, ShoppingBagOutlined } from '@mui/icons-material';
import logo from '@/Images/bookstoreslogo.png';
import Image from 'next/image';
import NotifyBar from './notifyBar';
import CustomBadge from '@/components/CustomBadge'
import { searchData } from '@/redux/features/searchSlice'

import InputText from '@/components/inputText'

export const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');


    // const favItemsb = useState(useSelector(state=> state.favorite.favoriteItems))
    const favItems = useSelector(state=> state.favorite.favoriteItems)
    console.log("head", favItems)

    const cartCount = useSelector((state)=> state.cart.cartItems);
    const handleSearch = (search, e) => {
        dispatch(searchData(e.target.value))
        setSearch(e.target.value)

    }
    return (
        <>

            <Box component="div" className='headerBg'></Box>
            <Box component="header" className='header'>
                <NotifyBar />
                <Container maxWidth="xl">
                    <Grid container className='row align-items-center' sx={{ justifyContent: 'space-between' }}>
                        <Grid xl={8} sm={12} >
                            <div className='logoSide'>
                                <Link href="/" underline="none" className='mainLogo'>
                                    <Image
                                        src={logo}
                                        alt="main logo"
                                        width={60}
                                        height="auto"
                                    />
                                    <Typography variant='span'>
                                        BookStores
                                    </Typography>
                                </Link>
                                <Box className='searchBox sm-hidden'>
                                    <InputText
                                        placeholder='Search by novel title or author'
                                        onChange={(e) => handleSearch(search, e)}
                                        value={search}
                                        style={{ background: "transparent", border: 0, paddingTop: 5, paddingRight: 10, borderRight: "1px solid #ccc", height: "100%", cursor: "pointer" }}
                                        icon={<SearchRounded />}

                                    />
                                </Box>

                            </div>

                        </Grid>
                        <Grid xl={4} sm={8}>
                            <Box className='topNav'>
                                <Box className='centerNav' sx={{ display: "none" }}>
                                    <Box className='whatsapp'>
                                        <WhatsApp />
                                        <a href='number:03352090951'>
                                            + 92 3352xxxxx
                                        </a>
                                    </Box>

                                </Box>
                                <Box className='buttonWrap'>

                                    {/* <Button type="button" className='sm-show'>
                                        <SearchRounded />
                                    </Button> */}
                                    <Link href="/favorites">
                                        {/* <FavoriteBorderOutlined /> */}
                                        {/* <span> {favCount} </span> */}
                                            <div className='iconWrap'>
                                        <CustomBadge iconComponent={ <FavoriteBorderOutlined />} count={favItems} />
                                        </div>
                                    </Link>
                                    <Button type="button">
                                    <div className='iconWrap'>
                                            <Person2Outlined />
                                            </div>
                                        </Button>
                                    <Link href="/cart">
                                    <div className='iconWrap'>
                                    <CustomBadge iconComponent={ <ShoppingBagOutlined />} count={cartCount} />
                                    </div>
                                    </Link>
                                  
                                    

                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Header
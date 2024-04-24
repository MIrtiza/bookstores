
import {  Card, CardContent ,CardMedia ,CardActionArea,Typography, Button  }  from '@mui/material';
import { useDispatch , useSelector} from 'react-redux';
import { open } from '@/redux/features/toggleDetail'
import { TurnedInNot, TurnedIn }  from '@mui/icons-material';

export const CardBook = ({id = 1, title, author, price, bookUrl, handleAddToCart,handleFavorite, save }) => {
 
    const dispatch = useDispatch();
    return (
        <>
            <Card sx={{ width: "100%"}} className='cardBook'>
                <CardActionArea sx={{display:"flex", flexDirection: "row" }}>
                    <div className='bookBg'>
                        <span style={{position:"absolute", top:0, right:0}} onClick={handleFavorite}>
                          {save ? <TurnedIn />  :<TurnedInNot />} 
                          
                        </span>
                        {/* <span>{save+":hi"}</span>  */}
                        <div style={{position:"relative"}}>
                        <CardMedia
                            component="img"
                            image={bookUrl}
                            alt={title}
                            onClick={()=> dispatch(open(
                                {
                                    id,
                                    title,
                                    author,
                                    price,
                                    bookUrl
                                }
                            ))}
                        />
                         <div className="pageflip"></div>
                         </div>
                    </div>
                  
                    <CardContent className='cardContent'>
                        <Typography variant="span" sx={{ fontWeight: "600", fontSize: 14, marginBottom: 1, display: "block" }}>
                            {title}
                        </Typography>
                        <Typography variant="span" sx={{ display: 'block', marginBottom: .5 }}>
                            {author}
                        </Typography>
                        <h6>
                            Rs. {price}
                        </h6>
                        <div className='buttonContain'>
                            <Button className='btn btnPrimary' onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                            <Button  className='btn btnWhite'>
                                Buy Now
                            </Button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CardBook
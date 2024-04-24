import { CardMedia, Button, Box,List,ListItem } from '@mui/material';
import { CloseOutlined }  from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { close } from '@/redux/features/toggleDetail'
import { useSelector } from 'react-redux';
import Link from 'next/link';

export const BookSidePopup = () => {
    const {isPopupEnable,id,title,author,price,bookUrl} = useSelector((state)=> state.toggleDetail)
    // const isPopupEnable = useSelector((state)=> state.toggleDetail.isPopupEnable)
    // const id = useSelector((state)=> state.toggleDetail.id);
    // const title = useSelector((state)=> state.toggleDetail.title)
    // const author = useSelector((state)=> state.toggleDetail.author);
    // const price = useSelector((state)=> state.toggleDetail.price);
    // const bookUrl = useSelector((state)=> state.toggleDetail.bookUrl);

    const dispatch = useDispatch();


    


    return (
        <div className={`bookSidePopup ${isPopupEnable}`}>
            <Button onClick={()=> dispatch(close())} className="btnClose"> <CloseOutlined /> </Button>
            <div className='popHead'>
                <h6>About the Book</h6>
                <Box component="div" className='imgWrap'>
                    <CardMedia
                        component="img"
                        image={bookUrl}
                        alt="book"
                    />
                  
                </Box>
                <h6> {title} </h6>
                <p>{author}</p>
                <strong> Price {price} </strong>
                
            </div>
            <div className='popBody'>
                <List>
                    <ListItem>
                        <strong>340</strong>
                        <span>pages</span>
                    </ListItem>
                    <ListItem>
                        <strong>104</strong>
                        <span>reviews</span>
                    </ListItem>
                    <ListItem>
                        <strong>190</strong>
                        <span>ratings</span>
                    </ListItem>
                </List>
                <div className='plotDescriotion'>
                    <h6>Plot</h6>
                    <p>
                    When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, 
                    but one of the lethal, immortal faeries who once ruled her world.
                    </p>
                </div>
             
                <Link href={`/product/${id}`} className='btn btnPrimary btnradius'>View Detail</Link>
            </div>
        </div>
    )
}

export default BookSidePopup
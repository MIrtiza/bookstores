
import { useEffect } from 'react'
import { Button  }  from '@mui/material';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '@/redux/features/cartSlice';


const CartDetail = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const handleRemoveFrmCart = (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart = (cartItem)=>{
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem)=>{
        dispatch(addToCart(cartItem))
    }
    const HandleClearCart = ()=>{
        dispatch(clearCart());
    }
    useEffect(()=>{
        dispatch(getTotals())
    },[cart, dispatch])
    return (
        <div className='cartContainer'>
            {cart.cartItems?.length === 0 ? (
                <div className='cartEmpty'>
                    <h3>your cart is currently empty</h3>
                    <div className='startShopping'>
                        <Link href='/'> <span>Start Shopping</span> </Link>
                    </div>
                </div>
            ) : (
                <div className='cartTable'>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                     <tbody>
                        <tr>
                            <th align='left'>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th align='right'>Total</th>
                        </tr>

                            {cart.cartItems?.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className='cartTitle'>
                                            <div className='imgWrap'>
                                                <img src={item.bookUrl} width="70" />
                                            </div>
                                            <div style={{display:"flex", flexDirection:"column", padding:12}}>
                                                <h6> {item.title} </h6>
                                                <p style={{marginBottom:10}}> {item.author} </p>
                                                <Button onClick={()=> handleRemoveFrmCart(item)}>Remove</Button>
                                            </div>

                                        </div>

                                    </td>
                                    <td> {item.price} </td>
                                    <td>
                                        <div className='cartQuantity'>
                                            <Button onClick={()=> handleDecreaseCart(item)}>-</Button>
                                            <div className='quantityCount'>{item.cartQuantity}</div>
                                            <Button onClick={()=> handleIncreaseCart(item)}>+</Button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='totalPrice'>
                                            {item.price * item.cartQuantity}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                    </table>

                    <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td width="80%">
                                <Button className='clrBtn' onClick={()=> HandleClearCart()}>Clear Cart</Button>
                            </td>
                            <td align='right'>
                                <div className='subTotal'>
                                    <strong>Subtotal</strong>
                                    <strong>Rs. {cart.cartTotalAmount} </strong>
                                </div>
                                <span style={{fontSize:14}}>Taxes and shipping calculated at checkout</span>
                                <Button className='btn btnPrimary'>Check Out</Button>
                                <div className='startShopping'>
                                    <Link href='/' > <span style={{color:"#a57d40"}}>Continue Shopping</span> </Link>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CartDetail
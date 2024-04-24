import {  Container, Grid, Box, List,ListItem} from '@mui/material';
import CartDetail from "@/components/cartDetail"
import Layout from "@/layout"
import Header from '@/components/header';


const Cart = ()=>{
    return(
        <Layout>
              <Header />
              <Container>
                <CartDetail />
              </Container>
            
        </Layout>
    )
}

export default Cart
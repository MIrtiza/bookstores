
import { Box, Container, Grid } from '@mui/material';

export const NotifyBar = ()=>{
    return(
        <Box className="notifyBar">
            <Container>
                <Grid xl={12}>
                    <div> <p>Free shipping on buying over 3000 rupees</p> </div>
                </Grid>
            </Container>
        </Box>
    )
}

export default NotifyBar
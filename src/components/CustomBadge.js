
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Badge, styled,IconButton} from '@mui/material';
import {ShoppingBagOutlined} from '@mui/icons-material';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));




export default function CustomBadge({iconComponent, count}) {
    const [length, setLength] = useState(0);
   
    const _length = count ? count.length : 0;
    console.log({count})
    useEffect(()=>{
        //console.log({_length})
        setLength(_length)
    
    },[count])
      
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={length} color="primary">
        {iconComponent}
      </StyledBadge>
    </IconButton>
  );
}

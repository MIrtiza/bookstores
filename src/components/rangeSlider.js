import { useState } from 'react'
import { Slider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { rangeSearch } from '@/redux/features/searchSlice';


export const RangeSlider = ()=>{
  const dispatch = useDispatch();
  const [PriceRange, setPriceRange] = useState([1000, 2000]);
 


    function valuetext(value) {
        return `${value} PKR`;
      }
    
      const minDistance = 10;
    
    
    
      const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
            setPriceRange([Math.min(newValue[0], PriceRange[1] - minDistance), PriceRange[1]]);
        } else {
            setPriceRange([PriceRange[0], Math.max(newValue[1], PriceRange[0])]);
        }

        dispatch(rangeSearch(PriceRange))
       
      };
    return (
        <>
                  <Slider
                      getAriaLabel={() => 'Minimum distance'}
                      value={PriceRange}
                      onChange={handleChange1}
                      valueLabelDisplay="on"
                      getAriaValueText={valuetext}
                      disableSwap
                      min={500}
                      max={3000}
                    /> 
        </>
    )
}

export default RangeSlider
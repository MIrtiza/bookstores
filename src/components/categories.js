import { useState, useEffect } from 'react'
import { Box, List, ListItemButton, ListItemText, Collapse, ListSubheader, Checkbox, FormControlLabel } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { categorySearch } from '@/redux/features/searchSlice'
import { useDispatch } from 'react-redux';


export const Categories = () => {

  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(true);
  // const [checkedItems, setCheckedItems] = useState();
  // const [categoryFilters, setcategoryFilters] = useState({});

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleCheckbox = (e, name) => {
      dispatch(categorySearch({ [e.target.name]: e.target.checked }))
    
  }

 
  // useEffect(() => {
  //   // console.log("checkedItems: ", checkedItems);
  // }, [checkedItems]);

  const checkboxes = [
    // 'adventure',
    // 'Fantasy Fiction',
    // 'self help',
    // 'romance',
    {
      name: 'adventure',
      key: 'adventure',
      label: 'Adventure',
    },
    {
      name: 'FantasyFiction',
      key: 'FantasyFiction',
      label: 'Fantasy Fiction',
    },
    {
      name: 'selfhelp',
      key: 'selfhelp',
      label: 'Self Help',
    },
    {
      name: 'romance',
      key: 'romance',
      label: 'Romance',
    }
  ];

  const childrenCheckbox = (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {
        checkboxes.map((item, i) => (
          <FormControlLabel
            control={<Checkbox />}
            label={item.label}
            name={item.name}
            key={item.key}
            onChange={(e) => handleCheckbox(e, item)}
          />
        ))
      }


    </Box>
  );
  return (
    <>
      <List
        className='filterCatogory'
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingBottom: 0 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Filter
          </ListSubheader>
        }
      >

        <ListItemButton onClick={handleDropdown}>

          <ListItemText primary="Categories" />
          {dropdown ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={dropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>

              <div>
                {childrenCheckbox}
              </div>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  )
}

export default Categories
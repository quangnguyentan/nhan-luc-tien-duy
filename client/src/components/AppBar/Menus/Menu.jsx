import  { useState } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import DrawRight from '../Drawer/Drawer';
import path from '../../../utils/path';
const HEADER_TEXT = [
    {
      id : 1,
      name : 'TRANG CHỦ',
      link : `${path.HOME}`
    },
   {
      id : 2,
      name : 'SOI KÈO',
      link : `/${path.SOI_KEO}`

    },
    {
      id : 3,
      name : 'TOP NHÀ CÁI',
      link : `/${path.TOP_NHA_CAI}`

    },
]
    
   
function Menu() {
  const [active, setActive] = useState(1)
  return (
    <>
    <Box
      sx={{
        display : { xs : 'none', md : 'flex'},
        gap : 2,
      }}
     >

      {HEADER_TEXT?.map((el) => (
        <Link to={el.link} style={{ color: 'white',
            padding : '8px 8px',
            alignContent : 'center',
            fontWeight : 600,
            fontSize : 15,
            borderRadius : '2px',
            minWidth : '30px',
            minHeight: 'fit-content',
            textDecoration : 'none',
            background:  active ===  el?.id  ? 'linear-gradient(50deg, #ff6427, #770000)' : '' }} key={el?.id} onClick={() => setActive(el?.id)} 
            >
            {el?.name} 
        </Link>
      ))}
    </Box>
    <Box
      sx={{
        display : { md  : 'none', xs : 'flex'},
        gap : 1,
      }}
     >
      <DrawRight/>
    </Box>
    </>
  )
}

export default Menu

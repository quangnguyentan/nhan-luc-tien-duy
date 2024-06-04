import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import bannerFooterRight from '../../assets/banner_footer_right.gif'
import bannerFooterLeft from '../../assets/banner_footer.gif'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

function Footer() {
  const [hidden, setHidden] = useState(false)
  const style = {
    position: 'fixed',
    bottom : 0,
    zIndex : 2,
    left: '65%',
    transform: { md :  'translate(-50%, -100%)', xs :  'translate(-60%, -30%)'},
    width: '50px',
    height : '50px',
  };
 
  return (
    <>
      {!hidden && <Container disableGutters fixed maxWidth='lg' sx={{ display : 'flex', maxWidth : { md : 'md', xl : 'lg', xs : 'sm'} }}>
        <Box sx={style}>
            <Box sx={{ width : { md : '500px', xs : '300px', } }}>
              <Box onClick={() => setHidden(true)}  sx={{  fontSize : '30px', cursor : 'pointer', color : 'white', right : { md : '-300px', xs : '-110px' }, position : 'absolute' }}>
               <CloseIcon fontSize="inherit"/>
              </Box>
            </Box>
        </Box>
        
          <Container sx={{ display : 'flex', justifyContent : 'center' }} >
          <Box sx={{ flexDirection : { xs : 'column', md : 'row'}, display : { md : 'flex', xs : 'flex' },width : {  xs : '150px', md : '600px'}, height : { xs : '50px', md : '80px'} }}>
              <img src={bannerFooterLeft} alt="" style={{ objectFit : 'inherit', position: "fixed", bottom : 0, height : 'inherit', width : 'inherit', zIndex : 1}} />
            </Box>
            <Box sx={{  flexDirection : { xs : 'column', md : 'row'}, display : { md : 'flex', xs : 'flex'}, width : { xs : '150px',md : '600px'}, height : { xs : '50px', md : '80px'} }}>
              <img src={bannerFooterRight} alt="" style={{ objectFit  : 'inherit', position: "fixed", bottom : 0, height : 'inherit', width : 'inherit', left : '50%', zIndex : 1  }} />
            </Box>
          </Container>
        
      </Container>}
    </>
  )
}

export default Footer
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
    zIndex : 1,
    left: '65%',
    transform: 'translate(-50%, -100%)',
    width: '50px',
    height : '50px',
  };
  return (
    <>
      {!hidden && <Container disableGutters fixed maxWidth='lg' sx={{ display : 'flex', maxWidth : { md : 'md', xl : 'lg', xs : 'sm'} }}>
        <Box sx={style}>
            <Box sx={{ width : { md : '500px', xs : '300px' } }}>
              <Box onClick={() => setHidden(true)}  sx={{ fontSize : '30px', cursor : 'pointer', color : 'white', right : { md : '-300px', xs : '-100px' }, position : 'absolute' }}>
               <CloseIcon fontSize="inherit" />
              </Box>
            </Box>
        </Box>
        
          <Box sx={{  display : { md : 'flex', xs : 'none'} }}>
            <img src={bannerFooterLeft} alt="" style={{ position: "fixed", bottom : 0, height : '80px', width : '600px' }} />
          </Box>
          <Box sx={{  display : { md : 'flex', xs : 'none'} }}>
            <img src={bannerFooterRight} alt="" style={{ position: "fixed", bottom : 0, height : '80px', width : '600px', left : '50%' }} />
          </Box>
        
      </Container>}
    </>
  )
}

export default Footer
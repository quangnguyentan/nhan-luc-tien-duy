import { Link } from 'react-router-dom';
import bannerLeft from '../../../assets/banner_header_left.gif'
import bannerRight from '../../../assets/banner_header_right.gif'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';


function Banner() {
  return (
   <Container disableGutters maxWidth='lg' fixed sx={{ pb : { xs : 15, md : 0}, flexDirection : {md : 'row', xs : 'column'} , display : {md : 'flex', xs : 'flex'},height :  { xs : '30px', md : '90px' }, width : { xs : '100%', md : '70%'}}}>
       <Box>
        <Link> 
              <img src={bannerLeft} alt="logo" style={{ objectFit : 'contain', width : {md :  '50%', xs : '100%'},  }} />  
          </Link> 
       </Box>
       <Box>
        <Link> 
              <img src={bannerRight} alt="logo" style={{ objectFit : 'contain', width : {md :  '50%', xs : '100%'} }} />  
          </Link> 
       </Box>
   </Container>
  )
}

export default Banner

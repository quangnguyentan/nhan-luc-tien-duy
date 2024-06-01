import ShowMoreText from "react-show-more-text";
import '../../index.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
function ShowMore() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height : 'fit-cotent'
  }))
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
    console.log('abc');
  }
  return (
    <ShowMoreText
      lines={1}
      className="content-css"
      anchorClass="show-more-less-clickable"
      onClick={executeOnClick}
      expanded={true}
      width='100%'
      truncatedEndingComponent={"... "}
      
  >
     <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(18)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <Item sx={{ borderRadius: '10px', border : 1, borderColor : 'rgb(254 179 7)', bgcolor : '#000000', px : 0, flexDirection : 'column', height: 'fit-content', cursor : 'pointer', '&:hover' : {
                transform : 'translateY(-10px)',
                transitionDuration : '5s'
              } }}>
                <Box sx={{  color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2 }}>
                <Typography sx={{ fontSize : '15px', fontWeight : 600, color : 'rgb(254 179 7)' }} >
                    Euro U17
                </Typography>
                <Typography sx={{ fontSize : '15px', fontWeight : 600 }} >
                  BLV Hàng Phò
                </Typography>
                </Box>
                <Divider component='li' sx={{ py : 0.5 , border : '1', borderColor : 'rgb(254 179 7)' }}/>
                <Box sx={{  color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2, py : 1 }}>
                <Box sx={{ flexDirection : 'column' }}>
                <img width='32px' height='32px' src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Sweden_national_football_team_badge.svg/1200px-Sweden_national_football_team_badge.svg.png" alt="" />
                 <Typography sx={{ fontSize : '14px' }}>
                 Sweden U17
                </Typography>
              
               </Box>
               
                <Box sx={{ flexDirection : 'column' }}>
                  <Typography sx={{ fontSize : '15px', fontWeight : 600 }} >
                    22:00 - 27/05
                  </Typography>
                  <Typography sx={{ fontSize : '15px', fontWeight : 600, color : 'rgb(254 179 7)' }} >
                    vs
                  </Typography>
                </Box>
               <Box sx={{ flexDirection : 'column' }}>
                 <img width='32px' height='32px' src=" https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Logo_Italy_National_Womens_Football_Team_2023_%28no_stars%29.svg/800px-Logo_Italy_National_Womens_Football_Team_2023_%28no_stars%29.svg.png" alt="" />
                 <Typography sx={{ fontSize : '14px' }}>
                 Italy U17
                </Typography>
              
               </Box>
                </Box>
                <Divider component='li' sx={{ border : '1', borderColor : 'rgb(254 179 7)' }}/>
                <Box sx={{ pt : 1, color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2 }}>
                <Typography sx={{ fontSize : '15px', fontWeight : 600 }}>
                  Chưa diễn ra 
                </Typography>
                <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: '30px', fontSize : '10px' }} />
                </Box>
          </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  </ShowMoreText>
  )
}

export default ShowMore
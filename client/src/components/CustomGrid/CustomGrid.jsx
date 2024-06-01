import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import '../../index.css'
import Chip from '@mui/material/Chip'
import { Link } from 'react-router-dom'
import path from '../../utils/path'
import { Container } from '@mui/material'
import { apiGetMatches } from '../../services/matchService'
import { useEffect, useState } from 'react'
import { apiGetAccount } from '../../services/accountService'
function CustomGrid({ size, flexDirectionStyle, headerBox }) {
  const [matches, setMatches] = useState('')
  const [account, setAccount] = useState('')
  const linkSetBit = 'https://nbet.vin/?a=0c077eb503c2ccc1362d615c6682ad71&utm_campaign=cpd&utm_source=dauphonglive&utm_medium=cuocfullsite&utm_content=branding'
  const styles = {
    heroContainer: {
      backgroundImage: 'url("https://xoilaczzp.tv/wp-content/themes/bongda/dist/images/bg-match.svg")',
      backgroundPosition: 'bottom 10px center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }
   };
  const Item = styled(Paper)(({ theme }) => ({

    
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height : 'fit-cotent'
  }))

  const getApiMatches = async() => {
    const response = await apiGetMatches()
    if(response.success) setMatches(response.matches)
  }
  const getApiAccount = async() => {
    const response = await apiGetAccount()
    if(response.success) setAccount(response.account)
  }
  useEffect(() => {
    getApiMatches() && getApiAccount()
  }, [])
 const convertDate = (dateString ) => {
   if(dateString){
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
    return formattedDate
   } else{
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
    return formattedDate
   }
 }
 
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ p : 0.5, mb : 1, color : 'white', width : '100%', border : 1, borderColor : 'white',  background : 'linear-gradient(50deg, #ff6427, #770000)', borderRadius : '5px', fontSize : '13px', fontWeight : 600, display : headerBox ? { md : 'flex' , xs : 'none'} : 'none' , justifyContent : 'center' }}>
        CÁC TRẬN HOT
      </Box>
       {size > 3 ?  
       <Box sx={{flexDirection : {  md :  flexDirectionStyle ? 'column' : '' },  display : { xs : 'none', md : 'flex', flexDirection : 'column', } }}>
          <Grid sx={{ position : 'relative' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={size} >
            {matches && matches?.slice(0, 3)?.map((el) => (
                 <>
                 {account && account?.filter(acc => acc?.id === el?.account_id)?.map(result => (
                  <Grid item xs={2} sm={4} md={12} key={el?.id} sx={{ pb : 1 }}>
                  <Link to={{ pathname : `/video/${el?.slug}`, search : `?idMatches=${el?.id}&idAccount=${result?.id}`}} style={{ textDecoration : 'none' }} >
                  <Item sx={{ borderRadius: '10px', border : 1, borderColor : 'white', p : 0, flexDirection : 'column', height: 'fit-content', cursor : 'pointer', '&:hover' : {
                  transform : 'translateY(-3px)',
                  transitionDuration : '5s'
                } }}>
                  <Box sx={{   
                      color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2, borderTopRightRadius : '10px', borderTopLeftRadius : '10px', p : 1 , background : 'linear-gradient(50deg, #ff6427, #770000)' }}>
                  <Typography sx={{ fontSize : 'px', fontWeight : 600, color : 'white',  }} >
                      {el?.tournament_name}
                  </Typography>
                  <Typography sx={{ fontSize : '13px', fontWeight : 600,  overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }} >
                   {result?.name}
                  </Typography>
                  </Box>
                  
                 <Box width='100%' height='100%' style={styles.heroContainer} sx={{   bgcolor : '#232324', borderBottomLeftRadius : '10px', borderBottomRightRadius : '10px' }} >
                  <Divider  sx={{  border : '1', borderColor : 'white' }}/>
                  <Box sx={{ color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2, py: 0.5 }}>
                  <Box sx={{ flexDirection : 'column' }}>
                  <img width='20px' height='20px' src={el?.host_club_logo_url} alt="" />
                  <Typography sx={{ fontSize : '14px' }}>
                    {el?.host_club_name}
                  </Typography>
                </Box>
                
                  <Box sx={{ flexDirection : 'column' }}>
                    <Typography sx={{ fontSize : '15px', fontWeight : 600 }} >
                      {el?.start_time?.slice(0, -3)} - {convertDate(el?.start_date)}
                    </Typography>
                    <Typography sx={{ fontSize : '15px', fontWeight : 600, color : 'white' }} >
                      vs
                    </Typography>
                  </Box>
                <Box sx={{ flexDirection : 'column' }}>
                  <img width='20px' height='20px' src={el?.guest_club_logo_url} alt="" />
                  <Typography sx={{ fontSize : '14px' }}>
                    {el?.guest_club_name}
                  </Typography>
                
                </Box>
                  </Box>
                  <Divider  sx={{ border : '1', borderColor : 'white' }}/>
                  <Box sx={{ p : 1, color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2, }}>
                  <Typography sx={{ fontSize : '15px', fontWeight : 600 }}>
                    Chưa diễn ra 
                  </Typography>
                  <Link to={linkSetBit} style={{ textDecoration : 'none' }} >
                    <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: '30px', fontSize : '10px' }} />
                  </Link>
                  </Box>
                 </Box>
            </Item>
          </Link>
                  </Grid>
                  ))}
                 </>
                ))}
            </Grid>
            
          </Grid> 
        </Box> : 
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {matches && matches?.slice(0, 6)?.map((el) => (
                 <>
                 {account && account?.filter(acc => acc?.id === el?.account_id)?.map(result => (
                    <Grid item xs={2} sm={4} md={4} key={el?.id}>
                  <Link to={{ pathname : `/video/${el?.slug}`, search : `?idMatches=${el?.id}&idAccount=${result?.id}`}} style={{ textDecoration : 'none' }} >
                  <Item sx={{  borderRadius: '10px', border : 1, borderColor : 'white', p : 0, flexDirection : 'column', height: 'fit-content', cursor : 'pointer', '&:hover' : {
                  transform : 'translateY(-3px)',
                  transitionDuration : '5s'
                } }}>
                  <Box sx={{ overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2, borderTopRightRadius : '10px', borderTopLeftRadius : '10px', p : 1 , background : 'linear-gradient(50deg, #ff6427, #770000)' }}>
                  <Typography sx={{ fontSize : '13px', fontWeight : 600, color : 'white',overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }} >
                      {el?.tournament_name}
                  </Typography>
                  <Typography sx={{ fontSize : '15px', fontWeight : 600,overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }} >
                   {result?.name}
                  </Typography>
                  </Box>
                  
                 <Box width='100%' height='100%' style={styles.heroContainer} sx={{ bgcolor : '#232324', borderBottomLeftRadius : '10px', borderBottomRightRadius : '10px' }} >
                  <Divider  sx={{  border : '1', borderColor : 'white' }}/>
                  <Box sx={{ color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px: 2, py : 1 }}>
                  <Box sx={{ flexDirection : 'column' }}>
                  <img width='18px' height='18px'  style={{ objectFit : 'cover' }}  src={el?.host_club_logo_url} alt="" />
                  <Typography sx={{ fontSize : '14px' ,overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }}>
                    {el?.host_club_name}
                  </Typography>
                </Box>
                
                  <Box sx={{ flexDirection : 'column',overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }}>
                    <Typography sx={{ fontSize : '15px', fontWeight : 600 }} >
                      {el?.start_time?.slice(0, -3)} - {convertDate(el?.start_date)}
                    </Typography>
                    <Typography sx={{ fontSize : '15px', fontWeight : 600, color : 'white' }} >
                      vs
                    </Typography>
                  </Box>
                <Box sx={{ flexDirection : 'column', height : '50px' }}>
                  <img width='18px' height='18px' style={{ objectFit : 'cover' }} src={el?.guest_club_logo_url} alt="" />
                  <Typography sx={{ fontSize : '14px',overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }}>
                    {el?.guest_club_name}
                  </Typography>
                
                </Box>
                  </Box>
                  <Divider  sx={{ border : '1', borderColor : 'white' }}/>
                  <Box sx={{ p : 1, color : 'white',  display : 'flex', alignItems : 'center', justifyContent : 'space-between', px : 2, }}>
                  <Typography sx={{ fontSize : '15px', fontWeight : 600 }}>
                    Chưa diễn ra 
                  </Typography>
                  <Link to={linkSetBit} style={{ textDecoration : 'none' }}>
                    <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: '30px', fontSize : '10px' }} />
                  </Link>
                  </Box>
                 </Box>
            </Item>
          </Link>
                  </Grid>
                  ))}
                 </>
                ))}
            </Grid>
    </Box>}
  </Box>
  )
}


export default CustomGrid
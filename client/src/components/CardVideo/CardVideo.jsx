import ReactPlayer from 'react-player'
import  Box from '@mui/material/Box'
import CustomGrid from '../CustomGrid/CustomGrid'
import BannerBottomVideo from '../../assets/banner_video.gif'
import BannerVideoFooter from '../../assets/bannerVideoFooter.gif'
import { Player, BigPlayButton, ControlBar , LoadingSpinner, ReplayControl} from 'video-react';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import '../../index.css'
import { useEffect, useState } from 'react'
import backgroundHeaderTitle from '../../assets/backgroundTitle.webp'
import { apiGetAccountById } from '../../services/accountService'
import { apiGetMatchesById } from '../../services/matchService'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Chip, Container, Typography } from '@mui/material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { apiGetADS } from '../../services/adsService'

import bannerLeft from '../../assets/banner_header_left.gif'
import bannerRight from '../../assets/banner_header_right.gif'
function CardVideo({ ChatBox, titleContent,blv }) {
  const [ads, setAds] = useState('')
  const chatBoxIframe =  <Box sx={{   width : { md : "30%", xs : "100%"}, height : { md : "470px", xs : "350px"}  }}>
  <iframe src="https://www5.cbox.ws/box/?boxid=949782&boxtag=pXQtQ5" width="100%" height="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	
  </Box>
  const apiGetAllADS = async() => {
    const response = await apiGetADS()
    if(response?.success) {
      const filter = response?.ads?.filter(f => f?.root_domain === "sovo.link" && f?.position === "START_VIDEO" )?.map(el => {
        return el
      })
      setAds(filter[0])
    }
  }
  useEffect(() => {
    apiGetAllADS()
  }, [])
  console.log(ads)
  const sources = {
    sintelTrailer : ads ? ads?.file_url : 'https://sovotv.live/uploads/resources/videos/67aee69f05e555769b7c925b6d36aeb7.mp4',
    // sintelTrailer: 'https://sovotv.live/uploads/resources/videos/67aee69f05e555769b7c925b6d36aeb7.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  };
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ids = params.get('idMatches');
  const idAccount = params.get('idAccount');

  const [matches, setMatches] = useState('')
  const [account, setAccount] = useState('')

  const apiGetAccount = async (ids) => {
      const response = await apiGetAccountById(ids)
      if(response.success) setAccount(response?.accountId)
  }
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
  const apiGetMatches = async (ids) => {
    const response = await apiGetMatchesById(ids)
    if(response.success) setMatches(response?.matchesId)
}
  useEffect(() => {
      window.scrollTo(0, 0)
      apiGetMatches(ids) && apiGetAccount(idAccount)
  }, [])
  const styles = {
    heroContainer: {
      backgroundImage: `url('${backgroundHeaderTitle}')`,
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }
   };
  let interval = 6
  let timeArrow = 31
  const [changeSource, setChangeSource] = useState(sources.sintelTrailer)
  const [time, setTime] = useState(null)
  const [timeNext, setTimeNext] = useState(null)
  const changeTime = () => {
    interval--
    if(interval < 0) return
    return interval
  }
  // const changeArrowTime = () => {
  //   timeArrow--
  //   if(timeArrow < 0) {
  //     setChangeSource(sources.bunnyTrailer )
  //     return
  //   }
  //   return timeArrow
  // }
  useEffect(() => {
     const timeInterVal = setInterval(() => { 
        const newTime = changeTime()
        setTime(newTime)
      }, 1000)
      return (() => {
        clearInterval(timeInterVal)
      })
  }, [])
//   useEffect(() => {
//     const timeNextArrow = setInterval(() => { 
//        const newTimeArrow = changeArrowTime()
//        setTimeNext(newTimeArrow)
//      }, 1000)
//      return (() => {
//        clearInterval(timeNextArrow)
//      })
//  }, [])
  return (
     <Box sx={{ py : { md : 0, xs : 0}}} >
    {!titleContent && matches  && <Container disableGutters sx={{ py : { md : 0, xs : 2} }} >
      <Container disableGutters  fixed sx={{  height :  { xs : '30px', md : '100%' }, width : { xs : '100%', md : '100%'}}}>
        <Box sx={{ py : 0,width : '100%' }}>
            <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
              <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
          </Box>
      </Container>
      <Box sx={{ pt : 12 ,width : '100%', height : '170px',  display : { md : 'flex', xs : 'flex'}, gap : 4, justifyContent : 'space-between', px : 8, alignItems : 'center', color : 'white'  }} style={styles.heroContainer}>
          <Box sx={{ flexDirection : 'column', alignItems : 'center', display : 'flex', gap : 1 }}>
            <img width='70px' height='70px' src={matches[0]?.host_club_logo_url} alt="" />
            <Typography sx={{ fontSize : '14px' }}>
              {matches[0]?.host_club_name}
            </Typography>
          </Box>
        <Box sx={{ flexDirection : 'column', alignItems : 'center', display : 'flex', gap : 1 }}>
          <Link style={{ textDecoration : 'none' }} >
              <Chip label='Chưa diễn ra' className='button_info' sx={{ color : 'white', borderRadius : '10px', fontWeight : 600, width : '90px', height: '30px', fontSize : '10px' }} />
          </Link>
          <Typography sx={{ fontSize : '25px' }}>
              0 - 0
          </Typography>
          <Link style={{ textDecoration : 'none' }} >
              <Chip label='Cược TA88 đảm bảo uy tín 100%' className='button_info' sx={{ display : { md : 'flex', xs : 'none'} ,color : 'white', borderRadius : '3px', fontWeight : 600, width : 'fit-content', height: '30px', fontSize : '10px' }} />
          </Link>
          <Link style={{ textDecoration : 'none' }}>
              <Chip  label='Cược LUCKY88 đảo bảo uy tín 100%' className='button_info' sx={{ display : { md : 'flex', xs : 'none'} , color : 'white', borderRadius : '3px', fontWeight : 600, width : 'fit-content', height: '30px', fontSize : '10px' }} />
          </Link>
        </Box>
        <Box sx={{ flexDirection : 'column', alignItems : 'center', display : 'flex', gap : 1 }}>
            <img width='70px' height='70px' src={matches[0]?.guest_club_logo_url} alt="" />
            <Typography sx={{ fontSize : '14px' }}>
              {matches[0]?.guest_club_name}
            </Typography>
        </Box>
      </Box>
      <Box sx={{ width : '100%', height : '60px', p : 0, display : 'flex', flexDirection : 'column', color : 'white', pt : 1   }}  >
        <Box sx={{ fontSize : '15px', fontWeight : 600 }}>
          Phát trực tiếp {matches[0]?.host_club_name} vs {matches[0]?.guest_club_name} vào lúc {matches[0]?.start_time?.slice(0, -3)}, ngày {convertDate(matches[0]?.start_date)}
        </Box>
        <Box sx={{ fontSize : '13px', fontStyle : 'italic', color : 'gray' }}>
          {matches[0]?.tournament_name}
        </Box>
        
      </Box>
    </Container>}
      <Box sx={{ display : { md : 'flex' }, gap : 2 }}>
      
        <Box sx={{ width : {md : '70%', xs : '100%'}, height : '100%'}} >
       <Box sx={{ position : 'absolute ', display : 'flex', width : {md : '43%', xs : '95%'}, justifyContent : 'space-between'}}> 
       
       {/* {changeSource !== sources.bunnyTrailer && <Button variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'default',
        right : { md : '68%'}, width : 'fit-cotent', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Video sẽ tự động bỏ qua sau {timeNext}</Button>} */}
        {ads && changeSource !== sources.bunnyTrailer ? time === 0 || time === undefined ? <Button endIcon={<SkipNextIcon/>} onClick={() => setChangeSource(sources.bunnyTrailer)} variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'pointer', right : 20, width : 'fit-content', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Bỏ qua </Button> : <Button endIcon={<SkipNextIcon/>} variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'default', right : 20, width : 'fit-content', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Có thể bỏ qua {time}</Button> : ''}</Box>
        
        <Box sx={{ position : 'absolute ', display : 'flex', width : {md : '37%', xs : '75%'}, justifyContent : 'space-between'}}> 
        <Box sx={{ position : 'absolute', zIndex : 1, 
            cursor : 'pointer', top : {md : '410px', xs : '170px'}, left : 10, objectFit : 'contain',  width : {md : '90px', xs : '50px'}  }}>
          <img src='https://tructiep2.dauphong2.live/wp-content/uploads/2024/05/CPD_Logo_290x108.gif' style={{}} alt="" />  
          </Box>
        <Box sx={{objectFit : 'contain',  position : 'absolute', zIndex : 1, right : 0, display :' flex', gap : {md : 2, xs : 1},
            color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'pointer', top : {md : '410px', xs : '170px'},  width : '90px'  }}>
        <Link style={{ textDecoration : 'none' }}>
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : {md : '80px', xs : '80px'}, height: {md : '30px', xs :'20px'}, fontSize : '10px',
           
             }} />
        </Link>
        <Link style={{ textDecoration : 'none' }}>
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : {md : '80px', xs : '80px'}, height: {md : '30px', xs :'20px'}, fontSize : '10px',
            }} />
        </Link>
        </Box>
        <Link style={{ textDecoration : 'none' }}>
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '5px', fontWeight : 600, width : '120px', height: '40px', fontSize : '10px' }} />
        </Link>
        </Box>

        <Box sx={{ width : '100%', height : '100%' }}>
         
         {ads && <Player width='100%' height='100%' src={changeSource}  autoPlay className='customIcon' poster={changeSource === sources.bunnyTrailer ? 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' : '' } >
            <ControlBar autoHide={false} disableDefaultControls  > 
              <ReplayControl seconds={10} order={2.2}  />
            </ControlBar>
            <BigPlayButton position="center" />
            <LoadingSpinner />
          </Player>}

        </Box>
        {/* <ReactPlayer width='100%'
            height='100%' playIcon volume={1} controls={true} url={
          [
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
            'https://www.youtube.com/watch?v=jNgP6d9HraI',
            'https://www.youtube.com/watch?v=ZPHVFo3C3QU'
          ]
        }/> */}
        {/* <ReactPlayer width='100%'
            style={{ objectFit : 'cover' }}
            className='viewport-header'
            height='100%' playing playIcon={<PlayArrowIcon/>} controls  url={
          [
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
          ]
        }/> */}
        
         <img className='react-player1' src={BannerVideoFooter} style={{width : '100%',objectFit : 'contain'}} alt="" /> 
        {!blv && ads && <>
          <Box sx={{ display : 'flex ', justifyContent : 'space-between' }}>
       <Button variant='contained' lassName='button_info' endIcon={<KeyboardVoiceIcon/> } startIcon={<SkipNextIcon/>} sx={{ 
            
            bgcolor : 'gray', boxShadow :'none',  color : 'white', borderRadius : '10px', fontWeight : 600, width : 'fit-content', height: 'fit-content', fontSize : '10px', m : { xs : 1 } }}>
           <Box >
           <Typography sx={{ fontSize : '9px', textTransform : 'capitalize', display : { md : 'flex', xs : 'inline-block'} }}>
              Người bình luận
            </Typography> 
            <Typography sx={{ fontSize : '9px', textTransform : 'capitalize', display : { md : 'none', xs : 'inline-block'}, px : 0.5 }}>
              :
            </Typography>
            <Typography sx={{ fontSize : '10px',textTransform : 'capitalize', display :  { md : 'flex', xs : 'inline-block' } }}>
              {account[0]?.name}
            </Typography>
           </Box>
          </Button>
          <Box sx={{ display : {xs : 'none', md : 'flex'} }}>
          <Button variant='contained' lassName='button_info' startIcon={<SkipNextIcon/>} sx={{ 
            bgcolor : 'gray', boxShadow :'none',  color : 'white', borderRadius : '10px', fontWeight : 600, width : 'fit-content', height: 'fit-content', fontSize : '10px', m : { xs : 1 } }}>
           <Box >
           <Typography sx={{ fontSize : '9px', textTransform : 'capitalize' }}>
             Nhóm Telegram
            </Typography>
            <Typography sx={{ fontSize : '10px',textTransform : 'capitalize'  }}>
              {account[0]?.name}
            </Typography>
           </Box>
          </Button>
          <Button variant='contained' lassName='button_info' startIcon={<SkipNextIcon/>} sx={{ 
            bgcolor : 'gray', boxShadow :'none',  color : 'white', borderRadius : '10px', fontWeight : 600, width : 'fit-content', height: 'fit-content', fontSize : '10px', m : { xs : 1 } }}>
           <Box >
           <Typography sx={{ fontSize : '9px', textTransform : 'capitalize' }}>
              Nhóm Facebook
            </Typography>
            <Typography sx={{ fontSize : '10px',textTransform : 'capitalize'  }}>
              {account[0]?.name}
            </Typography>
           </Box>
          </Button>
          </Box>
       </Box>
        </>}
        </Box>
        {ChatBox ? 
        chatBoxIframe
        : <CustomGrid size={12} flexDirectionStyle headerBox />}

      </Box>
      <Box sx={{ width : '100%' }}>
            <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
              <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
           </Box>
      {/* <Box sx={{ width : '100%', py :  { md :  1, xs : 0}, display : { md : 'flex' , xs  : 'flex'}, flexDirection : { xs : 'column', md : 'row'} }}>
          <Box sx={{ width : { md : '50%', xs : '100%'} }}>
            <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
          </Box>
          <Box sx={{ width : { md : '50%', xs : '100%'} }}>
            <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
          </Box>
      </Box> */}
     </Box>
  )
}

export default CardVideo
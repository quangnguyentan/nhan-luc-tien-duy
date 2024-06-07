import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import CustomGrid from '../../components/CustomGrid/CustomGrid'
import TranHotBanner from '../../assets/tran_hot.png'
import btnMore from '../../assets/btnMore.webp'
import BannerBottomVideo from '../../assets/banner_video.gif'
import CustomCard from '../../components/CustomCard/CustomCard'
import { useEffect, useState } from 'react'
import { apiGetPosts } from '../../services/postService'
import CustomSkeleton from '../../components/CustomSkeleton/CustomSkeleton'
import { apiGetADS } from '../../services/adsService'
import { apiGetStream } from '../../services/streamService'

function Home() { 
  const [visible, setVisible] = useState(6)
  const [posts, setPosts] = useState('')
  const [ads, setAds] = useState('')
  const [stream, setStream] = useState('')
  const apiGetAllADS = async() => {
    
    const response = await apiGetADS()
    if(response?.success) {
      const filter = response?.ads?.filter(f => f?.root_domain === "sovo.link")?.map(el => {
        return el
      })
      setAds(filter)
    }
  }
  const showMoreItem = () => {
    setVisible((preValue) => preValue + 3)
  }

  const apiGetPost = async () => {
    const response = await apiGetPosts()
    if(response.success) setPosts(response?.post)
  } 
  const apiGetAllStream = async () => {
    const response = await apiGetStream()
    if(response.success) setStream(response?.stream)
  } 

  useEffect(() => {
    window.scrollTo(0, 0)
    apiGetPost() &&  apiGetAllADS() && apiGetAllStream()
  }, [])
  return (
      <Container fixed disableGutters sx={{ height : (theme) => theme.football.cardVideoHeight, width : { md : '70%', xs : '100%'}  }}>
        <Box sx={{ p : { md : 0, xs : 0}, m : { md : 0, xs : 0} }}>
        {ads && stream && <CardVideo data={ads} dataStream={stream} titleContent blv/>}
        </Box>
        <Box sx={{ width : '100%',bgcolor : '#000000', px : 4, borderRadius : '15px ' }}>
          <Box sx={{ py : 2,justifyContent : 'center'}} className='tran_hot_banner'>
            <img src={TranHotBanner} alt="" style={{  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }}   />
          </Box>
          <CustomGrid size={2} start={0} end={visible} />
          <Box sx={{ py : 2,justifyContent : 'center', display : 'flex'}}>
            <img src={btnMore} onClick={showMoreItem}  alt="" style={{ cursor : 'pointer',  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }} className='show_more_banner'/>
          </Box>
        </Box>
        <Box sx={{ width : '100%', py :  { md :  1, xs : 0}, display : { md : 'flex' , xs  : 'flex'}, flexDirection : { xs : 'column', md : 'row'} }}>
           <Box sx={{ width : '100%' }}>
            <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
              <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
           </Box>
          
           <Box sx={{ width : '100%' }}>
              <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
              <Box sx={{ width : { md : '100%', xs : '100%'} }}>
                <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
              </Box>
           </Box>
        </Box>

        {posts ? <CustomCard data={posts} title={'Soi kèo bóng đá'}/> : ''}
      </Container>
  )
}

export default Home

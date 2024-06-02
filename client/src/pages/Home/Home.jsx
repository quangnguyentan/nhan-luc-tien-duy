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

function Home() { 
 
  const [posts, setPosts] = useState('')
  const [ads, setAds] = useState('')

  const apiGetAllADS = async() => {
    const response = await apiGetADS()
    if(response?.success) {
      const filter = response?.ads?.filter(f => f?.root_domain === "sovo.link")?.map(el => {
        return el
      })
      setAds(filter)
    }
  }
  
  
  const apiGetPost = async () => {
    const response = await apiGetPosts()
    if(response.success) setPosts(response?.post)
  }
  
  useEffect(() => {
    window.scrollTo(0, 0)
    apiGetPost() && apiGetAllADS()
  }, [])
  return (
      <Container fixed disableGutters sx={{ height : (theme) => theme.football.cardVideoHeight, width : { md : '70%', xs : '100%'} }}>
        <Box sx={{ p : { md : 0, xs : 0}, m : { md : 0, xs : 0} }}>
        {ads && <CardVideo data={ads} titleContent blv/>}
        </Box>
        <Box sx={{ width : '100%',bgcolor : '#000000', px : 4, borderRadius : '15px ' }}>
          <Box sx={{ py : 2,justifyContent : 'center'}} className='tran_hot_banner'>
            <img src={TranHotBanner} alt="" style={{  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }}   />
          </Box>
          <CustomGrid size={2} />
          <Box sx={{ py : 2,justifyContent : 'center', display : 'flex'}}>
            <img src={btnMore}  alt="" style={{  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }} className='show_more_banner'/>
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

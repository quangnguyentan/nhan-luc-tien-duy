import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CustomCard from '../../components/CustomCard/CustomCard'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { useEffect, useState } from 'react'
import { apiGetPosts } from '../../services/postService'
import CustomSkeleton from '../../components/CustomSkeleton/CustomSkeleton'
function WatchSetBit() {
  const [posts, setPosts] = useState('')
  const apiGetPost = async () => {
    const response = await apiGetPosts()
    if(response.success) setPosts(response?.post)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    apiGetPost()
  }, [])
  console.log(posts)
  
  return (
    <Container disableGutters fixed  maxWidth='lg' sx={{ maxWidth : { md : 'md', xl : 'lg', xs : 'sm'}, px : { md : 8} }}>
        <Box sx={{ px : 4, pt: 2 }}>
            <BreadCrumbs />
        </Box>
        {posts ? <CustomCard data={posts} title={'Soi kèo bóng đá'}/> : ''}
    </Container>
  )
}

export default WatchSetBit
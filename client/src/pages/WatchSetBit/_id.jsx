import '../../index.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import { Link, useLocation, useParams } from 'react-router-dom'
import path from '../../utils/path'
import { useEffect, useState } from 'react'
import { apiGetPosts, apiGetPostsById } from '../../services/postService'
function CustomCardById({ title,  data }) {
    let { id } = useParams(); 
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const ids = params.get('id');
    const [posts, setPosts] = useState('')
    const apiGetPost = async (ids) => {
        const response = await apiGetPostsById(ids)
        console.log(response)
        if(response.success) setPosts(response?.postsId)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        apiGetPost(ids)
    }, [])
  
  return (
    <>
    {posts && <Container fixed disableGutters sx={{ height : (theme) => theme.football.cardVideoHeight, width : { md : '70%', xs : '100%'} }}>
    <Box sx={{ p : { md : 0, xs : 2}, m : { md : 0, xs : 0} }}>
    <div style={{ color : 'white' }} dangerouslySetInnerHTML={
    { __html: posts[0]?.content }} />
    </Box>
   
  </Container>}
    </>
   
  
  )
}

export default CustomCardById
import '../../index.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import path from '../../utils/path'
function CustomCard({ title,  data }) {
  console.log(data)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#34495e' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height : 'fit-cotent'
  }))
  return (
    <Box sx={{  pb: 1, width : '100%', px : 4 }}>
        <Box sx={{ py : 4,justifyContent : 'center'}}>
          <Typography sx={{ color : '#ff6427', fontWeight : 600, display : 'flex', justifyContent : 'center',textTransform : 'uppercase' }} variant='h4'>
          {title}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 2, sm: 8, md: 12 }}>
            { data?.filter(root => root.root_domain?.includes('sovo.link'))?.map(el => 
            <Grid item xs={2} sm={4} md={4} key={el?.id}>
            <Link to={{ pathname : `/news/${el?.slug}`, search : `?id=${el?.id}`}} style={{ textDecoration : 'none' }}>
              <Item sx={{ boxShadow : 'none', bgcolor : '#1B1C21', gap : 2, display : 'flex', borderColor : 'rgb(254 179 7)', border : 'none', px : 0, flexDirection : 'column', height: 'fit-content', cursor : 'pointer' }}>
                <img src={el?.id === 2 ? 'https://tructiep2.dauphong2.live/wp-content/uploads/2024/04/Arsenal-BayernMunich.jpg' : el?.thumbnail_url  } alt="" height='100%' width='100%' style={{ borderRadius: '0 0 0 0 ', p : 0, objectFit : 'cover' }} />
                <Box sx={{ flexDirection : 'column', gap : 2, display : 'flex',}}>
                  <Typography sx={{ color : '#ff6427', textTransform : 'capitalize' }} variant='span'>
                  {title}
                  </Typography>
                  <Typography sx={{  
                      color : 'white',
                    }}>
                   {el?.title}
                  </Typography>
                  <Typography sx={{ color : 'gray',  
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }}>
                      <div dangerouslySetInnerHTML={
                          { __html: el?.content }
                      } />
                  </Typography>
                </Box>
              </Item>
            </Link>
            </Grid>
            )}
          </Grid>
      </Box>
    </Box>
  
  )
}

export default CustomCard
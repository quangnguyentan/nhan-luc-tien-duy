import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import { useEffect } from 'react'

function LiveStream() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
        <CardVideo ChatBox/>
    </Container>
  )
}

export default LiveStream
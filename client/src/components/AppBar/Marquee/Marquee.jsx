import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Mar from 'react-fast-marquee'
function Marquee() {
  return (
    <Box sx={{ height : (theme) => theme.football.marqueeHeight, bgcolor : 'darkred', color : 'white', alignContent : 'center'}}>
       <Mar speed={120}>
          <Typography sx={{ fontWeight : 400, fontSize : 15 }}>
            Thông báo: Hiện tại đang có rất nhiều bên đã giả mạo SoVo TV để lừa đối tác, Quí đối tác vui lòng liên hệ Telegram chính chủ để Quảng Cáo nhé.
          </Typography>
         
        </Mar>
    </Box>
  )
}

export default Marquee

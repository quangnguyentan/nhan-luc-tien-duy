import Container from '@mui/material/Container'
import CustomCard from '../../components/CustomCard/CustomCard'
import { useEffect } from 'react'
function Info() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <Container disableGutters fixed >
         <CustomCard titleCard='Cẩm nang' titleMore='Vai trò của các vị trí trong bóng đá 5 người (Futsal)'
        description='Bóng đá 5 người (Futsal) là môn thể thao thu hút đông đảo người chơi bởi sự sôi động, hấp dẫn và kỹ thuật. Khác với bóng đá 11 người, Futsal có những đặc điểm riêng biệt, bao gồm số lượng cầu thủ ít hơn, sân thi đấu nhỏ hơn và luật chơi khác biệt. Cùng dauphongtv tìm hiểu về các vị trí trong bóng đá 5 người qua bài viết sau nhé!'
        thumbnail='https://tructiep2.dauphong2.live/wp-content/uploads/2024/03/cac-vi-tri-trong-bong-da-5-nguoi.jpg'

        />
    </Container>
  )
}

export default Info
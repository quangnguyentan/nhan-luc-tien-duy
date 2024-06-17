import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Public = () => {
  return (
    <Box >
       
        <Outlet/>
       
    </Box>
  )
}

export default Public
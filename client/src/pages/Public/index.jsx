import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
const Public = () => {
  const location = useLocation()
  return (
    <Box>
      <Header />
      <Box sx={{ height : location.pathname === '/nganh-nghe-kinh-doanh' ||  '/tinh-thanh-pho' ? '0px' : '20px' }}/>
      <Outlet />
    </Box>
  );
};

export default Public;

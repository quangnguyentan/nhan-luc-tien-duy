import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
const Public = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Public;

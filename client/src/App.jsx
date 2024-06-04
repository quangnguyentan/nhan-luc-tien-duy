
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/Public";
import path from "./utils/path";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import WatchSetBit from "./pages/WatchSetBit/WatchSetBit";
import LiveStream from "./pages/LiveStream/LiveStream";
import CustomCardById from "./pages/WatchSetBit/_id";
import React, { useEffect, useState } from "react";
import Top from "./pages/Top/Top";

function App() {
  
  return (
    <Container disableGutters maxWidth={false} sx={{ height : 'fit-content', bgcolor : '#1B1C21' }}>
    <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
     transition={Bounce}

   />
   <Routes>
     <Route path={path.PUBLIC}  element={<Public  />}  >
       <Route path={path.HOME} element={<Home />}  />
       <Route path={path.TOP_NHA_CAI} element={<Top />} />
       <Route path={path.SOI_KEO} element={<WatchSetBit />} />
       <Route path={path.POST} element={< CustomCardById/>} />
       <Route path={path.VIDEO} element={< LiveStream/>} />
     </Route>
   </Routes>
  </Container>
  )
}

export default App

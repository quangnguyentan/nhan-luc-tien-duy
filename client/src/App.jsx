
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/";
import Home from "./pages/Home/";

import path from "./utils/path";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/Edit";
import { useEffect } from "react";
import Carrer from "./components/Carreer/Carrer";
import Location from "./components/Location/Location";
import Establish from "./components/Establish/Establish";

function App() {
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/"){
      window.location.href = path.HOME;
    }
    if(location.pathname === '/cong-ty-tnhh-dich-vu-tu-van-cung-ung-nhan-luc-tien-duy/index.html'){
      window.location.href = path.HOME;
    }
    if(location.pathname === '/cong-ty-tnhh-dich-vu-tu-van-cung-ung-nhan-luc-tien-duy/tinh-thanh-pho.html'){
      window.location.href = path.LOCATION;
    }
    
    if(location.pathname === '/cong-ty-tnhh-dich-vu-tu-van-cung-ung-nhan-luc-tien-duy/nganh-nghe.html'){
      indow.location.href = path.CARRER;
    }
    if(location.pathname === '/cong-ty-tnhh-dich-vu-tu-van-cung-ung-nhan-luc-tien-duy/cong-ty.html'){
      indow.location.href = path.ESTABLISH;
    }
  }, [location])
  return (
    <Container disableGutters sx={{ height : 'fit-content', bgcolor : '#f2f2f2'}}>
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
       <Route path={path.CARRER} element={<Carrer />}  />
       <Route path={path.LOCATION} element={<Location />}  />
       <Route path={path.ESTABLISH} element={<Establish />}  />


     </Route>
   </Routes>
  </Container>
  )
}

export default App

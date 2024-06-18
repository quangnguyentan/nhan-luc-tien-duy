
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/";
import Home from "./pages/Home/";

import path from "./utils/path";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/Edit";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    if(location.pathname === "/"){
      window.location.href = path.HOME;
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
     </Route>
   </Routes>
  </Container>
  )
}

export default App

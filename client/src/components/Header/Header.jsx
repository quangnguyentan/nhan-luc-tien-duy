import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Header() {
  return (
    <Box sx={{ width: "100%", height: "120px", bgcolor: "#1570bc", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent : {xs : 'space-between' , xl : 'normal', md : 'normal'},
          flexWrap : {xs : 'wrap'},
          gap: { xs: 1, xl: 4 },
          pb: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", xl : '14px' }, color : 'white' }}>
          Công ty mới thành lập
        </Typography>
        <Typography sx={{ fontSize: { xs: "12px", xl : '14px' }, color : 'white'  }}>
          Tỉnh/Thành phố
        </Typography>
        <Typography sx={{ fontSize: { xs: "12px", xl : '14px' }, color : 'white'  }}>
          Ngành nghề kinh doanh
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ position: "relative" }}>
       <Box sx={{   width: "100%",
            height: {xs : '30px', xl : "40px"}, fontSize: {xs : "13px", xl : '16px'}, }}>
       <input
          type="text"
          
          style={{
            padding: 12,
            borderRadius: "50px",
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            fontSize : 'inherit',
          }}
        />
       </Box>
        <Button
        sx={{ color: "white",
            width: {xl : "120px", xs : '80px'},
            height: {xs : '30px', xl : "40px"},
            position: "absolute",
            top: 0,
            right: "0px",
            borderRadius: " 0 50px 50px 0",
            border: "none",
            backgroundColor: "#404040", fontSize : {  xs: '9px' }, '&:hover' : {
              bgcolor : 'blue'
            } }}
        >
          Tìm kiếm
        </Button>
      </Box>
    </Box>
  );
}

export default Header;

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import path from '../../../utils/path';
const HEADER_TEXT = [
  {
    id : 1,
    name : 'TRANG CHỦ',
    link : `${path.HOME}`
  },
 {
    id : 2,
    name : 'SOI KÈO',
    link : `/${path.SOI_KEO}`

  },
  {
    id : 3,
    name : 'TOP NHÀ CÁI',
    link : `/${path.TOP_NHA_CAI}`

  },
]
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function DrawRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(1)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
 
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Container  
     sx={{ display: 'flex', justifyContent : 'end',}}>
     
      <AppBar open={open} sx={{ bgcolor : '#2b2b2b', boxShadow : 'none', position : 'static' }}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge='end'
            onClick={handleDrawerOpen}
            size='large'
            sx={{ ...(open && { display: 'none'}), border : 'none' }}
            
          >
           <Box sx={{ position : 'relative' }}>
            <MenuIcon sx={{ position : 'absolute', top : '-10px', right : '-70px'}}/>
           </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        onClose={handleDrawerClose}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
              bgcolor : '#000000'
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ display : 'flex', justifyContent : 'space-between', pr : 2 }}>
          <IconButton sx={{ color : 'white' }} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Box sx={{ color : 'white' }}>
           <img width={140} height={60} style={{ objectFit : 'cover' }} src={logo} alt="" />
          </Box>
        </DrawerHeader>
        <Divider />
        {HEADER_TEXT?.map((el) => (
        <Link to={el.link} style={{ color: 'white',
            padding : '12px 16px',
            alignContent : 'center',
            fontWeight : 600,
            fontSize : 15,
            borderRadius : '0px',
            textDecoration : 'none',
            background:  active ===  el?.id ? 'linear-gradient(50deg, #ff6427, #770000)' : '' }} key={el?.id} onClick={() => setActive(el?.id)} >
           {el?.name}  
        </Link>
      ))}
      </Drawer>
    </Container>
  );
}

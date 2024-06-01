import {
    experimental_extendTheme as extendTheme,
  } from '@mui/material/styles';
const APP_BAR_HEADER_HEIGHT =  '70px'
const APP_BAR_MARQUEE_HEIGHT = '35px'
const APP_BAR_BANNER_HEIGHT = '90px'
const FOOTER_BANNER_HEIGHT = '80px'
const APP_BAR_HEIGHT = `(${APP_BAR_HEADER_HEIGHT} + ${APP_BAR_MARQUEE_HEIGHT} + ${FOOTER_BANNER_HEIGHT} )`
const CARD_VIDEO_HEIGHT = `calc(fit-content- (${APP_BAR_HEADER_HEIGHT} + ${APP_BAR_MARQUEE_HEIGHT} + ${APP_BAR_BANNER_HEIGHT} + ${FOOTER_BANNER_HEIGHT}))` 
const theme = extendTheme({
  football : {
    appBarHeight : APP_BAR_HEADER_HEIGHT,
    marqueeHeight : APP_BAR_MARQUEE_HEIGHT,
    bannerHeight : APP_BAR_BANNER_HEIGHT,
    cardVideoHeight : CARD_VIDEO_HEIGHT,
    footerBannerHeight : FOOTER_BANNER_HEIGHT,
    fullAppBarHeight : APP_BAR_HEIGHT
  },
    light : {
      palette  : {
        // primary : '#2b2b2b',
        primary : '#000000',
        secondary : 'rgb(254 179 7)'

      }
    },
    dark : {
      palette  : {
        // primary : '#2b2b2b',
        primary : '#000000',
        // secondary : 'rgb(254 179 7)'
        secondary : 'white'
      }
    },
  components : {
    MuiCssBaseline : {
      styleOverrides : {
        body : {
          '*::webkit-scrollbar' : {
            width : 8,
            height : 8,

          },
          '*::webkit-scrollbar-thumb' : {
            backgroundColor : '#dcdde1',
            borderRadius : '8px',

          },
          '*::webkit-scrollbar=thumb:hover' : {
            backgroundColor : 'white',
          }
        }
      }
    }
  }
});
export default theme;
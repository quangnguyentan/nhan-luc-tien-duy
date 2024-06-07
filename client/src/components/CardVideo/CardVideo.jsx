import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";
import Box from "@mui/material/Box";
import CustomGrid from "../CustomGrid/CustomGrid";
import BannerBottomVideo from "../../assets/banner_video.gif";
import { Helmet } from "react-helmet";
import qc from "../../assets/qc.jpg";
import {
  Player,
  BigPlayButton,
  ControlBar,
  LoadingSpinner,
  PlayToggle,
  VolumeMenuButton,
  FullscreenToggle,
} from "video-react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Button from "@mui/material/Button";
import "../../index.css";
import { useEffect, useRef, useState } from "react";
import backgroundHeaderTitle from "../../assets/backgroundTitle.webp";
import { apiGetAccountById } from "../../services/accountService";
import { apiGetMatchesById } from "../../services/matchService";
import {
  Link,
  unstable_HistoryRouter,
  useLocation,
  useParams,
} from "react-router-dom";
import { Chip, Container, Grid, Typography } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { apiGetADS } from "../../services/adsService";

import bannerLeft from "../../assets/banner_header_left.gif";
import bannerRight from "../../assets/banner_header_right.gif";
import { apiGetStream, apiGetStreamById } from "../../services/streamService";
import videojs from "video.js";
function CardVideo({ ChatBox, titleContent, blv, data, dataStream }) {
  const [ads, setAds] = useState("");
  const [adsSetting, setAdsSetting] = useState("");
  const [stream, setStream] = useState("");
  const [allStream, setAllStream] = useState("");
  const [adsBannerBottomFull, setAdsBannerBottomFull] = useState("");
  const chatBoxIframe = (
    <Box
      sx={{
        width: { md: "30%", xs: "100%" },
        height: { md: "470px", xs: "350px" },
      }}
    >
      <iframe
        src="https://www5.cbox.ws/box/?boxid=949782&boxtag=pXQtQ5"
        width="100%"
        height="100%"
        allowtransparency="yes"
        allow="autoplay"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="auto"
      ></iframe>
    </Box>
  );
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://vjs.zencdn.net/8.10.0/video.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  const apiGetByIDStream = async (idStr) => {
    const response = await apiGetStreamById(idStr);
    if (response?.success) setStream(response?.streamId);
  };
  const apiGetAllADS = async () => {
    const response = await apiGetADS();
    if (response?.success) {
      const filter = response?.ads
        ?.filter(
          (f) => f?.root_domain === "sovo.link" && f?.position === "START_VIDEO"
        )
        ?.map((el) => {
          return el;
        });
      setAds(filter[0]);

      const adsSet = response?.ads
        ?.filter((f) => f?.root_domain === "sovo.link")
        ?.map((el) => {
          return el;
        });
      setAdsSetting(adsSet);
      const bannerBottom = response?.ads
        ?.filter(
          (f) =>
            f?.root_domain === "sovo.link" && f?.position === "RIBBON_VIDEO"
        )
        ?.map((el) => {
          return el;
        });
      setAdsBannerBottomFull(bannerBottom[0]);
    }
  };

  useEffect(() => {
    apiGetAllADS();
  }, []);
  const { idMatches, idAccount } = useParams();
  const location = useLocation();
  const [matches, setMatches] = useState("");
  const [account, setAccount] = useState("");
  const apiGetAccount = async (ids) => {
    const response = await apiGetAccountById(ids);
    if (response.success) setAccount(response?.accountId);
  };
  const convertDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      return formattedDate;
    } else {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      return formattedDate;
    }
  };
  const apiGetMatches = async (ids) => {
    const response = await apiGetMatchesById(ids);
    if (response.success) setMatches(response?.matchesId);
  };
  useEffect(() => {
    if (location.pathname.slice(0, 2) !== "/") {
      apiGetMatches(idMatches) &&
        apiGetAccount(idAccount) & apiGetByIDStream(Number(idMatches));
    }
  }, []);
  const styles = {
    heroContainer: {
      backgroundImage: `url('${backgroundHeaderTitle}')`,
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };

  let interval = 5;
  let timeArrow = 31;
  const [time, setTime] = useState(null);
  const [hiddenButton, setHiddenButton] = useState(false);
  const [timeNext, setTimeNext] = useState(null);
  const changeTime = () => {
    interval--;
    if (interval < 0) return;
    return interval;
  };
  // const changeArrowTime = () => {
  //   timeArrow--
  //   if(timeArrow < 0) {
  //     setChangeSource(sources.bunnyTrailer )
  //     return
  //   }
  //   return timeArrow
  // }
  const apiGetAllStream = async () => {
    const response = await apiGetStream();
    if (response.success) setAllStream(response?.stream);
  };
  useEffect(() => {
    apiGetAllStream();
  }, []);
  useEffect(() => {
    const timeInterVal = setInterval(() => {
      const newTime = changeTime();
      if (newTime === undefined) return;
      setTime(newTime);
    }, 1000);
    return () => {
      clearInterval(timeInterVal);
    };
  }, []);

  //   useEffect(() => {
  //     const timeNextArrow = setInterval(() => {
  //        const newTimeArrow = changeArrowTime()
  //        setTimeNext(newTimeArrow)
  //      }, 1000)
  //      return (() => {
  //        clearInterval(timeNextArrow)
  //      })
  //  }, [])
  const handleChangeFullscreen = () => {
    let video;
    // let html = `
    //   <image src="https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000"/>
    // `

    document.addEventListener("fullscreenchange", function () {
      var isFullscreen = document.fullscreenElement !== null;
      if (isFullscreen && adsBannerBottomFull) {
        // Nếu video ở chế độ fullscreen, hiển thị banner GIF
        var banner = document.createElement("img");
        var icon = document.createElement("img");
        const phoneWidth = 480; // Đặt theo ý thích của bạn
        const phoneHeight = 900; // Đặt theo ý thích của bạn

        banner.src = `${adsBannerBottomFull?.file_url}`;
        banner.style.position = "absolute";
        banner.style.bottom = 0;
        banner.style.left = 0;
        banner.style.width = "100%";
        banner.style.height = "80px";
        banner.style.cursor = "pointer";
        banner.style.backgroundRepeat = "no-repeat";
        banner.style.zIndex = "10";
        icon.src =
          "https://img.icons8.com/?size=100&id=46&format=png&color=000000";
        icon.style.position = "absolute";
        icon.style.cursor = "pointer";
        icon.style.bottom = "40px";
        icon.style.right = "0";
        icon.style.width = "50px";
        icon.style.height = "50px";
        icon.style.display = "flex";
        icon.style.zIndex = "9999";

        document.getElementById("my-video").appendChild(banner);
        document.getElementById("my-video").appendChild(icon);

        var hideBannerAndIcon = function () {
          banner.style.display = "none";
          icon.style.display = "none";
        };
        if (
          window.innerWidth <= phoneWidth ||
          window.innerHeight <= phoneHeight
        ) {
          banner.style.display = "none";
          icon.style.display = "none";
        }
        window.addEventListener("click", hideBannerAndIcon);
        var transferLink = function () {
          window.open(
            "https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236",
            "_blank"
          );
        };
        banner.addEventListener("click", transferLink);
      } else {
        // Nếu video thoát khỏi chế độ fullscreen, loại bỏ banner GIF
        var banner = document.querySelector(
          `img[src='${adsBannerBottomFull?.file_url}']`
        );
        var icon = document.querySelector(
          'img[src="https://img.icons8.com/?size=100&id=46&format=png&color=000000"]'
        );
        if (banner && icon) {
          banner.remove();
          icon.remove();
        }
      }
      return () => {
        video.removeEventListener("fullscreenchange");
      };
    });
  };
  const handleClick = () => {
    const video = document.getElementById("my-video");

    const adSkipButton = document.getElementById("ad-skip-button");
    const userGestureEvents = ["touchend", "click"];
    const handleAdSkip = () => {
      video.play();
    };
    userGestureEvents.forEach((event) => {
      adSkipButton.addEventListener(event, handleAdSkip);
    });

    return () => {
      userGestureEvents.forEach((event) => {
        adSkipButton.removeEventListener(event, handleAdSkip);
      });
      video.removeEventListener("fullscreenchange");
    };
  };

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "https://vjs.zencdn.net/8.10.0/video-js.css";
    script.src = "https://vjs.zencdn.net/8.10.0/video.min.js";
    script.async = true;
    document.body.appendChild(script);
    document.head.appendChild(link);

    const handleLocationChange = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("DOMContentLoaded", handleClick);
    window.addEventListener("DOMContentLoaded", handleLocationChange);
    handleChangeFullscreen();
    // Cleanup function
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.body.removeChild(script);
      document.head.removeChild(link);
      window.removeEventListener("DOMContentLoaded", handleClick);
      window.removeEventListener("DOMContentLoaded", handleLocationChange);
    };
  }, [handleClick]);
  return (
    <Box
      sx={{ height: "fit-content", md: 0, xs: 0, bgcolor: "#1B1C21" , p : 0 }}
    >
      {!titleContent && matches && (
        <Container disableGutters sx={{ py: { md: 0, xs: 0 }, px : 2 }}>
          {adsSetting &&
            adsSetting?.map((el) => (
              <Box key={el?.id}>
                {el?.position === "TOP" ? (
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "100%",
                        py: { md: 0, xs: 0 },
                        display: { md: "flex", xs: "flex" },
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Box sx={{ width: { md: "100%", xs: "100%" } }}>
                        <Link>
                          <img
                            src={el?.file_url}
                            style={{ width: "100%", objectFit: "contain" }}
                            alt=""
                          />
                        </Link>
                      </Box>
                      <Box sx={{ width: { md: "100%", xs: "100%" } }}>
                        <Link to={el?.redirect_to}>
                          <img
                            src={el?.file_url}
                            style={{ width: "100%", objectFit: "contain" }}
                            alt=""
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            ))}

          <Box
            sx={{
              pt: {
                xs: 0,
                md: 0,
                width: "100%",
                height: { md: "120px", xs: "120px" },
              },
            }}
            style={styles.heroContainer}
          >
            <Box
              sx={{
                py: 4,
                display: { md: "flex", xs: "flex" },
                gap: 4,
                justifyContent: "space-between",
                px: { xs: 1, md: 8 },
                alignItems: "center",
                color: "white",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <img
                  width="70px"
                  height="70px"
                  src={matches[0]?.host_club_logo_url}
                  alt=""
                />
                <Typography sx={{ fontSize: "14px" }}>
                  {matches[0]?.host_club_name}
                </Typography>
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <Link style={{ textDecoration: "none" }}>
                  <Chip
                    label={
                      stream && stream[0]?.m3u8_url ? (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box className="truc_tiep"></Box>
                          <span>Đang diễn ra</span>
                        </Box>
                      ) : (
                        "Chưa diễn ra"
                      )
                    }
                    className="button_info"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  />
                </Link>
                <Typography sx={{ fontSize: "25px" }}>0 - 0</Typography>
                <Link style={{ textDecoration: "none" }}>
                  <Chip
                    label="Cược TA88 đảm bảo uy tín 100%"
                    className="button_info"
                    sx={{
                      display: { md: "flex", xs: "none" },
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  />
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <Chip
                    label="Cược LUCKY88 đảo bảo uy tín 100%"
                    className="button_info"
                    sx={{
                      display: { md: "flex", xs: "none" },
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <img
                  width="70px"
                  height="70px"
                  src={matches[0]?.guest_club_logo_url}
                  alt=""
                />
                <Typography sx={{ fontSize: "14px" }}>
                  {matches[0]?.guest_club_name}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "60px",
              p: 0,
              display: "flex",
              flexDirection: "column",
              color: "white",
              pt: 1,
            }}
          >
            <Box sx={{ fontSize: "15px", fontWeight: 600 }}>
              Phát trực tiếp {matches[0]?.host_club_name} vs{" "}
              {matches[0]?.guest_club_name} vào lúc{" "}
              {matches[0]?.start_time?.slice(0, -3)}, ngày{" "}
              {convertDate(matches[0]?.start_date)}
            </Box>
            <Box sx={{ fontSize: "13px", fontStyle: "italic", color: "gray" }}>
              {matches[0]?.tournament_name}
            </Box>
          </Box>
        </Container>
      )}
      <Box sx={{ height: "20px" }} />
      <Box sx={{ display: { md: "flex" }, gap: 2 }}>
        <Box
          sx={{
            width: {
              md: location?.pathname === "/" ? "66%" : "70%",
              xs: "100%",
            },
            height: "100%",
          }}
        >
          {!hiddenButton && (
            <Box
              sx={{
                position: "relative ",
                display: "flex",
                width: { md: "100%", xs: "100%" },
                justifyContent: "space-between",
              }}
            >
              {/* {changeSource !== sources.bunnyTrailer && <Button variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'default',
        right : { md : '68%'}, width : 'fit-cotent', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Video sẽ tự động bỏ qua sau {timeNext}</Button>} */}
              {ads && stream ? (
                time === 0 ||
                time === undefined ||
                time === null ||
                time === NaN ? (
                  <Button
                    id="ad-skip-button"
                    endIcon={<SkipNextIcon />}
                    onClick={() => {
                      setVisible(true);
                      setHiddenButton(true);
                    }}
                    variant="contained"
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      color: "white",
                      fontSize: "10px",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      right: 10,
                      width: "fit-content",
                      margin: "25px",
                      height: "30px",
                      backgroundColor: "black",
                    }}
                  >
                    Bỏ qua
                  </Button>
                ) : (
                  <Button
                    endIcon={<SkipNextIcon />}
                    variant="contained"
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      color: "white",
                      fontSize: "10px",
                      textTransform: "capitalize",
                      cursor: "default",
                      right: 10,
                      width: "fit-content",
                      margin: "25px",
                      height: "30px",
                      backgroundColor: "black",
                    }}
                  >
                    Có thể bỏ qua {time}
                  </Button>
                )
              ) : (
                ""
              )}
            </Box>
          )}

          <Box sx={{ width: "100%", height: "100%" }}>
            {/* <video
                id="video"
                type="application/x-mpegURL"
                crossOrigin="anonymous"
                class="videoCentered"
                width="100%"
                height="380"
                muted
                autoplay
                preload="auto"
                controls
              ></video> */}
            {/* <video
                id="video"
                class="video-js"
                controls
                preload="auto"
                width="640"
                height="264"
                data-setup="{}"
              >
                <source src="https://10407a55ad3.vws.vegacdn.vn/live/_definst_/stream_9_3cc1894f/playlist.m3u8" type="application/x-mpegURL" />
              </video> */}
            {/* <ReactPlayer width='100%'
            style={{ objectFit : 'cover' }}
            className='viewport-header'
            height='100%' playing  controls  url={
          [
            'https://10407a55ad3.vws.vegacdn.vn/live/_definst_/stream_9_3cc1894f/playlist.m3u8',
          ]
        
        } config={{
          file : {
            hlsOptions 
          }
        }}/> */}
            {visible && stream && (
              <Box
                sx={{
                  height: { md: "470px", xs: "180px" },                 
                 
                 
                }}
              >
                {/* <Box className="banner_bottom_fullscreen">
                {adsSetting && adsSetting?.map((el) => (
                  <Link key={el?.id}>
                    {el?.position === "RIBBON_VIDEO" ? (
                      <img
                        src={el?.file_url}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                ))}
                </Box> */}
                <video
                  id="my-video"
                  class="video-js"
                  controls="controls"
                  preload="auto"
                  autoPlay="autoPlay"
                  playsInline
                  poster={!stream[0]?.m3u8_url ? qc : ""}
                  videoWidth="100%"
                  videoHeight="0px"
                  data-setup="{}"
                >
                  <source
                    src={stream[0]?.m3u8_url}
                    type="application/x-mpegURL"
                  />
                </video>
              </Box>
            )}
            {/* {location.pathname.slice(0, 2) === "/" && stream && (
              <Box sx={{ height : { md : '470px' , xs : '230px'} }}>
              <video
                  id="my-video"
                  class="video-js"
                  controls="controls"
                  preload="auto"
                  autoPlay="autoPlay"
                  playsInline
                  poster= {!stream[0]?.m3u8_url ? qc : ""}
                  videoWidth='inherit'
                  videoHeight='inherit'
                  data-setup='{}'
                >
                <source
                    src={stream[0]?.m3u8_url}
                    type="application/x-mpegURL"
                  
                  />
                </video>
              </Box>
            )} */}
            {!visible && ads && (
              <Player
                width="100%"
                playsInline
                height="100%"
                src={
                  ads?.file_url
                    ? ads?.file_url
                    : "https://sovotv.live/uploads/resources/videos/67aee69f05e555769b7c925b6d36aeb7.mp4"
                }
                preload="auto"
                autoPlay="autoPlay"
                className="customIcon"
              >
                <ControlBar autoHide={true}>
                  <ControlBar>
                    <PlayToggle />
                    <VolumeMenuButton />
                  </ControlBar>
                  <ControlBar>
                    <FullscreenToggle />
                  </ControlBar>
                </ControlBar>
                <BigPlayButton position="center" />
                <LoadingSpinner />
              </Player>
            )}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { md: -45, xs:  location.pathname.slice(0, 2) === "/" && visible === true ?  0 : -35 },
                  left: 20,
                  objectFit: "contain",
                  width: { md: "90px", xs: "50px", zIndex: 1 },
                }}
              >
                <img
                  src="https://sovotv.live/uploads/resources/images/6dabfc682d7291dbcdb56e76cd965ae6.jpg"
                  style={{ width: "300px" }}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  zIndex: 1,
                  objectFit: "contain",
                  position: "absolute",
                  right: { xs: "32%", md: "15%" },
                  display: " flex",
                  gap: { md: 2, xs: 1 },
                  color: "white",
                  fontSize: "10px",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  top: { md: -55, xs:  location.pathname.slice(0, 2) === "/" && visible === true ? 0 : -35 },
                  width: "90px",
                }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ textDecoration: "none" }}
                  to="https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236"
                >
                  <Chip
                    label="CƯỢC CMD68"
                    className="button_info"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: { md: "fit-content", xs: "fit-content" },
                      height: { md: "25px", xs: "20px" },
                      fontSize: "10px",
                    }}
                  />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ textDecoration: "none" }}
                >
                  <Chip
                    label="Cược NBET"
                    className="button_info"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: { md: "fit-content", xs: "fit-content" },
                      height: { md: "25px", xs: "20px" },
                      fontSize: "10px",
                    }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  zIndex: 1,
                  objectFit: "contain",
                  position: "absolute",
                  color: "white",
                  fontSize: "10px",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  top: { md: -25, xs: location.pathname.slice(0, 2) === "/" && visible === true ? '0' :  '0' },
                  width: {md : "100%", xs : '100%'},
                  height: "40px",
                }}
              >
                {adsSetting &&
                  adsSetting?.map((el) => (
                    <Link key={el?.id}>
                      {el?.position === "RIBBON_VIDEO" ? (
                        <img
                          className="react-player1"
                          src={el?.file_url}
                          style={{
                            zIndex: 1,
                            width: "100%",
                            objectFit: "contain",
                            height: "fit-content",
                          }}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </Link>
                  ))}
              </Box>
            </Box>
          </Box>
            <Box sx={{ height : { md : 0 ,xs : '20px'}}}/>
          {!blv && ads && (
            <>
              <Box sx={{ display: "flex ", justifyContent: "space-between", pt : 2 }}>
                <Button
                  variant="contained"
                  lassName="button_info"
                  endIcon={<KeyboardVoiceIcon />}
                  startIcon={<SkipNextIcon />}
                  sx={{
                    bgcolor: "gray",
                    boxShadow: "none",
                    color: "white",
                    borderRadius: "10px",
                    fontWeight: 600,
                    width: "fit-content",
                    height: "fit-content",
                    fontSize: "10px",
                    m: { xs: 1 },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "9px",
                        textTransform: "capitalize",
                        display: { md: "flex", xs: "inline-block" },
                      }}
                    >
                      Người bình luận
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "9px",
                        textTransform: "capitalize",
                        display: { md: "none", xs: "inline-block" },
                        px: 0.5,
                      }}
                    >
                      :
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        textTransform: "capitalize",
                        display: { md: "flex", xs: "inline-block" },
                      }}
                    >
                      {account[0]?.name}
                    </Typography>
                  </Box>
                </Button>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button
                    variant="contained"
                    lassName="button_info"
                    startIcon={<SkipNextIcon />}
                    sx={{
                      bgcolor: "gray",
                      boxShadow: "none",
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "fit-content",
                      fontSize: "10px",
                      m: { xs: 1 },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: "9px", textTransform: "capitalize" }}
                      >
                        Nhóm Telegram
                      </Typography>
                      <Typography
                        sx={{ fontSize: "10px", textTransform: "capitalize" }}
                      >
                        {account[0]?.name}
                      </Typography>
                    </Box>
                  </Button>
                  <Button
                    variant="contained"
                    lassName="button_info"
                    startIcon={<SkipNextIcon />}
                    sx={{
                      bgcolor: "gray",
                      boxShadow: "none",
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "fit-content",
                      fontSize: "10px",
                      m: { xs: 1 },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: "9px", textTransform: "capitalize" }}
                      >
                        Nhóm Facebook
                      </Typography>
                      <Typography
                        sx={{ fontSize: "10px", textTransform: "capitalize" }}
                      >
                        {account[0]?.name}
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
        {ChatBox ? (
          chatBoxIframe
        ) : (
          <CustomGrid size={12} flexDirectionStyle headerBox />
        )}
      </Box>
      {/* {ads?.map((el) => (
           <Link key={el?.id}>
            {el?.position === "RIGHT" ?  <Box sx={{ flexDirection : 'column', display : { md : 'flex', sm : 'none', xs : 'none'}, height : '100%' }}>
        <img src={el?.file_url} alt=""style={{ position : 'fixed', right : '5%', top : '15%', height : '40%' }}/>
        <img src={el?.file_url} alt=""style={{ position : 'fixed', right : '5%', bottom :  '5%' , height : '40%'}}/>
    </Box>
       : ''}
           </Link>
           ))} */}
      {/* <Box
        sx={{
          width: "100%",
          py: { md: 1, xs: 0 },
          display: { md: "flex", xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { md: "100%", xs: "100%" } }}>
          <img
            src={BannerBottomVideo}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
        <Box sx={{ width: { md: "100%", xs: "100%" } }}>
          <img
            src={BannerBottomVideo}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
      </Box> */}
      <Box sx={{ height: "fit-content", px : 2 }}>
        {location.pathname.slice(0, 2) !== "/" ? (
          <CustomGrid start={0} end={6} />
        ) : (
          ""
        )}
      </Box>
      {/* <Box sx={{ width : '100%', py :  { md :  1, xs : 0}, display : { md : 'flex' , xs  : 'flex'}, flexDirection : { xs : 'column', md : 'row'} }}>
          <Box sx={{ width : { md : '50%', xs : '100%'} }}>
            <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
          </Box>
          <Box sx={{ width : { md : '50%', xs : '100%'} }}>
            <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
          </Box>
      </Box> */}
    </Box>
  );
}

export default CardVideo;

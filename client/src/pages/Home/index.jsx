import React, { useEffect, useState } from "react";
import { apiGetPosts } from "../../services/postService";
import { Box, Button, Divider, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import TagIcon from "@mui/icons-material/Tag";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BrowseGalleryOutlinedIcon from "@mui/icons-material/BrowseGalleryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import anh1 from "../../assets/anh1.jpg";
import anh2 from "../../assets/anh2.jpg";
import anh3 from "../../assets/anh3.jpg";
import anh4 from "../../assets/anh4.jpg";
import anh5 from "../../assets/anh5.jpg";
import logo from "../../assets/logo.png";

import '../../index.css'

const Home = () => {
  const [post, setPost] = useState("");
  const getApiPost = async () => {
    const response = await apiGetPosts();
    console.log(response);
    if (response.success) setPost(response?.post[0]);
  };
  useEffect(() => {
    getApiPost();
  }, []);
  console.log(post);
  return (
    <Box
      sx={{ width: "100%", height: "fit-content", px: { xs: 1, xl: 4 }, pb: 2 }}
    >
      {post && (
        <>
          <Box
            sx={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: 2,
                alignItems: { xs: "start", xl: "center" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "220px", md: "220px", xl : '220px' },
                  height: { xs: "220px", md: "220px", xl : '220px' },
                  objectFit: "cover",
                }}
              >
                <img
                  src={logo}
                  alt=""
                />
                <Box
                  sx={{
                    width: "100%",
                    height: {
                      xs: "calc(100% - 170px)",
                      xl: "calc(100% - 160px)",
                    },
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  width: { xs: "55%", xl: "100%", md : '100%' },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                  {post?.company_name}
                </Typography>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row", md : 'row' },
                    gap: { xs: 1, xl: 3 },
                    alignItems: { xs: "start", xl: "center" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "140px",
                    }}
                  >
                    <AppsIcon fontSize="13px" />
                    <Typography
                      startIcon={<AppsIcon />}
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Tên quốc tế :
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    {post?.international_name}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row", md : 'row', md : 'row' },
                    gap: { xs: 1, xl: 3 },
                    alignItems: { xs: "start", xl: "center" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "140px",
                    }}
                  >
                    <AppsIcon fontSize="13px" />
                    <Typography
                      startIcon={<AppsIcon />}
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Tên viết tắt:
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    {post?.abbreviations}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row", md : 'row' },
                    gap: { xs: 1, xl: 3 },
                    alignItems: { xs: "start", xl: "center" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "140px",
                    }}
                  >
                    <TagIcon fontSize="13px" />
                    <Typography
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Mã số thuế:
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    {post?.tax_code}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row", md : 'row' },
                    gap: { xs: 1, xl: 3 },
                    alignItems: { xs: "start", xl: "center" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "140px",
                    }}
                  >
                    <LocationOnOutlinedIcon fontSize="13px" />
                    <Typography
                      startIcon={<AppsIcon />}
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Địa chỉ thuế:
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    {post?.tax_address}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row", md : 'row' },
                    gap: { xs: 1, xl: 3 },
                    alignItems: { xs: "start", xl: "center" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "140px",
                    }}
                  >
                    <PersonOutlineOutlinedIcon fontSize="13px" />
                    <Typography
                      startIcon={<AppsIcon />}
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Đại diện pháp luật:
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    {post?.representative_name}
                  </Typography>
                </Box>
                <Divider />
              </Box>
            </Box>
          </Box>
          <Box sx={{ height: { xs: "15px" } }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "140px",
                }}
              >
                <LocalPhoneOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Điện thoại:
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px" }}>
                {post?.phone_number}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "140px",
                }}
              >
                <FaxOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Fax:
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px" }}>{post?.fax}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "140px",
                }}
              >
                <LinkOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Website:
                </Typography>
              </Box>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  window.open("https://TUVANTIENDUY.COM.VN/");
                }}
                style={{ textDecoration: "none", color: "black", cursor: "p" }}
              >
                <Typography sx={{ fontSize: "14px" }}>
                  {post?.website_link}
                </Typography>
              </Link>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "140px",
                }}
              >
                <EmailOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Email:
                </Typography>
              </Box>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/u/0/#search/nhanluctienduy%40gmail.com"
                  );
                }}
                style={{ textDecoration: "none", color: "black", cursor: "p" }}
              >
                <Typography sx={{ fontSize: "14px" }}>{post?.email}</Typography>
              </Link>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: { xl: "center", xs: "start" },
                flexDirection: { xs: "column", xl: "row", md : 'row' },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: 1,
                  width: "140px",
                }}
              >
                <HomeOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Địa chỉ liên lạc:
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px" }}>
                {post?.contact_address}
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "140px",
                }}
              >
                <CalendarMonthOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Ngày hoạt động:
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px" }}>
                {post?.operation_days}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "140px",
                }}
              >
                <PriorityHighOutlinedIcon fontSize="13px" />
                <Typography
                  startIcon={<AppsIcon />}
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  Trạng thái:
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px" }}>{post?.status}</Typography>
            </Box>
            <Divider />
          </Box>
          <Box sx={{ height: "5px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              bgcolor: "#C0E0FC",
              p: 2,
            }}
          >
            <Box>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: post?.details[0]?.title_company,
                }}
              ></Typography>
              {post?.details[0]?.list.map((el) => (
                <Typography
                  key={el}
                  dangerouslySetInnerHTML={{ __html: el }}
                ></Typography>
              ))}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <li>{post?.details[0]?.representative_title}</li>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <li style={{ fontWeight: 600, fontSize: "15px" }}>
                    {post?.details[0]?.representative[0]?.representative_name} 
                  </li>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                      - Chức vụ:&nbsp;
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                      (
                       {
                        post?.details[0]?.representative[0]
                          ?.representative_position
                      }
                      )
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ position: "relative" }}>
                  <li>Danh sách nhân viên nghiệp vụ:</li>
                  {post?.details[0]?.members_list.map((el) => (
                    <ul style={{ fontSize: "15px" }}>
                      <li>{el?.id_member}</li>
                      <li>{el?.member_name}</li>
                      <li>{el?.member_date_of_birth}</li>
                      <li>{el?.member_position}</li>
                    </ul>
                  ))}
                  <Box
                    sx={{
                      display: { xs: "none", xl: "flex", md: "flex" },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xl: "470px", md: "340px" },
                        height: { xl: "280px", md: "240px" },
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    >
                      <img
                        src={anh5}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: { xl: "470px", md: "340px" },
                        height: { xl: "280px", md: "240px" },
                        position: "absolute",
                        objectFit: "cover",
                        top: "420px",
                        right: 0,
                      }}
                    >
                      <img
                        src={anh1}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: { xl: "470px", md: "340px" },
                        height: { xl: "280px", md: "240px" },
                        position: "absolute",
                        objectFit: "cover",
                        top: "860px",
                        right: 0,
                      }}
                    >
                      <img
                        src={anh3}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: { xl: "470px", md: "340px" },
                        height: { xl: "280px", md: "240px" },
                        position: "absolute",
                        objectFit: "cover",
                        bottom: "720px",
                        right: 0,
                      }}
                    >
                      <img
                        src={anh4}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { xl: "470px", md: "340px" },
                        height: { xl: "280px", md: "240px" },
                        position: "absolute",
                        objectFit: "cover",
                        bottom: "320px",
                        right: 0,
                      }}
                    >
                      <img
                        src={anh2}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box
                      className='header_info'
                      sx={{
                        width: { xl: "470px", md: "340px" },
                        height: { xl: "120px", md: "120px" },
                        position: "absolute",
                        objectFit: "cover",
                        bottom: "0",
                        right: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,

                      }}
                    >
                      <img
                        src={logo}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                          
                        }}
                      />
                      <Typography sx={{ fontWeight: 600 }}>
                        CÔNG TY TNHH ĐẦU TƯ QUỐC TẾ NYSEASIA VÀ CUNG ỨNG NHÂN
                        LỰC TIẾN DUY
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;

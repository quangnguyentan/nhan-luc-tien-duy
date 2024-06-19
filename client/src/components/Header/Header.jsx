import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import path from "../../utils/path";
import home from "../../assets/home.png";
function Header() {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  console.log(districts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  const distric = [];
  cities?.map((el) => {
    distric.push(el?.Districts);
  });
  const checkDistricts = () => {
    const districs = [];

    if (distric) {
      distric?.map((el) => {
        districs.push(el);
      });
    }
    return districs;
  };
  const checkWards = () => {
    const ward = [];
    if (checkDistricts) {
      checkDistricts()[0]?.map((el) => {
        ward?.push(el?.Wards);
      });
    }
    return ward;
  };

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    if (cityId !== "") {
      const selectedCity = cities.find((city) => city.Id === cityId);
      if (selectedCity) {
        setDistricts(selectedCity.Districts);
      }
    } else {
      setDistricts([]);
      setWards([]);
    }
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    if (districtId !== "") {
      const selectedDistrict = districts.find(
        (district) => district.Id === districtId
      );
      if (selectedDistrict) {
        setWards(selectedDistrict.Wards);
      }
    } else {
      setWards([]);
    }
  };
  return (
    <Box sx={{ width: "100%", height: "120px", bgcolor: "#1570bc", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", xl: "normal", md: "normal" },
          flexWrap: { xs: "wrap" },
          gap: { xs: 1, xl: 4 },
          pb: 1,
        }}
      >
        <Link to={`${path.HOME}`} style={{ textDecoration: "none" }}>
          <img src={home} alt="logo" />
        </Link>
        <Link to={`/${path.ESTABLISH}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{ fontSize: { xs: "12px", xl: "14px" }, color: "white" }}
          >
            Công ty mới thành lập
          </Typography>
        </Link>
        <Link to={`/${path.LOCATION}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{ fontSize: { xs: "12px", xl: "14px" }, color: "white" }}
          >
            Tỉnh/Thành phố
          </Typography>
        </Link>
        <Link to={`/${path.CARRER}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: { xs: "12px", xl: "14px" },
              color: "white",
              cursor: "pointer",
            }}
          >
            Ngành nghề kinh doanh
          </Typography>
        </Link>
      </Box>
      <Divider />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "30px", xl: "40px" },
            fontSize: { xs: "13px", xl: "16px" },
          }}
        >
          <input
            type="text"
            style={{
              padding: 12,
              borderRadius: "50px",
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              fontSize: "inherit",
            }}
          />
        </Box>
        <Box
          sx={{
            color: "white",
            width: { xl: "180px", xs: "50px", md: "180px", sm: "fit-content" },
            height: { xs: "30px", xl: "40px" },
            position: "absolute",
            top: 0,
            right: { xl: "580px", xs: "190px", md: "580px", sm: "420px" },
            borderRadius: " 0 50px 50px 0",
            border: "none",
            backgroundColor: "#404040",
            fontSize: { xs: "9px" },
            "&:hover": {
              bgcolor: "blue",
            },
          }}
        >
          <select
            style={{
              outline: "0px",
              width: "100%",
              height: "100%",
              border: "none",
            }}
            id="city"
          >
            <option value="">Tỉnh/ Thành phố </option>
            {cities.map((city) => (
              <option key={city.Id} value={city.Id}>
                {city.Name}
              </option>
            ))}
          </select>
        </Box>
        <Box
          sx={{
            color: "white",
            width: { xl: "180px", xs: "50px", md: "180px", sm: "fit-content" },
            height: { xs: "30px", xl: "40px" },
            position: "absolute",
            top: 0,
            right: { xl: "400px", xs: "140px", md: "400px", sm: "260px" },
            borderRadius: " 0 50px 50px 0",
            border: "none",
            backgroundColor: "#404040",
            fontSize: { xs: "9px" },
            "&:hover": {
              bgcolor: "blue",
            },
          }}
        >
          <select
            style={{
              outline: "0px",
              width: "100%",
              height: "100%",
              border: "none",
            }}
            id="district"
          >
            <option value="">Quận/ Huyện</option>
            {distric[0]?.map((district) => (
              <option key={district.Id} value={district.Id}>
                {district.Name}
              </option>
            ))}
          </select>
        </Box>
        <Box
          sx={{
            color: "white",
            width: { xl: "180px", xs: "50px", md: "180px", sm: "fit-content" },
            height: { xs: "30px", xl: "40px" },
            position: "absolute",
            top: 0,
            right: { xl: "220px", xs: "90px", md: "220px", sm: "120px" },
            borderRadius: " 0 50px 50px 0",
            border: "none",
            backgroundColor: "#404040",
            fontSize: { xs: "9px" },
            zIndex: 999,
            "&:hover": {
              bgcolor: "blue",
            },
          }}
        >
          <select
            id="ward"
            style={{
              outline: "0px",
              width: "100%",
              height: "100%",
              border: "none",
            }}
          >
            <option value="">Phường/ Xã</option>
            {checkWards()[18]?.map((ward) => (
              <option key={ward.Id} value={ward.Id}>
                {ward.Name}
              </option>
            ))}
          </select>
        </Box>
        <Button
          sx={{
            color: "white",
            width: { xl: "120px", xs: "80px" },
            height: { xs: "30px", xl: "40px" },
            position: "absolute",
            top: 0,
            right: "0px",
            borderRadius: " 0 50px 50px 0",
            border: "none",
            backgroundColor: "#404040",
            fontSize: { xs: "9px" },
            "&:hover": {
              bgcolor: "blue",
            },
          }}
        >
          Tìm kiếm
        </Button>
      </Box>
    </Box>
  );
}

export default Header;

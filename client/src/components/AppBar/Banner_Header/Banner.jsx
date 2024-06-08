import { Link } from "react-router-dom";
import bannerLeft from "../../../assets/banner_header_left.gif";
import bannerRight from "../../../assets/banner_header_right.gif";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

function Banner({ data }) {
  return (
    <Container
      disableGutters
      maxWidth="lg"
      fixed
      sx={{
        flexDirection: { md: "row", xs: "column" },
        display: { md: "flex", xs: "flex" },
        height: { xs: "50px", md: "90px" },
        width: { xs: "100%", md: "70%" },
        justifyContent : 'center',
      }}
    >
      {data
        ?.filter((fm) => fm?.position === "TOP")
        ?.map((el) => (
          <Link>
            <img
              src={el?.file_url}
              alt="logo"
              style={{
                width: { md: "50%", xs: "100%" },
              }}
            />
          </Link>
        ))}
    </Container>
  );
}

export default Banner;

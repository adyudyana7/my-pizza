import { Box, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "35px",
          paddingBottom: "70px",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        ПРИЯТНОГО АППЕТИТА!
      </Typography>
      <Box sx={{ flexDirection: "column" }}>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          © 2002-2024 Империя ПИЦЦЫ
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          {" "}
          Все права защищены{" "}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          ОсОО "Империя пиццы"
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          пер. Магнитогорский, дом 16, Бишкек, Чуйская область nb 720031,
          Кыргызстан
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          Телефон: 0551510707
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
        >
          <Link>
            <FacebookIcon sx={{ fontSize: "40px" }} />
          </Link>
          <Button>
            <InstagramIcon sx={{ fontSize: "40px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;

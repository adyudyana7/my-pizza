import { Box, TextField, Typography } from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import PercentIcon from "@mui/icons-material/Percent";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import Piz1 from "../assets/Piz1.png";
import Piz2 from "../assets/Piz2.png";
import Piz3 from "../assets/Piz3.png";
import Piz4 from "../assets/Piz4.png";
import Piz5 from "../assets/Piz5.png";
import Logo from "../assets/Logo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CallIcon from "@mui/icons-material/Call";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Header() {
  return (
    <Box sx={{ paddingX: "150px", paddingY: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            columnGap: "50px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography>
              <LocalPizzaIcon />
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: "18px" }}>
              Меню
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography>
              <PercentIcon />
            </Typography>
            <Typography>Акции</Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography>
              <PlaceIcon />
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: "18px" }}>
              Филиалы
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography>
              <PersonIcon />
            </Typography>

            <Typography sx={{ fontWeight: "400", fontSize: "18px" }}>
              Контакты
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>
            <InfoIcon />
          </Typography>

          <Typography sx={{ fontWeight: "400", fontSize: "18px" }}>
            О Компании
          </Typography>
        </Box>
      </Box>
      <Carousel showThumbs={false} showStatus={false}>
        <img src={Piz1} alt="" className="h-full" />
        <img src={Piz2} alt="" className="h-full" />
        <img src={Piz3} alt="" className="h-full" />
        <img src={Piz4} alt="" className="h-full" />
        <img src={Piz5} alt="" className="h-full" />
      </Carousel>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "21px", marginRight: "10px" }}
          >
            Звоните нам по номерам:
          </Typography>
          <Typography sx={{ display: "flex", marginRight: "10px" }}>
            <CallIcon /> 0(772)510707
          </Typography>
          <Typography sx={{ display: "flex", marginRight: "10px" }}>
            <CallIcon /> 0(772)510707
          </Typography>
          <Typography sx={{ display: "flex", marginRight: "10px" }}>
            <CallIcon /> 0(772)510707
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "red",
            alignItems: "center",
          }}
        >
          Показать все контакты <ChevronRightIcon />
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}>
        <img src={Logo} alt={Logo} />
        <Box>
          <Typography>Ресторан:</Typography>
          <Typography
            sx={{ fontSize: "18px", color: "red", fontWeight: "700" }}
          >
            ИМПЕРИЯ ПИЦЦЫ
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "50px", width: "600px" }}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="seach"
            variant="outlined"
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Header;

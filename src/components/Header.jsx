import React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import PercentIcon from "@mui/icons-material/Percent";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import Piz2 from "../assets/Piz2.png";
import Piz4 from "../assets/Piz4.png";
import Piz3 from "../assets/Piz3.png";
import Piz1 from "../assets/Piz1.png";
import Piz5 from "../assets/Piz5.png";
import Ramadan from "../assets/Ramadan (2).png";

import Logo from "../assets/Logo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CallIcon from "@mui/icons-material/Call";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <Box sx={{ paddingX: "70px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
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
          <Link to="/menu">
            <Button
              sx={{
                display: "flex",
                p: 1,

                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: "0px 1px 1px rgba(1, 4, 0, 0.2)",
                  transform: "scale(1.08)",
                  cursor: "pointer",
                  color: "orange",
                },
              }}
            >
              <IconButton>
                <LocalPizzaIcon />
              </IconButton>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "black",
                  borderBottom: "none",
                }}
              >
                Меню
              </Typography>
            </Button>
          </Link>

          <Link to="/action">
            <Button
              sx={{
                display: "flex",
                p: 1,

                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: "0px 1px 1px rgba(1, 4, 0, 0.2)",
                  transform: "scale(1.08)",
                  cursor: "pointer",
                  color: "orange",
                },
              }}
            >
              <IconButton>
                <PercentIcon />
              </IconButton>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "600", color: "black" }}
              >
                Акции
              </Typography>
            </Button>
          </Link>

          <Link to="/fillials">
            <Button
              sx={{
                display: "flex",
                p: 1,

                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: "0px 1px 1px rgba(1, 4, 0, 0.2)",
                  transform: "scale(1.08)",
                  cursor: "pointer",
                  color: "orange",
                },
              }}
            >
              <IconButton>
                <PlaceIcon />
              </IconButton>
              <Typography
                sx={{ fontWeight: "600", fontSize: "14px", color: "black" }}
              >
                Филиалы
              </Typography>
            </Button>
          </Link>

          <Link to="/contacts">
            <Button
              sx={{
                display: "flex",
                p: 1,

                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: "0px 1px 1px rgba(1, 4, 0, 0.2)",
                  transform: "scale(1.08)",
                  cursor: "pointer",
                  color: "orange",
                },
              }}
            >
              <IconButton>
                <PersonIcon />
              </IconButton>

              <Typography
                sx={{ fontWeight: "600", fontSize: "14px", color: "black" }}
              >
                Контакты
              </Typography>
            </Button>
          </Link>

          <Link>
            <Button sx={{ marginLeft: "440px", color: "black", border: "5px" }}>
              <ShoppingBasketIcon />
            </Button>
          </Link>
        </Box>

        <Link to="/company">
          <Button
            sx={{
              display: "flex",
              p: 1,

              transition: "all 0.2s",
              "&:hover": {
                boxShadow: "0px 1px 1px rgba(1, 4, 0, 0.2)",
                transform: "scale(1.08)",
                cursor: "pointer",
                color: "orange",
              },
            }}
          >
            <IconButton>
              <InfoIcon />
            </IconButton>

            <Typography
              sx={{
                fontSize: "14px",
                color: "black",
                fontWeight: "600",
              }}
            >
              О Компании
            </Typography>
          </Button>
        </Link>
      </Box>
      <Carousel showThumbs={false} showStatus={false}>
        <img src={Ramadan} alt="" className="h-full" />
        <img src={Piz2} alt="" className="h-full" />
        <img src={Piz4} alt="" className="h-full" />
        <img src={Piz3} alt="" className="h-full" />
        <img src={Piz1} alt="" className="h-full" />
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
            sx={{
              fontWeight: "700",
              fontSize: "21px",
              marginRight: "30px",
              paddingTop: "40px",
            }}
          >
            Звоните нам по номерам:
          </Typography>
          <Typography
            sx={{ display: "flex", marginRight: "40px", paddingTop: "40px" }}
          >
            <CallIcon /> 0(772)510707
          </Typography>
          <Typography
            sx={{ display: "flex", marginRight: "40px", paddingTop: "40px" }}
          >
            <CallIcon /> 0(775)220807
          </Typography>
          <Typography
            sx={{ display: "flex", marginRight: "40px", paddingTop: "40px" }}
          >
            <CallIcon /> 0(772)51038
          </Typography>
        </Box>

        <IconButton
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "red",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          Показать все контакты <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}>
        <img width="100px" height="70px" src={Logo} alt={Logo} />
        <Box>
          <Typography>Ресторан:</Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "red",
              fontWeight: "700",
              paddingTop: "10px",
            }}
          >
            ИМПЕРИЯ ПИЦЦЫ
          </Typography>
        </Box>
        <Box
          sx={{ paddingLeft: "50px", width: "600px", paddingBottom: "50px" }}
        >
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

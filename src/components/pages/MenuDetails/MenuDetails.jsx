import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Korzina from "../../Korzina/Korzina";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import clsx from "clsx";

function MenuDetails() {
  const location = useLocation();
  const { item } = location.state;
  function getRandomPrice() {
    return Math.floor(Math.random() * (200 - 49 + 1) + 50);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          width: "500px",
          border: "3px solid #000",
          borderRadius: "40px",
          padding: "30px 30px",
        }}
      >
        <img width="500" height="500" src={item.image} alt="" />
        <Typography sx={{ fontSize: "20px", fontWeight: "700", pt: "6px" }}>
          {item.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "550",
            color: "#4a4946",
            pt: "10px",
          }}
        >
          {item.ingredients}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "gray",
            fontWeight: "600",
            paddingTop: "10px",
          }}
        >
          {item.instructions}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{ width: "180px", color: "black", borderRadius: "13px" }}
            variant="outlined"
            // onClick={handleAddToCart}
          >
            ADDtocart
          </Button>

          <Box
            onClick={Korzina}
            sx={{
              bgcolor: "white p-1.5 rounded-full ",
              boxShadow: "-xl",
              paddingTop: "4px",
              marginLeft: "10px",
            }}
          >
            <FavoriteBorderIcon
              sx={clsx(
                "transition-[fill] duration-500 hover:stroke-red-500 hover:fill-red-500"
              )}
              strokeWidth={1}
            />
          </Box>

          <Typography
            sx={{
              color: "black",
              fontWeight: "600",
              paddingTop: "4px",
              marginLeft: "10px",
            }}
          >
            {getRandomPrice()}$
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MenuDetails;

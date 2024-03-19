import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Korzina from "../Korzina/Korzina";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/menu/${item.id}`, { state: { item } });
  };

  function getRandomPrice() {
    return Math.floor(Math.random() * (200 - 49 + 1) + 50);
  }

  // const handleAddToCart = () => {
  //   addToCart(item);
  // };

  return (
    <Box
      onClick={toDetails}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        border: "3px solid ",
        color: "grey",
        borderRadius: "30px",
        width: "260px",
        paddingRight: "10px",

        transition: "all 0.2s",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.05)",
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          width: "300",
          height: "400",
          boxSizing: "border-box",
          objectFit: "contain",
        }}
      >
        <img x width="250" height="260" src={item.image} alt="" />
      </Box>
      <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
        {item.name}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "gray", fontWeight: "600" }}>
        {item.ingredients}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingRight: "18px",
          flexDirection: "row",
          paddingTop: "10px",
        }}
      >
        <Button
          onClick={Korzina}
          sx={{ width: "180px", color: "black", borderRadius: "13px" }}
          variant="outlined"
          // onClick={handleAddToCart}
        >
          ADDtocart
        </Button>
        <Typography
          sx={{ color: "black", fontWeight: "600", paddingBottom: "10px" }}
        >
          {getRandomPrice()}$
        </Typography>
      </Box>
    </Box>
  );
};
export default Card;

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = ({ item, addToCart }) => {
  // Добавляем пропс addToCart для передачи функции добавления в корзину
  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/menu/${item.id}`, { state: { item } });
  };

  function getRandomPrice() {
    return Math.floor(Math.random() * (200 - 49 + 1) + 50);
  }

  const handleAddToCart = () => {
    // Создаем функцию для обработки нажатия на кнопку "Добавить в корзину"
    addToCart(item); // Вызываем функцию добавления в корзину и передаем в нее выбранное блюдо
  };

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
        <img width="250" height="260" src={item.image} alt="" />
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
          sx={{ width: "180px" }}
          variant="outlined"
          onClick={handleAddToCart}
        >
          {" "}
          {/* Добавляем обработчик нажатия на кнопку */}
          Добавить в корзину {/* Изменяем текст кнопки */}
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
export default Cart;

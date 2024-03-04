import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Korzina = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Корзина
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.name}
              secondary={`Количество: ${item.quantity}`}
            />
            <Typography variant="body2">
              {item.price * item.quantity} руб.
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Итого: {totalPrice} руб.</Typography>
    </div>
  );
};

export default Korzina;

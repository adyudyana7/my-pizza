// В родительском компоненте (например, App.js)
import React, { useState } from "react";
import Cart from "./Cart";
import Korzina from "./Korzina";

const CartandKor = () => {
  const [cartItems, setCartItems] = useState([]); // Состояние для корзины

  const addToCart = (item) => {
    // Функция для добавления блюда в корзину
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      {/* Рендер компонента Cart с передачей пропса addToCart */}
      <Cart addToCart={addToCart} />
      {/* Рендер компонента Korzina с передачей пропса cartItems */}
      <Korzina cartItems={cartItems} />
    </div>
  );
};

export default CartandKor;

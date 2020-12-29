import React from "react";
import { CartContext } from "../contexts/CartContext";
import Product from "./Product";

function CartList(props) {
  const { cartProducts } = React.useContext(CartContext);
  return (
    <div>
      <h1>Cart List</h1>
      {cartProducts.map((cartProduct) => (
        <Product {...cartProduct} removeProductFromCart />
      ))}
    </div>
  );
}

export default CartList;

import React from "react";
import { CartContext } from "../contexts/CartContext";

function Product(props) {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} height="100" width="100" />
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
      {props.addProductToCart && (
        <button
          onClick={() =>
            addToCart({
              title: props.title,
              image: props.image,
              category: props.category,
              price: props.price,
              description: props.description,
            })
          }
        >
          Add to Cart
        </button>
      )}
      {props.removeProductFromCart && (
        <button onClick={() => removeFromCart(props)}>Remove from Cart</button>
      )}
    </div>
  );
}

export default Product;

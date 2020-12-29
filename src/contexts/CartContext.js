import React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = React.useState([]);

  const addToCart = (productToAdd) => {
    setCartProducts([...cartProducts, productToAdd]);
  };

  const removeFromCart = (productToRemove) => {
    setCartProducts(
      cartProducts.filter((product) => product.id !== productToRemove.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

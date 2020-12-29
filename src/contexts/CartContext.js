import React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = React.useState([]);

  const addToCart = (productToAdd) => {
    if (!cartProducts.some((element) => element.title === productToAdd.title)) {
      setCartProducts([...cartProducts, productToAdd]);
      alert(`${productToAdd.title} was added to cart successfully`);
    } else {
      alert(`${productToAdd.title} is already in the cart`);
    }
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

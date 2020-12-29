import React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = React.useState(
    JSON.parse(window.localStorage.getItem("cartProducts")) || []
  );

  const addToCart = (productToAdd) => {
    if (!cartProducts.some((element) => element.title === productToAdd.title)) {
      setCartProducts([...cartProducts, productToAdd]);
      window.localStorage.setItem(
        "cartProducts",
        JSON.stringify([...cartProducts, productToAdd])
      );
      alert(`${productToAdd.title} was added to cart successfully`);
    } else {
      alert(`${productToAdd.title} is already in the cart`);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCartProducts(
      cartProducts.filter((product) => product.id !== productToRemove.id)
    );
    window.localStorage.setItem(
      "cartProducts",
      JSON.stringify(
        cartProducts.filter((product) => product.id !== productToRemove.id)
      )
    );
  };

  const confirmOrder = () => {
    setCartProducts([]);
    alert("Order has been placed successfully!");
    window.localStorage.removeItem("cartProducts");
    window.location.href = "/";
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, confirmOrder }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

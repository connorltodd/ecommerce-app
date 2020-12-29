import React from "react";
import { CartContext } from "../contexts/CartContext";
import Product from "./Product";

function CartList(props) {
  const { cartProducts, confirmOrder } = React.useContext(CartContext);
  return (
    <div>
      <h1 className="text-center mb-3 mt-3">Cart List</h1>
      {cartProducts.length ? (
        <>
          {cartProducts.map((cartProduct) => (
            <div style={{ maxWidth: "400px", margin: "auto" }}>
              <Product {...cartProduct} removeProductFromCart />
            </div>
          ))}
          <div
            className="mb-5 mt-5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <p>
              Total: €{" "}
              {cartProducts
                .reduce((acc, element) => acc + element.price, 0)
                .toFixed(2)}
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                confirmOrder();
              }}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center mb-3 mt-3">
          There are currently no products in the cart
        </p>
      )}
    </div>
  );
}

export default CartList;

import React from "react";
import { CartContext } from "../contexts/CartContext";

function Product(props) {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  return (
    <div className="card mb-2" style={{ height: "330px" }}>
      <img
        src={props.image}
        className="card-img-top"
        alt={props.title}
        style={{
          padding: "20px",
          height: "150px",
          width: "150px",
          margin: "auto",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">€ {props.price.toFixed(2)}</p>
        {props.addProductToCart && (
          <button
            className="btn btn-primary"
            onClick={() =>
              addToCart({
                title: props.title,
                image: props.image,
                category: props.category,
                price: props.price,
                description: props.description,
                id: props.id,
              })
            }
          >
            Add to Cart
          </button>
        )}
        {props.removeProductFromCart && (
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(props)}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;

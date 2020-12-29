import React from "react";
import { Link } from "react-router-dom";
import Shop from "../images/shop.png";
import Cart from "../images/cart.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-light bg-light">
      <div className="container-fluid" style={{ justifyContent: "center" }}>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ marginRight: "50px" }}>
              <img
                src={Shop}
                height="50"
                width="50"
                style={{ display: "inline-block" }}
                alt="shop icon"
              />
              <Link
                className="nav-link"
                to="/"
                style={{ display: "inline-block" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <img
                src={Cart}
                height="50"
                width="50"
                style={{ display: "inline-block" }}
                alt="cart icon"
              />
              <Link
                className="nav-link"
                to="/cart"
                style={{ display: "inline-block" }}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

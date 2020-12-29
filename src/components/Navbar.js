import React from "react";
import { Link } from "react-router-dom";
import Shop from "../images/shop.png";
import Cart from "../images/cart.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-light bg-light">
      <div class="container-fluid" style={{ justifyContent: "center" }}>
        <div id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" style={{ marginRight: "50px" }}>
              <img
                src={Shop}
                height="50"
                width="50"
                style={{ display: "inline-block" }}
              />
              <Link class="nav-link" to="/" style={{ display: "inline-block" }}>
                Products
              </Link>
            </li>
            <li class="nav-item">
              <img
                src={Cart}
                height="50"
                width="50"
                style={{ display: "inline-block" }}
              />
              <Link
                class="nav-link"
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

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Link to="/cart">Cart</Link>
          <Link to="/">Product List</Link>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={CartList} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

import React from "react";
import axios from "axios";
import Product from "./Product";

class ProductList extends React.Component {
  state = {
    products: [],
    productSearchValue: "",
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setState({ products: response.data }));
  };

  searchProductHandler = (event) => {
    this.setState({ productSearchValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search for a product"
          onChange={this.searchProductHandler}
        />
        {this.state.products
          .filter((product) =>
            product.title
              .toLowerCase()
              .includes(this.state.productSearchValue.toLowerCase())
          )
          .map((product) => (
            <Product {...product} addProductToCart />
          ))}
      </div>
    );
  }
}

export default ProductList;

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
          className="form-control mt-4 mb-4"
          placeholder="Search for a product..."
          onChange={this.searchProductHandler}
          style={{ maxWidth: "400px", margin: "auto" }}
        />
        <div className="container mb-4">
          <div className="row">
            {this.state.products
              .filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(this.state.productSearchValue.toLowerCase())
              )
              .map((product) => (
                <div className="col-md- col-lg-4 col-sm-6" key={product.id}>
                  <Product {...product} addProductToCart />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;

import React from "react";
import "./Products.css";
import Product from "../Product/Product";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: []
    };
  }
  getProductsFromServer = async () => {
    const response = await fetch("https://localhost:5000/products");
    const parsedJSON = await response.json();
    return parsedJSON.data;
  };

  async componentDidMount() {
    const result = await this.getProductsFromServer();
    console.log(result);

    this.setState({ productArray: result });
  }

  render() {
    return (
      this.state.productArray &&
      this.state.productArray.map((product, index) => {
        return (
          <Product
            name={product.name}
            imgSrc={product.imgSrc}
            price={product.price}
          />
        );
      })
    );
  }
}
export default Products;

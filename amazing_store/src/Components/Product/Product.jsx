import React from "react";
import "./Product.css";

// const Product = props => {
//   return (
//     <div className="products">
//       <img src={props.imgSrc} className="photo-products special" />
//       <p className="description-product">{props.name}</p>
//       <p className="description-price">{props.price}</p>
//     </div>
//   );
// };

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addButtonOnHover: false };
  }
  render() {
    return (
      <div
        className="products"
        onMouseOver={() => this.setState({ addButtonOnHover: true })}
        onMouseOut={() => this.setState({ addButtonOnHover: false })}
      >
        <img src={this.props.imgSrc} className="photo-products special" />
        <p className="description-product">{this.props.name}</p>
        <p className="description-price">{this.props.price}</p>
        {this.state.addButtonOnHover && (
          <button className="cart-hover">ADD TO CART</button>
        )}
      </div>
    );
  }
}
export default Product;

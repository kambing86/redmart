import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "./Product.scss";

class Product extends React.Component {
  render() {
    const { product, history, onAddCart, onRemoveCart } = this.props;
    const link = `/details/${encodeURIComponent(product.id)}`;
    const { count = 0 } = product;
    let controlComponents = null;
    if (count == 0) {
      controlComponents = (
        <button className="btn-add-cart" onClick={(event) => {
          event.preventDefault();
          onAddCart(product);
          history.push("/cart");
        }}>
          Add To Cart
        </button>
      );
    } else {
      controlComponents = (
        <div>
          <button className="btn-product" onClick={(event) => {
            event.preventDefault();
            onRemoveCart(product);
          }}>-</button>
          <div className="product-count text-center">{count}</div>
          <button className="btn-product" onClick={(event) => {
            event.preventDefault();
            onAddCart(product);
          }}>+</button>
        </div>
      );
    }
    return (
      <Link to={link}>
        <div className="product-container text-center">
          <img src={`/images/${product.image}`} />
          <div className="product-title">
            <div>{product.name}</div>
            <div>{product.measurement}</div>
          </div>
          <div><b>${product.price}</b></div>
          {controlComponents}
        </div>
      </Link>
    );
  }
}

export default withRouter(Product);

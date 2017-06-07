import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import TopBar from "./TopBar.jsx";

import "./ProductDetails.scss";

const ProductDetails = ({ state: product, dispatch, history }) => {
  let productInfo = null;
  if (product) {
    productInfo = (
      <div className="product-details flex-row flex-auto">
        <div className="image-column">
          <div>{product.name}</div>
          <img src={`/images/${product.image}`} alt={product.name} />
        </div>
        <div>
          <div>{product.measurement}</div>
          <div><b>${product.price}</b></div>
          <div className="product-desc">{product.desc}</div>
          <button
            className="btn-add-cart"
            onClick={(event) => {
              event.preventDefault();
              dispatch({ type: "ADD_CART", product });
              history.push("/cart");
            }}
          >Add To Cart</button>
        </div>
      </div>
    );
  }
  return (
    <div className="full-frame flex-col">
      <TopBar className="flex-auto" />
      {productInfo}
    </div>
  );
};

export default withRouter(connect((state, ownProps) => ({
  state: state.productReducer.find(product => product.id === ownProps.match.params.id),
}))(ProductDetails));

import React from "react";
import { connect } from "react-redux";

import TopBar from "./TopBar.jsx";
import ProductList from "../components/ProductList.jsx";

import addCart from "../actions/addCart";
import removeCart from "../actions/removeCart";

import "./Cart.scss";

class Cart extends React.Component {
  render() {
    const { state: productsInCarts, dispatch } = this.props;
    let emptyDescription = null;
    if (productsInCarts.length === 0) {
      emptyDescription = (
        <div className="full-frame flex-auto text-center">
          <div className="empty-cart">Your cart is empty</div>
        </div>
      );
    }
    let totalAmount = 0;
    productsInCarts.forEach((product) => {
      totalAmount += product.count * parseFloat(product.price);
    });
    return (
      <div className="cart-page full-frame flex-col">
        <TopBar className="flex-auto" />
        <ProductList
          className="flex-auto"
          products={productsInCarts}
          onAddCart={(product) => { dispatch(addCart(product)); }}
          onRemoveCart={(product) => { dispatch(removeCart(product)); }}
        />
        {emptyDescription}
        <div className="cart-total text-right">Total: ${totalAmount.toFixed(2)}</div>
      </div>
    );
  }
}

export default connect(state => ({
  state: state.cartReducer,
}))(Cart);

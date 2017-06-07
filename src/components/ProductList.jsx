import React from "react";
import hash from "object-hash";

import Product from "./Product.jsx";

class ProductList extends React.Component {
  render() {
    const { products, onAddCart, onRemoveCart } = this.props;
    const productArray = products.map(product => (
      <Product
        key={hash(product)}
        product={product}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
      ));
    return (
      <div className="product-list">
        {productArray}
      </div>
    );
  }
}

export default ProductList;

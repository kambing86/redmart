import React from "react";
import hash from "object-hash";

import Product from "./Product";

const ProductList = ({ products, onAddCart, onRemoveCart }) => {
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
};

export default ProductList;

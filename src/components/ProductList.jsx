import React from "react";
import PropTypes from "prop-types";
import sha512 from "hash.js/lib/hash/sha/512";

import Product from "./Product";

import productValidator from "../validators/productValidator";

function hash(obj) {
  return sha512().update(JSON.stringify(obj)).digest("hex");
}

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

ProductList.propTypes = {
  products: PropTypes.arrayOf(productValidator).isRequired,
  onAddCart: PropTypes.func.isRequired,
  onRemoveCart: PropTypes.func.isRequired,
};

export default ProductList;

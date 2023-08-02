import React, { useState } from "react";
import { Link } from "react-router-dom";
import productData from "../Data/recommended.json";
import "../CSS/Women.css";

const Asian = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Filter products of type "female"
  const femaleProducts = productData.filter(
    (product) => product.brand === "Asian"
  );

  return (
    <div className='main-container'>
      <h1>Asian Products</h1>

      <ul className='container'>
        {femaleProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div
                className='product-card'
                onClick={() => handleProductClick(product)}>
                <img src={product.image} alt={product.name} />
                <div className='product-name'>{product.name}</div>
                <div className='product-price'>Price: ₹{product.price}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asian;

import React, { useState, useEffect } from "react";
import "./Recommended.css";
import ProductDetails from "./Productdetails";

function RecommendedProducts() {
  const [products, setProducts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // local Storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
  }, []);
  // Add To Cart
  const handleAddToCart = (product, size, color) => {
    const cartItem = { ...product, size, color };
    setCartItems([...cartItems, cartItem]);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartItem]));
  };
  // Selecting Size
  const handleSizeSelect = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);
  };
  // Selecting Color
  const handleColorSelect = (event) => {
    const selectedColor = event.target.value;
    setSelectedColor(selectedColor);
  };

  useEffect(() => {
    fetch("/recommended.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function handleItemClick(product) {
    setSelectedProduct(product);
  }

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <div className='recommended-products'>
      <h2>Recommended Products</h2>
      <div className='product-list'>
        {products.length > 0 ? (
          products.slice().map((product) => (
            <div key={product.id} className='product-item'>
              <img
                onClick={() => handleItemClick(product)}
                src={product.image}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              {/* <p>{product.description}</p> */}
              <p>Price: ${product.price}</p>
              <p className='brands'>{product.brand}</p>
              {/* <p className='dessc'>{product.desc}</p> */}
            </div>
          ))
        ) : (
          <p>No products to display</p>
        )}
      </div>
    </div>
  );
}
export default RecommendedProducts;

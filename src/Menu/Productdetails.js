import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../Data/recommended.json";
import testimonialsData from "../Data/testimonials.json";
import "../CSS/Details.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Product = ({ onAddToCart }) => {
  const { productId } = useParams();
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to manage the quantity of the selected product.
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const prev = "<";
  const next = ">";

  const [message, setMessage] = useState("");
  const selectedProduct = productData.find(
    (product) => product.id === parseInt(productId)
  );
  useEffect(() => {
    if (showMessage) {
      // Clear the message after 3 seconds
      const timer = setTimeout(() => {
        setMessage("");
        setShowMessage(false);
      }, 3000); // 3000 milliseconds = 3 seconds

      // Return a cleanup function to clear the timer if the component unmounts or showMessage changes.
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  const handlePreviousSlide = () => {
    // Move to the previous slide
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? selectedProduct.images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    // Move to the next slide
    setCurrentSlide((prevSlide) =>
      prevSlide === selectedProduct.images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleAddToCart = () => {
    // Save the selected product with quantity to the local storage.
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemWithQuantity = { ...selectedProduct, quantity };
    cartItems.push(itemWithQuantity);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // Show the message when "Add to Cart" button is clicked.
    setMessage("Product added to cart!");
    setShowMessage(true);
    // Pass the selected product to the parent component using the `onAddToCart` prop.
    onAddToCart(itemWithQuantity);
  };

  // Handler to update the quantity state when input changes.
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <>
      <div className='product-container'>
        {/* Manual Image Slider */}
        <div className='slider-containers'>
          <img
            className='product-image'
            src={selectedProduct.images[currentSlide]}
            alt={selectedProduct.name}
          />
          <div className='slider-navigation'>
            <button className='sbtn' onClick={handlePreviousSlide}>
              <FaArrowLeft />
            </button>
            <button className='sbt' onClick={handleNextSlide}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className='product-details'>
          <h2 className='product-title'>
            {selectedProduct.brand} {selectedProduct.name}
          </h2>
          <h2 className='product-price'>Price : ₹{selectedProduct.price}</h2>

          <div className='quantity-input'>
            <label className='quantity-label'>Quantity :</label>
            <input
              className='quantity-field'
              type='number'
              min='1'
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className='add-to-cart-button' onClick={handleAddToCart}>
            Add to Cart
          </button>
          {message && <div className='popup'>{message}</div>}
        </div>
      </div>
      <p className='product-description'>
        <h2>Description</h2>
        {selectedProduct.description}
      </p>
    </>
  );
};

export default Product;

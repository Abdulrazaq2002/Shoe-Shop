import React, { useState } from "react";
import "../CSS/Atc.css";

const AddToCart = () => {
  // Retrieve the cart items from the local storage.
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(storedCartItems);

  // Function to remove an item from the cart.
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    // Update the local storage with the updated cart items.
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // Update the state to trigger a re-render.
    setCartItems(updatedCartItems);
  };

  // Function to increase the quantity of an item in the cart.
  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    // Update the local storage with the updated cart items.
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // Update the state to trigger a re-render.
    setCartItems(updatedCartItems);
  };

  // Function to decrease the quantity of an item in the cart.
  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    // Update the local storage with the updated cart items.
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // Update the state to trigger a re-render.
    setCartItems(updatedCartItems);
  };

  return (
    <div className='cart-container'>
      <h2 className='cart-heading'>Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cart-empty-msg'>Your cart is empty.</p>
      ) : (
        <ul className='cart-items'>
          {cartItems.map((item) => (
            <li key={item.id} className='cart-item'>
              <img
                src={item.image}
                alt={item.name}
                className='cart-item-image'
              />
              <span className='cart-item-name'>{item.name}</span>
              <p>Price : ₹{item.price}</p>
              <div className='quantity'>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className='quantity-button'>
                  -
                </button>
                <span className='item-quantity'>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className='quantity-button'>
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className='remove-button'>
                Remove
              </button>
            </li>
          ))}
          <button className='buy-button'>Buy</button>
        </ul>
      )}
    </div>
  );
};

export default AddToCart;

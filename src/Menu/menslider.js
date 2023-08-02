import React, { useState, useEffect } from "react";
import ProductDetails from "./Productdetails";
import "../CSS/gender.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

function Mens() {
  const [selectedShoe, setSelectedShoe] = useState(0);
  const [shoes, setShoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Local Storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
  }, []);

  // Fetch Data Men
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
        setSearchTerm("");
      });
  }, []);

  const Mens = shoes.filter((shoe) => {
    return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleItemClick(product) {
    setSelectedProduct(product);
  }

  const handlePrevClick = () => {
    setSelectedShoe((prev) => (prev === 0 ? Mens.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setSelectedShoe((prev) => (prev === Mens.length - 1 ? 0 : prev + 1));
  };

  // Men Shoes Data
  //   const Mens = shoes.filter((shoe) => {
  //     return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }
  if (!Mens || Mens.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='moreSection'>
        <p>Mens</p>
        <Link className='link' to='./Menu/Mens'>
          More
        </Link>
      </div>

      <center>
        <div className='sliders'>
          <div className='slider-wrapper'>
            <div className='slider-container'>
              <div
                className='slider-content'
                style={{ transform: `translateX(-${selectedShoe * 100}%)` }}>
                {Mens.map((shoe, index) => (
                  <div key={index} className='slider-item'>
                    <Link to='./Menu/Mens'>
                      <img
                        src={shoe.image}
                        alt={shoe.name}
                        className='slider-img'
                      />
                      <p className='sprice'>{shoe.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className='slider-btn prev-btn' onClick={handlePrevClick}>
            <FaChevronLeft />
          </button>
          <button className='slider-btn next-btn' onClick={handleNextClick}>
            <FaChevronRight />
          </button>
        </div>
      </center>
    </>
  );
}

export default Mens;

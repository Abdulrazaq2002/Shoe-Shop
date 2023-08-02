import React, { useState, useEffect } from "react";
import ProductDetails from "./Productdetails";
import "../CSS/gender.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

function Women() {
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
    fetch("/women.json")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
        setSearchTerm("");
      });
  }, []);

  const Women = shoes.filter((shoe) => {
    return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleItemClick(product) {
    setSelectedProduct(product);
  }

  const handlePrevClick = () => {
    setSelectedShoe((prev) => (prev === 0 ? Women.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setSelectedShoe((prev) => (prev === Women.length - 1 ? 0 : prev + 1));
  };

  // Men Shoes Data
  //   const Women = shoes.filter((shoe) => {
  //     return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }
  if (!Women || Women.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='moreSection'>
        <p>Mens</p>
        <Link className='link' to='./Menu/Women'>
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
                {Women.map((shoe, index) => (
                  <div key={index} className='slider-item'>
                    <Link to='./Menu/Women'>
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

export default Women;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./Productdetails";
import "../CSS/Search.css";
import Data from "../Data/recommended.json";

function Search() {
  const [shoes, setShoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [results, setResults] = useState([]); // State to store the search results
  const [sortOrder, setSortOrder] = useState("priceAsc");
  const [filterBrand, setFilterBrand] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const searchInputRef = useRef(null); // Reference to the search input element

  // Local Storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
  }, []);

  // Fetch Data
  useEffect(() => {
    fetch(Data).then((response) => response.json());
    setShoes(Data);
  }, []);

  // For Search
  // For Search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = shoes.filter((shoe) => {
      // Check if the search term is included in the shoe name
      const nameMatch = shoe.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Check if the search term is included in any of the shoe tags
      const tagsMatch = shoe.searchtags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Return true if either the name or the tags match the search term
      return nameMatch || tagsMatch;
    });

    console.log(result);
    setResults(result); // Set the search results
  };

  // Focus on search input when the component mounts
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <>
      <div className='div'>
        <form onSubmit={handleSubmit} className='search-form'>
          <input
            ref={searchInputRef} // Assign the ref to the input element
            className='search-bar'
            type='text'
            placeholder='Search Shoes'
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type='submit'>Search</button>
        </form>
        {results.length > 0 ? (
          <ul className='shoe-list'>
            {results.map((shoe) => (
              <li className='shoe-item' key={shoe.id}>
                <div id='imgpage'>
                  <Link to={`/product/${shoe.id}`}>
                    <img
                      className='imgs'
                      onClick={() => setSelectedProduct(shoe)}
                      src={shoe.image}
                      alt={shoe.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
                <div className='shoe-item-details'>
                  <p className='shoe-name'>{shoe.name}</p>
                  <p className='shoe-price'>${shoe.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Search Results!</p>
        )}
      </div>
    </>
  );
}

export default Search;

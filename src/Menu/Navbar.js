import React, { useState } from "react";
import "../CSS/navbar.css";
import "../CSS/menu.css";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaHome, FaSearch, FaInfoCircle } from "react-icons/fa";
// import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm("");
    window.location.href = `/search/${searchTerm}`;
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <a href='/'>
            <img src='../IMGS/ShoeLogo.png' />
          </a>
        </div>
        <div>
          <ul className='menu2'>
            <li className='searchani'>
              <Link className='favicon' onClick={closeMenu} to='/search'>
                <FaSearch />
              </Link>
            </li>
            <li>
              <Link className='favicon' onClick={closeMenu} to='/'>
                <FaHome />
              </Link>
            </li>
            <li>
              <Link className='favicon' onClick={closeMenu} to='/Atc'>
                <FaShoppingBag />
              </Link>
            </li>
            <li>
              <Link className='favicon' onClick={closeMenu} to='/Reviews'>
                <FaInfoCircle />
              </Link>
            </li>
          </ul>
        </div>
        <button className='hamburger' onClick={toggleMenu}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </button>
        <ul className={`nav-links ${showMenu ? "show" : ""}`}>
          {/* <h2>Check This</h2> */}
          <li>
            <Link onClick={closeMenu} to='/Menu/Kids'>
              Kids
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to='/Menu/Mens'>
              Mens
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/Menu/Women'>Women</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

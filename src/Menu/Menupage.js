import React from "react";
import Kids from "./Kids.js";
import { Link } from "react-router-dom";
import "../CSS/menu.css";
function Menupage() {
  return (
    <>
      <div className='Pcart'>
        <Link to='/Menu/Kids'>Kids Wear</Link>
      </div>
      <div className='Pcart'>
        <Link to='/Menu/Mens'>Mens Wear</Link>
      </div>
      <div className='Pcart'>
        <Link to='/Menu/Women'>Women Wear</Link>
      </div>
    </>
  );
}

export default Menupage;

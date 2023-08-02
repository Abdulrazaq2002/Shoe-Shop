import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeSlider from "./homeslider";
import WhyChoose from "../Menu/WhyChooseUs";
import Contact from "../Menu/Contact";
import "../CSS/Page.css";

function Page() {
  return (
    <>
      <HomeSlider />
      <div className='brands'>
        <Link to='/asian'>
          <div className='asian'>
            <h2 className='name'>Asian</h2>
            <img className='IMG' src='../IMGS/Asian.jpg' alt='Asian' />
          </div>
        </Link>
        <Link to='/campus'>
          <div className='campus'>
            <h2 className='name'>Campus</h2>
            <img className='IMG' src='../IMGS/Campus.png' alt='Campus' />
          </div>
        </Link>
        <Link to='/sparx'>
          <div className='spark'>
            <h2 className='name'>Spark</h2>
            <img className='IMG' src='../IMGS/Spark.jpg' alt='Spark' />
          </div>
        </Link>
        <Link to='/bata'>
          <div className='bata'>
            <h2 className='name'>Bata</h2>
            <img className='IMG' src='../IMGS/Bata.jpg' alt='Bata' />
          </div>
        </Link>
      </div>
      <WhyChoose />
      <Contact />
    </>
  );
}

export default Page;

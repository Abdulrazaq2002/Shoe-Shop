import React from "react";
import "../CSS/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className='why-choose-us-container'>
      <h2 className='section-title'>Why Choose Us</h2>
      <div className='why-choose-us'>
        <div className='feature'>
          <div className='feature-icon'>
            <img src='../IMGS/Logo1.png' />
          </div>
          <div className='feature-text'>
            <h3>High-Quality Products</h3>
            <p>We offer a wide range of high-quality shoes from top brands.</p>
          </div>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <img src='../IMGS/Logo3.png' />
          </div>
          <div className='feature-text'>
            <h3>Fast and Reliable Shipping</h3>
            <p>
              Get your orders delivered quickly and reliably to your doorstep.
            </p>
          </div>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <img src='../IMGS/Logo4.jpg' />
          </div>
          <div className='feature-text'>
            <h3>Easy Returns and Exchanges</h3>
            <p>
              We provide hassle-free returns and exchanges for your convenience.
            </p>
          </div>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <img src='../IMGS/Logo2.png' />
          </div>
          <div className='feature-text'>
            <h3>Excellent Customer Support</h3>
            <p>Our customer support team is always ready to assist you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React, { useState, useRef } from "react";
import "../CSS/footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const toggleFooterVisibility = () => {
    setIsFooterVisible(!isFooterVisible);
    if (!isFooterVisible) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <hr />
      <footer>
        <div className='footer-content'>
          <div className='footer-section about'>
            <h3>Shoe Delivery</h3>
            <p>
              We're a team of dedicated shoe enthusiasts who are passionate
              about delivering the latest and greatest styles to our customers.
            </p>
          </div>
          <div className='footer-section contact'>
            <h3>Contact Us</h3>
            <ul className='contact-info'>
              <li>
                <FaMapMarkerAlt className='icon' /> 123 Main St, Anytown USA
              </li>
              <li>
                <FaPhone className='icon' /> 555-123-4567
              </li>
              <li>
                <FaEnvelope className='icon' /> info@shoedelivery.com
              </li>
            </ul>
          </div>
          <div className='footer-section social'>
            <h3>Follow Us</h3>
            <ul className='social-links'>
              <li>
                <a target='_blank' href='https://www.facebook.com'>
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a target='_blank' href='https://www.instagram.com'>
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          &copy; 2023 Shoe Delivery | Designed by Abdul Razaq
        </div>
      </footer>
    </>
  );
}

export default Footer;

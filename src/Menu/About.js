import React, { useState, useEffect } from "react";
import testimonialsData from "../Data/testimonials.json";
import "../CSS/About.css"; // Assuming you have an About.css file for styling

function About() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Set the testimonials data from the imported JSON file
    setTestimonials(testimonialsData);
  }, []);

  return (
    <div className='about-container'>
      <div className='about-content'>
        <h2>About Our Shoes Delivery</h2>
        <p>
          We at Shoes Delivery are committed to providing the best and most
          convenient delivery service for all your shoe needs. Whether you're
          looking for the latest trends or classic styles, we've got you
          covered.
        </p>
        <p>
          Our dedicated team of delivery experts ensures that your shoes reach
          you in perfect condition and in the shortest possible time. We take
          pride in delivering smiles along with your favorite pairs of shoes.
        </p>
        <p>
          So, sit back, relax, and let us take care of your shoe delivery needs.
          We guarantee a hassle-free experience from order to delivery.
        </p>
        <p>
          Established in 2005, Shoes Delivery has been serving shoe enthusiasts
          with passion and dedication. Our vast collection of shoes caters to
          all age groups and fashion preferences.
        </p>
        <p>
          Our customer support team is available 24/7 to assist you with any
          queries or concerns. We strive to make your shopping experience
          exceptional and memorable.
        </p>
        <p>
          When you shop with Shoes Delivery, you are not just buying shoes, but
          you are also choosing comfort, style, and quality. Join our
          ever-growing family of satisfied customers today!
        </p>
      </div>

      <div className='testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonial-list'>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='testimonial-item'>
              <p className='testimonial-comment'>{testimonial.comment}</p>
              <p className='testimonial-name'>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

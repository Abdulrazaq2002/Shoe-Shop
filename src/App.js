import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Menu/Navbar";
import Page from "./Menu/Page";
import Menupage from "./Menu/Menupage";
import ProductDetailsPage from "./Menu/Productdetails"; // Import ProductDetailsPage
import Atc from "./Menu/Atc";
import SearchPage from "./Menu/Searchpage";
import Checkout from "./Menu/checkout";
import Footer from "./Menu/footer";
import Kids from "./Menu/Kids";
import Mens from "./Menu/Mens";
import Women from "./Menu/Women";
import About from "./Menu/About";
import Asian from "./Menu/Asian"; // Import the new Asian component
import Spark from "./Menu/Spark"; // Import the new Asian component
import Campus from "./Menu/Campus"; // Import the new Asian component
import Bata from "./Menu/Bata"; // Import the new Asian component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/atc' element={<Atc />} />
        <Route path='/product/:productId' element={<ProductDetailsPage />} />
        <Route path='/Menupage' element={<Menupage />} />
        <Route path='/Menu/Kids' element={<Kids />} />
        <Route path='/Menu/Mens' element={<Mens />} />
        <Route path='/Menu/Women' element={<Women />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/Reviews' element={<About />} />
        <Route path='/Asian' element={<Asian />} /> {/* Brand page route */}
        <Route path='/Sparx' element={<Spark />} /> {/* Brand page route */}
        <Route path='/Campus' element={<Campus />} /> {/* Brand page route */}
        <Route path='/Bata' element={<Bata />} /> {/* Brand page route */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

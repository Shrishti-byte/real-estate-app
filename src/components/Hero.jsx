import React from "react";
import "./Hero.css";
import heroBg from "../assets/images/hero.jpg"; // ✅ Correct path

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Search through thousands of verified listings</p>
        <div className="search-box">
          <input type="text" placeholder="Search location..." />
          <select>
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Bungalow</option>
          </select>
          <input type="text" placeholder="Price Range" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

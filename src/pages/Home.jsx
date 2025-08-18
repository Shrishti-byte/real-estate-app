import React from "react";
import "./Home.css";
import heroImg from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="home-overlay">
        <div className="home-content">
          <h1>Find Your Dream Home</h1>
          <p>
            Explore the best properties tailored for you. Discover comfort, luxury, 
            and style in every corner.
          </p>
          <div className="home-buttons">
            <a href="/properties" className="btn-primary">
              Browse Properties
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

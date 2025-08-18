import React from "react";
import "./About.css";
import aboutTeam from "../assets/images/about-team.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a dedicated real estate company helping families and investors 
            find their dream homes. Our mission is to provide trusted property 
            solutions with honesty and professionalism.
          </p>
          <p>
            With years of experience, we focus on customer satisfaction and 
            make the buying and renting process simple, transparent, and efficient.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutTeam} alt="Our Team" />
        </div>
      </div>
    </section>
  );
};

export default About;

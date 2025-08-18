import React from "react";
import "./Contact.css";
import contactTeam from "../assets/images/contact-team.jpg";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill out the form or reach us directly.</p>
          <ul>
            <li><strong>Email:</strong> info@realestate.com</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Location:</strong> New Delhi, India</li>
          </ul>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-image">
          <img src={contactTeam} alt="Contact Team" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

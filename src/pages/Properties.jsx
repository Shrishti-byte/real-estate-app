import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";
import house5 from "../assets/images/house5.jpg";
import "./Properties.css";

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const houses = [
    { 
      image: house1, 
      title: "Modern Family Home", 
      price: "$250,000", 
      info: "3 Bed · 2 Bath",
      description: "A beautiful family-friendly home located in the suburbs with spacious rooms and a private garden."
    },
    { 
      image: house2, 
      title: "Luxury Villa", 
      price: "$500,000", 
      info: "5 Bed · 4 Bath",
      description: "An elegant villa with a swimming pool, modern kitchen, and large living spaces for luxury living."
    },
    { 
      image: house3, 
      title: "Cozy Apartment", 
      price: "$180,000", 
      info: "2 Bed · 1 Bath",
      description: "Perfect for singles or couples, this apartment offers comfort, style, and easy access to city life."
    },
    { 
      image: house4, 
      title: "Beach House", 
      price: "$750,000", 
      info: "4 Bed · 3 Bath",
      description: "Wake up to the sound of waves in this beachfront property with panoramic sea views."
    },
    { 
      image: house5, 
      title: "Mountain Retreat", 
      price: "$400,000", 
      info: "3 Bed · 2 Bath",
      description: "A peaceful getaway in the mountains surrounded by nature, perfect for relaxation and fresh air."
    },
  ];

  return (
    <section id="properties" className="properties">
      <h2>Featured Properties</h2>

      <div className="property-grid">
        {houses.map((house, idx) => (
          <PropertyCard
            key={idx}
            image={house.image}
            title={house.title}
            price={house.price}
            info={house.info}
            onClick={() => setSelectedProperty(house)}
          />
        ))}
      </div>

      {/* Expanded Details */}
      {selectedProperty && (
        <div className="property-details">
          <img src={selectedProperty.image} alt={selectedProperty.title} />
          <div className="details-text">
            <h3>{selectedProperty.title}</h3>
            <p className="price">{selectedProperty.price}</p>
            <p>{selectedProperty.info}</p>
            <p>{selectedProperty.description}</p>
            <button className="btn">Contact Agent</button>
            <button className="btn secondary" onClick={() => setSelectedProperty(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Properties;

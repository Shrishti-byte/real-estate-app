import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ image, title, price, info, onClick }) => {
  return (
    <div className="property-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="property-info">
        <h3>{title}</h3>
        <p>{price}</p>
        <span>{info}</span>
      </div>
    </div>
  );
};

export default PropertyCard;

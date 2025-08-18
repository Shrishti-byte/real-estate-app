import React from "react";
import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";
import house5 from "../assets/images/house5.jpg";

const Listings = () => {
  const houses = [
    { id: 1, img: house1, title: "Modern Villa", price: "$350,000" },
    { id: 2, img: house2, title: "Luxury Apartment", price: "$280,000" },
    { id: 3, img: house3, title: "Cozy Family Home", price: "$220,000" },
    { id: 4, img: house4, title: "Beach House", price: "$450,000" },
    { id: 5, img: house5, title: "Countryside Cottage", price: "$180,000" },
  ];

  return (
    <section className="listings">
      <h2>Available Properties</h2>
      <div className="listing-grid">
        {houses.map((house) => (
          <div key={house.id} className="card">
            <img src={house.img} alt={house.title} />
            <h3>{house.title}</h3>
            <p>{house.price}</p>
            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;

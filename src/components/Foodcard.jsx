import React from "react";
import "./Foodcard.css";

        
   const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
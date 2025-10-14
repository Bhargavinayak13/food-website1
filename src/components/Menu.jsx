import React,{useState} from "react";
import Fooddata from "../Data/Fooddata";
import FoodCard from "./Foodcard";
import "./Menu.css";

const Menu = ()=>
{
    const[category,setCategory]=useState("All");
    const categories=["All" ,"Snacks",
        "Beverages","Desserts","Biryani","coffee"];
        const filteredFood = category ==="All"?  Fooddata : Fooddata.filter(food => food.category ===category);
    
    return(
<section classname="menu-section">
    <h2>Our Menu</h2>
    <div classname="filter-buttons">
        {categories.map((cat) =>(
            <button key={cat}
            classname={category ===cat ? "active" : ""}
            onClick = { ()=>setCategory(cat)}>
                {cat}
            </button>
        ))}
    </div>
    <div className="food-grid">
        {filteredFood.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

</section>
    )
}
export default Menu;
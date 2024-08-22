import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((foodItem, index) => {
          if (category === "All" || category === foodItem.category) {
            return (
              <FoodItem
                key={index}
                id={foodItem._id}
                name={foodItem.name}
                description={foodItem.description}
                price={foodItem.price}
                image={foodItem.image}
              />
            );
          } else {
            return null;
          }
        })} 
      </div>
    </div>
  );
};
export default FoodDisplay;

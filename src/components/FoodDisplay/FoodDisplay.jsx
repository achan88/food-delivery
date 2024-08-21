import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((foodItem, index) => {
            return (
                1 // need some sort of card
            )
        })}
      </div>
    </div>
  );
};
export default FoodDisplay;

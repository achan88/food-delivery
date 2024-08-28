import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => {
        return {
          ...prev,
          [itemId]: 1,
        };
      });
    } else {
      setCartItems((prev) => {
        return {
          ...prev,
          [itemId]: prev[itemId] + 1,
        };
      });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
  };

  function getTotal() {

    let itemsTotal = 0;
    for (let i = 0; i < food_list.length; i++) {
      
      if (cartItems[food_list[i]._id] > 0) {
        itemsTotal += cartItems[food_list[i]._id] * food_list[i].price;
      }
    }

    return itemsTotal;

  }

  useEffect(() => {

    console.log(cartItems);

  }, [cartItems])
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotal
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

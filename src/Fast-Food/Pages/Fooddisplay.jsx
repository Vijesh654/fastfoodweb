import React, { useContext } from "react";
import { Store } from "./Storefoodlistt";
import "./fooddisplay.css";
import Fooditem from "./FoodItem";

function Fooddisplay({ category }) {
    const flist = useContext(Store);
    const foodlist = flist?.foodlist || []; // Ensure foodlist is always an array

    console.log(category);

    return (
        <div className="foodlist w-auto ml-16 mr-20 bg-red-200 mt-5">
            {foodlist.map((item, index) => {
                if (category === "All" || category === item.category) {
                    return (
                        <Fooditem
                            key={item.id || index}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            category={item.category}
                            price={item.price}
                        />
                    );
                }
                return null; // Ensure `map` always returns something
            })}
        </div>
    );
}

export default Fooddisplay;

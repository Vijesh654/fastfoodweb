import React, { createContext, useEffect, useState } from "react";
import { foodlist } from '../../data/foodlist'
export const Store = createContext();
const StoreProvider = ({ children }) => {
    const [cartIteams, setcartIteams] = useState({})
    // console.log(List);
    const addtocart = (itemid) => {
        if (!cartIteams[itemid]) {
            setcartIteams((prev) => ({ ...prev, [itemid]: 1 }))
        }
        else {
            setcartIteams((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
    }
    const removefromcart = (itemid) => {
        setcartIteams((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartIteams) {
            if (cartIteams[item] > 0) {
                let iteminfo = foodlist.find((product) => product.id === item);
                totalamount += iteminfo.price * cartIteams[item];
            }
        }
        return totalamount;
    }
    // useEffect(()=>{
    //     console.log(cartIteams); 
    // },[cartIteams])
    const List = { foodlist, cartIteams, setcartIteams, addtocart, removefromcart ,gettotalcartamount}

    return <Store.Provider value={List}>
        {children}
    </Store.Provider>

}
export default StoreProvider
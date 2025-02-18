import Navigation from "./Pages/Navigation"
import { useState } from "react"
 import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cartitem"
import Order from "./Pages/Order"
import StoreProvider from "./Pages/Storefoodlistt"
import Loginpage from "./Pages/Loginpage"
function Fastfood(){
    const [showlogin,setshowlogin]=useState(false)
    return(
        <>
      
        <StoreProvider>
        <BrowserRouter>
        <Navigation setshowlogin={setshowlogin}/>
        {showlogin?<Loginpage setshowlogin={setshowlogin}/>:<></>}
      
      
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
       </Routes>
       </BrowserRouter>
       </StoreProvider>
        </>
    )
}
export default Fastfood
import Navigation from "./Pages/Navigation"
import { useState } from "react"
 import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cartitem"
import Order from "./Pages/Order"
import StoreProvider from "./Pages/Storefoodlistt"
import Loginpage from "./Pages/Loginpage"
import Contactus from "./Pages/Contactus"
import Aboutus from "./Pages/Aboutus"
function Fastfood(){
    const [showlogin,setshowlogin]=useState(false)
    return(
        <>
        <div style={{ scrollBehavior: 'smooth' }}>
        <StoreProvider>
        <BrowserRouter>
        <Navigation setshowlogin={setshowlogin}/>
        {showlogin?<Loginpage setshowlogin={setshowlogin}/>:<></>}
      
      
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
       </Routes>
       </BrowserRouter>
       </StoreProvider>
       <Contactus/>
       </div>
        </>
    )
}
export default Fastfood
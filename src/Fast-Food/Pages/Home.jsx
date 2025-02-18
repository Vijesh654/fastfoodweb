import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Fooddisplay from "./Fooddisplay";
// import ContactUsPage from "./Contactpage";
//import Display from "./Display";
// import StoreProvider from "./Storefoodlistt";
function Home(){
    const [category,setcategory]=useState("All");
    return(
<>

<Header/>
<Menu category={category} setcategory={setcategory}/>
{/* <StoreProvider> */}
    <Fooddisplay category={category}/>
{/* </StoreProvider> */}

</>
    )
}
export default Home
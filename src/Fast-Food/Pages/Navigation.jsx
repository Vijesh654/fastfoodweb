import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Store } from './Storefoodlistt';
// import './navi.css';

function Navigation({setshowlogin}) {
    const {cartIteams}=useContext(Store)
    const logo = './fooditems/icons/tomatotextlogo.png';
const search = './fooditems/icons/searc.jpg';
console.log(cartIteams);

const [count,setcount]=useState(0)
useEffect(() => {
    let tempCount = 0;
    const keys = Object.keys(cartIteams);
    const len = keys.length;
    
    for (var i = 0; i < len; i++) {
      const key = keys[i];
      const value = cartIteams[key];
      if (value > 0) {
        tempCount++;
      }
    }
    setcount(tempCount); 
  }, [cartIteams]);
  console.log(count);
  

const addtocard = './fooditems/icons/addtocard.png';
    return (
        <div className="navmain h-16 bg-orange-500 flex items-center justify-between px-28 ">



           <Link to="/" className="p-2 md:p-4">
  <img
    src={logo}
    className="lg:h-12 lg:w-28 sm:h-2 sm:w-4"
    alt="Tomato Text Logo"
  />
</Link>

        
            <ul className="flex gap-16 text-lg  font-medium">
                <Link to="/">
                <li className="hover:text-white font-bold text-xl cursor-pointer">Home</li>
                </Link>
               <a href="#menu" > <li className="hover:text-white font-bold text-xl cursor-pointer" style={{transiton:"5s"}}>Menu</li></a>
                <Link to="/aboutus"><li className="hover:text-white font-bold text-xl cursor-pointer">About-us</li></Link>
                <a href="#contact"><li className="hover:text-white font-bold text-xl cursor-pointer">Contact-us</li></a>
            </ul>

            <ul className="flex items-center gap-10">
                <li className='flex bg-white p-2 rounded-3xl h-8'>
                    <input type="text" placeholder="Search Items" style={{border:"none" ,outline:"none"}} className='ml-2 w-28'/>
                    <img src={search} className="h-6 w-8  rounded-full" alt="Search Icon" />
                </li>
                <li className="relative">
                  <Link to="/cart">
                    <img className="lg:h-10 lg:w-10 sm:w-4 sm:h-3" src={addtocard} alt="Cart Icon" />
                    </Link>
                    {count>0?
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white font-bold text-xs px-2 rounded-full">
             {count} 
                    </span>:""}
                </li>
                <li>
                    <button onClick={()=>setshowlogin(true)} className="px-4 py-2 text-xl font-bold bg-blue-500 text-black rounded-md hover:bg-blue-600">
                        Sign in
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './navi.css';

function Navigation({setshowlogin}) {
    const logo = './fooditems/icons/tomatotextlogo.png';
const search = './fooditems/icons/searc.jpg';
const addtocard = './fooditems/icons/addtocard.png';
    return (
        <div className="main h-16 bg-slate-200 flex items-center justify-between px-28">
           <Link to="/"> <img src={logo} className="h-16" alt="Tomato Text Logo" /></Link>
        
            <ul className="flex gap-16 text-lg font-medium">
                <li className="hover:text-red-500 cursor-pointer">Home</li>
                <li className="hover:text-red-500 cursor-pointer">Menu</li>
                <li className="hover:text-red-500 cursor-pointer">Mobile-App</li>
                <li className="hover:text-red-500 cursor-pointer">Contact-Us</li>
            </ul>

            <ul className="flex items-center gap-10">
                <li>
                    <img src={search} className="h-8 w-10" alt="Search Icon" />
                </li>
                <li className="relative">
                  <Link to="/cart">
                    <img className="h-10 w-10" src={addtocard} alt="Cart Icon" />
                    </Link>
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
            0
                    </span>
                </li>
                <li>
                    <button onClick={()=>setshowlogin(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Sign in
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
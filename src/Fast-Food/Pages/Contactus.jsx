import React from "react";
function Contactus(){
    return(
<>
<div id="contact" className="float-end w-full mt-20">
<footer className="bg-orange-500 text-white py-10 pl-20" style={{background:"#131212d6"}}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-orange-500 ">Tomato</h2>
          <p className="text-sm">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus tempore odit quos iste reiciendis aut dolorem placeat, iure nostrum?
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a  className="hover:text-yellow-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a  className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a  className="hover:text-yellow-300 transition">
                Order Now
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p>123 Food Street, Flavor Town</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: support@fastbite.com</p>
        </div>

        {/* Social Media */}
        
      </div>
      <div className="text-center mt-10 border-t border-white/20 text-yellow-400 pt-4 text-xl font-bold">
        &copy; {new Date().getFullYear()} FastBite. All rights reserved.
      </div>
    </footer>
</div>
</>

    )
}
export default Contactus;
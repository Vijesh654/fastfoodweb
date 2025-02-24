//import './Header.css';
function Header(){
    return(
        <>
       <div className="head   text-white ml-20 mr-20   bg-opacity-50 p-10  ">
        {/* <img src="./fooditems/icons/fastpinterest.jpg" className="w-full relative" style={{height:"550px"}}/> */}
       <div className="absolute pl-10 mt-6">
        <h1 className='text-6xl mt-24 font-bold text-orange-400 '>Order your</h1>
          <h2 className="text-4xl mt-5 font-bold">Delicious Fast Food, Delivered Fast!</h2>
          <p className="mt-4 text-lg ">Choose from diverse menu featuring delectable dishes.</p>
          <p className="mt-1 text-lg">Savor the taste of freshly made burgers, pizzas, and more.</p>
         <a href="#menu"> <button className="mt-6 bg-yellow-400 text-black px-6 py-2 font-semibold rounded-full hover:bg-yellow-500">
            Order Now
          </button></a>
          </div>
          <img src="./fooditems/icons/fastpinterest.jpg" className="w-full" style={{height:"550px"}}/>

        </div>
        <div className='ml-32 mt-8 relative'>
          <h2 className='ffd  font-bold text-4xl'>Explore our menu</h2>
          <p className='text-lg mt-5 font-bold'>Choose from diverse menu featuring delectable dishes.Our mission is to satisfy your. </p>
          <p className='text-lg font-bold'>Cravings and elevate your dining experience,one decision meal at a time.</p>
        </div>
        </>
    )
}
export default Header
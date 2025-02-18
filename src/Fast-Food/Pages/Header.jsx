function Header(){
    return(
        <>
       <div className="bg-black bg-opacity-50 p-10 ">
          <h2 className="text-4xl font-bold">Delicious Fast Food, Delivered Fast!</h2>
          <p className="mt-4 text-lg">Savor the taste of freshly made burgers, pizzas, and more.</p>
          <button className="mt-6 bg-yellow-400 text-black px-6 py-2 font-semibold rounded-full hover:bg-yellow-500">
            Order Now
          </button>
        </div>
        </>
    )
}
export default Header
function Aboutus(){
    return(
        <>
        <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">About FastBite</h1>
          <p className="text-lg text-gray-300">
            FastBite is your go-to destination for delicious meals, delivered fast with fresh ingredients and amazing taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At FastBite, our journey began with a passion for great food and quick service. Our mission is to bring joy through flavorful meals that are perfect for any occasion.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We take pride in using fresh, locally sourced ingredients and preparing each dish with care. Our dedicated team ensures that every bite delivers a burst of flavor that keeps you coming back for more.
            </p>
          </div>
          <div>
            <img
              src="./fooditems/icons/aboutus.jpg"
              alt="FastBite Team"
              className="rounded-2xl shadow-lg w-80 h-80"
            />
          </div>
        </div>

        <div className="mt-16 bg-red-600 text-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Why Choose FastFood?</h3>
          <p className="text-lg mb-4">
            Fast delivery, fresh flavors, and a friendly atmosphere — that's the FastBite promise.
          </p>
          <p>
            Experience top-notch customer service, customizable meals, and a menu that caters to all taste buds. Order now and savor the taste of happiness!
          </p>
        </div>
      </div>
    </section>
        </>
    )
}
export default Aboutus
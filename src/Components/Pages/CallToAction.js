import React from 'react';
import background from "../../assest/bicycle.png";

const CallToAction = () => {
  return (
    <div id='CallToAction' className="flex flex-col items-center justify-center h-screen  text-white " style={{ backgroundImage: `url(${background})` }}>
      
      <h2 className="text-3xl text-black md:text-5xl font-bold mb-4 text-center bg-sky-500/40">
        Discover Your Perfect Ride
      </h2>
      <p className="text-lg text-black md:text-xl mb-6 text-center bg-sky-400/40">
        Explore our latest collection of bicycles designed for comfort and performance.
      </p>
      <a 
        href="/shop" 
        className="bg-sky-500/40 bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:bg-blue-100"
      >
        Shop Now
      </a>
    </div>
  );
};

export default CallToAction;
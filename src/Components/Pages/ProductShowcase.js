import React from 'react';
import video from '../../assest/video.mp4'
const ProductShowcase = () => {
    return (
        <div id='productShowcase' className="max-w-6xl mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-6">Discover Our Premium Bicycle</h2>
            
            <div className="flex flex-col md:flex-row md:space-x-6">
               
                <div className="flex-1">
                    <img 
                        src="https://www.newbelgium.com/siteassets/contests/2024-bike-giveaway/original-png-newbelgium_2024_fort_collins_2024_employee_bike_studio-img_1_v2.png" 
                        alt="Bicycle" 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

               
                <div className="flex-1 mt-4 md:mt-0">
                    <video 
                        controls 
                        className="w-full h-auto rounded-lg shadow-md"
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

          
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-center mb-4">Explore in 360°</h3>
                <div className="flex justify-center">
                    <iframe 
                        src="https://www.tennessean.com/gcdn/-mm-/2c51cd40a455d4967871cd7d26d73f0af875511a/c=0-0-2247-1270/local/-/media/2018/08/13/TennGroup/Nashville/636697917433913663-20180813-pedego-electric-bike-016.jpg?width=1600&height=800&fit=crop&format=pjpg&auto=webp" 
                        title="360 Degree View" 
                        className="w-full h-64 md:h-80 rounded-lg shadow-md"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-center mb-4">Customize Your Bike</h3>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                        Open Configurator
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;
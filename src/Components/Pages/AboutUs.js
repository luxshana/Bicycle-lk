import React from "react";
import { Bike} from "lucide-react";

function AboutUs() {
  const features = [
    {
     
      text: "Lightweight and Durable Frames:",
      description:
        "Our bicycles are crafted using high-grade materials like aluminum or carbon fiber, ensuring a lightweight design for easy handling and unmatched durability to withstand tough terrains.",
    },
    {
      
      text: "Advanced Gear Systems for Effortless Riding:",
      description:
        "Experience smooth and seamless rides with precision-engineered gear systems that make uphill climbs and long rides feel effortless.",
    },
    {
      
      text: "Ergonomic Designs for Superior Comfort:",
      description:
        "Our bikes feature thoughtfully designed frames, saddles, and handlebars to reduce strain, providing optimal comfort even on long journeys.",
    },
  ];

  return (
    <div
      id="aboutUs"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-4 sm:px-6 lg:px-8">
      <div className="text-center">
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="relative inline-block uppercase font-bold text-2xl sm:text-3xl">
          About Us
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[2px] w-[60px]"></span>
        </h1>
      </div>
        <h6 className="mt-10 lg:mt-20 tracking-wide text-lg sm:text-xl">
          We are committed to crafting bicycles that inspire adventure, fitness,
          and fun. Our products are designed with cutting-edge technology,
          high-quality materials, and a focus on sustainability. Whether you're
          a seasoned cyclist or a beginner, we offer the perfect ride to match
          your journey.
        </h6>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col items-center  p-4 rounded-lg shadow-lg">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
               <Bike />
              </div>
              <div className="text-center">
                <h5 className="mt-2 text-lg font-semibold">{feature.text}</h5>
                <p className="text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
import React, { useState, useEffect } from "react";
import pic from "../../assest/logo192.png";
import { motion, useAnimation } from "framer-motion";

const Welcome = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const controls = useAnimation();

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    controls.start({
      x: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center">
          <span className="text-2xl sm:text-3xl bg-clip-text">
            <TypingAnimation
              text="Rediscover the Joy of Riding "
              speed={30}
            />
          </span>
          <h4 className="bg-clip-text text-2xl sm:text-3xl">
          Your Perfect Bicycle Awaits!
          </h4>
          <hr className="my-4" />
        </div>
        <div className="md:w-1/2">
          <motion.img
            src={pic}
            alt="picture"
            className={`w-full h-auto ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-600 ease-in-out`}
            onLoad={handleImageLoad}
            initial={{
              x: "100%",
              opacity: 0,
            }}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
};

const TypingAnimation = ({ text, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

export default Welcome;

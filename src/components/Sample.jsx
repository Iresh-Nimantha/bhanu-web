import React, { useEffect } from "react";
import ringImg from "../assets/ring1.png";
import rightupImg from "../assets/RightUpperUoner.png";
import leftUpImg from "../assets/leftUpper.png";
import rightMiddleImg from "../assets/RightMiddle.png";

const Sample = () => {
  useEffect(() => {
    // Function to handle the animation effect on hover
    const handleMouseOver = (event) => {
      moveImage(event.target);
    };

    // Function to move each image
    const moveImage = (image) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const imageWidth = image.clientWidth;
      const imageHeight = image.clientHeight;

      const newX = Math.random() * (screenWidth - imageWidth);
      const newY = Math.random() * (screenHeight - imageHeight);

      image.style.transition = "transform 2s ease";
      image.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    // Select all images and add event listeners
    const images = document.querySelectorAll(".movable-image");
    images.forEach((image) => {
      image.addEventListener("mouseover", handleMouseOver);
    });

    // Clean up the event listeners on component unmount
    return () => {
      images.forEach((image) => {
        image.removeEventListener("mouseover", handleMouseOver);
      });
    };
  }, []);

  return (
    <div
      className="relative
     flex flex-col min-h-screen w-full h-screen overflow-hidden"
    >
      <div
        className="bg-image w-full h-1/2 flex items-center justify-end overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${ringImg})` }}
      >
        {/* Optional: Consider adding a content container for better layering */}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 md:px-8 lg:px-16">
        <div className="flex flex-wrap">
          <img
            src={leftUpImg}
            alt="Left top image"
            className="left-image movable-image w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <img
            src={rightMiddleImg}
            alt="Right middle image"
            className="right-middle-image movable-image w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />

          <img
            src={ringImg}
            alt="Ring image"
            className="movable-image w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <img
            src={rightupImg}
            alt="Right upper image"
            className="movable-image w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <img
            src={rightMiddleImg}
            alt="Right middle image"
            className="movable-image w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <img
            src={rightupImg}
            alt="Right upper image"
            className="movable-image w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>

        <div className="green-box bg-green-500 w-full h-20 mt-8 rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Sample;

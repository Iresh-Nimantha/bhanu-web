import React from "react";
import PrfImg from "../assets/pof.png";

const Reaction = () => {
  return (
    <section className="relative top-32 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 pt-16 pb-8 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <div className="text-right md:text-center">
            <h1 className="-mt-16 text-6xl mb-4 font-extrabold font-mono [text-shadow:5px_2px_11px_black]">
              CUSTOMER
            </h1>
          </div>
          <div className="absolute w-full md:w-1/2">
            <h1 className="text-center md:text-left font-mono font-extrabold text-6xl [text-shadow:5px_2px_11px_rgba(0, 0, 0, 0.2)]">
              REACTIONS
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-grow">
            <div className="flex flex-wrap md:flex-row justify-end">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 mr-4">
                <div className="relative bg-gray-200 rounded-xl shadow-lg top-2 flex flex-col  items-center">
                  <img
                    src={PrfImg}
                    alt="Profile Picture"
                    className="md:absolute rounded-full w-20 h-20 -left-2 top-0 static md:w-24 md:h-24 mb-2 md:mb-4"
                  />

                  <p className="text-gray-700 text-base leading-loose md:text-left w-128 h-32 text-center md:mt-8 md:mx-20 md:px-4 mb-2 md:mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident officia tenetur, eius ut exercitationem
                    perspiciatis molestias quidem animi ab debitis odit nemo
                    quam hic incidunt reprehenderit, aliquam quibusdam! Non,
                    quam?
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                {" "}
                {/* Responsive "All Over the World" section */}
                <h3 className="mt-10 shadow-2xl w-full text-center bg-black text-white text-lg md:text-xl lg:text-2xl px-4 py-2 rounded-md font-mono">
                  ALL OVER THE WORLD
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reaction;

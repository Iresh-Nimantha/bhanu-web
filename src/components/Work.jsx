import React from "react";
import WhImg from "../assets/a.jpg";

const Work = () => {
  return (
    <div className="relative top-40 sm:top-60 md:top-10 overflow-hidden">
      {/* Background color */}
      <main className="container mx-auto px-8 py-8 rounded-3xl">
        <div className="flex flex-col md:flex-row justify-center items-center shadow-2xl rounded-3xl ">
          <div className="flex-col justify-center items-center w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-green-400 font-mono font-bold text-5xl md:text-6xl  relative [text-shadow:5px_5px_9px_black]">
              My Works
            </h1>
            <h2 className="relative -top-22 md:left-72 left-56 w-40 px-2 bg-black text-cyan-50 font-mono">
              500+ Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          {" "}
          {/* Add margin for spacing */}
          <div className="group relative">
            <img
              src={WhImg} // Use the WhImg function for image URL
              alt="Image 1"
              className="rounded-lg shadow-2xl object-cover w-full h-64 transform transition duration-300 hover:scale-110 group-hover:brightness-110 shadow-gray-500"
            />
          </div>
          <div className="group relative">
            <img
              src={WhImg} // Use the WhImg function for image URL
              alt="Image 2"
              className="rounded-lg shadow-2xl object-cover w-full h-64 transform transition duration-300 hover:scale-110 group-hover:grayscale-0 shadow-gray-500"
            />
          </div>
          <div className="group relative">
            <img
              src={WhImg} // Use the WhImg function for image URL
              alt="Image 3"
              className="rounded-lg shadow-2xl object-cover w-full h-64 transform transition duration-300 hover:scale-110 group-hover:blur-0 shadow-gray-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;

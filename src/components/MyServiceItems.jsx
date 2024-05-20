import React from "react";

const MyServiceItems = ({ img, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:-transform-x-2">
      {" "}
      <div className="flex">
        <img
          src={img}
          alt={`Illustration of {title}`} // Descriptive alt text
          className="w-1/2 h-full object-cover group-hover:brightness-110 "
        />
        <img src={img} alt="" className="  w-1/2 h-full" />
      </div>{" "}
      <div className="flex-col-2">
        <div className="w-1/2 h-full absolute inset-0 bg-gradient-to-r from-green-500 to-black opacity-1 group-hover:translate-x-full  transition duration-300">
          {/* Background overlay on hover */}
          <h3 className="relative top-30  text-white text-3xl font-bold px-4 py-2 text-center items-center justify-center ">
            {title}
          </h3>
          <p className="relative top-34 md:top:30 text-gray-200 text-sm px-4 mt-2  ">
            {/* Descriptive text */}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServiceItems;

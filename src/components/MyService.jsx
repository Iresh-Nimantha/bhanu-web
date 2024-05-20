import React from "react";
import MyServiceItems from "./MyServiceItems";
import FbImg from "../assets/b.jpg";

const MyService = () => {
  return (
    <section className="relative top-40 bg-gray-100 min-h-screen sm:pl-10 py-16">
      {" "}
      {/* Background color and min-height */}
      <div className=" relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row lg:flex-col-2 justify-between items-center mb-12">
          {" "}
          {/* Responsive layout for title and service grid */}
          <h1 className=" relative top-0 left-0 text-center [text-shadow:5px_5px_9px_black] text-green-400 font-mono font-bold text-5xl md:text-6xl text-shadow:5px_2px_11px_rgba(0, 0, 0, 0.2)">
            My Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {" "}
            {/* Responsive grid for service items */}
            <MyServiceItems
              img={FbImg}
              title="UX Design"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a accusantium reiciendis
              ratione molestias! Commodi, suscipit sapiente cumque incidunt repellendus voluptate aspernatur consequuntur."
              className=""
            />
            <MyServiceItems
              img={FbImg}
              title="Poster Design"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a accusantium reiciendis
              ratione molestias! Commodi, suscipit sapiente cumque incidunt repellendus voluptate aspernatur consequuntur."
              className=""
            />
            <MyServiceItems
              img={FbImg}
              title="Web Development"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a accusantium reiciendis
              ratione molestias! Commodi, suscipit sapiente cumque incidunt repellendus voluptate aspernatur consequuntur."
              className=""
            />
            <MyServiceItems
              img={FbImg}
              title="Branding & Identity"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a accusantium reiciendis
               ratione molestias! Commodi, suscipit sapiente cumque incidunt repellendus voluptate aspernatur consequuntur."
              className=""
            />
            {/* Add more service items as needed */}
          </div>
        </div>
        <div className="flex justify-center">
          {" "}
          {/* Center the "Trusted Service" section */}
          <div className=" relative top-0 rounded-lg shadow-3xl bg-gradient-to-l from-green-500 to-black p-4">
            <h3 className="text-white font-mono text-2xl font-extrabold text-center">
              TRUSTED SERVICE
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyService;

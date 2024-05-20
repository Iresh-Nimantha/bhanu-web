import React from "react";

import ringImg from "../assets/ring1.png";
import rightupImg from "../assets/RightUpperUoner.png";
import leftUpImg from "../assets/leftUpper.png";
import rightMiddleImg from "../assets/RightMiddle.png";

const BackGround = () => {
  return (
    <div className=" absolute ">
      <div className="absolute flex justify-between top-10 min-h-screen w-full h-screen">
        <img src={rightupImg} alt="" className=" absolute" />
        <img src={leftUpImg} alt="" className="absolute" />
      </div>
    </div>
  );
};

export default BackGround;

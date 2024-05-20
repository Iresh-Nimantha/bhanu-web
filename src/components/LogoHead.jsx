import React from "react";
import { TypeAnimation } from "react-type-animation";
import logoImg from "../assets/BANU LOGO2 (2).png";
import { SocialIcon } from "react-social-icons";

const LogoHead = () => {
  return (
    <div className=" relative ">
      <div className=" relative top-36 md:-top-32 lg:top-42 left-0 right-0 flex h-full items-center justify-center pt-20 -mt-20 md:mt-10 lg:mt-20 md:pt-30 lg:pt-60 w-full ">
        <div className="relative bg-white bg-opacity-80 max-w-6xl mx-auto shadow-2xl rounded-2xl border-1">
          <div className="relative flex flex-col items-center">
            <img
              src={logoImg}
              alt="Banu Logo"
              className="w-1/2 sm:w-1/3 md:w-2/3 mb-4"
            />
            <div className="text-center">
              <h1 className="text-5xl md:text-4xl lg:text-3xl mb-2 font-bold">
                Banu
              </h1>
              <h3 className="text-xl mb-2 font-medium">design</h3>
              <h3 className="text-lg">
                <TypeAnimation
                  sequence={[
                    "We Make Your Dreams!",
                    2000,
                    "We Make Your Design!",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "1.2rem", // Adjust as needed
                    display: "inline-block",
                    fontFamily: "mono",
                  }}
                  repeat={Infinity}
                />
              </h3>
              <div className="flex-row absolute ml-8 -top-40 inset-0 flex items-center justify-start bottom-48 left-4 space-x-2">
                <SocialIcon
                  url="https://web.facebook.com/profile.php?id=61554859791220"
                  target="_blank"
                  className="hover:scale-75"
                />
                <SocialIcon
                  url="https://web.whatsapp.com/"
                  className="hover:scale-75"
                />
                <SocialIcon
                  url="https://web.tiktok.com/"
                  className="hover:scale-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoHead;

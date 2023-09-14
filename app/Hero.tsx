import React from "react";

const Hero = () => {
  return (
    <div className="h-96 flex text-center flex-col justify-evenly items-center">
      <p className="text-3xl font-bold">Lorem ipsum dolor sit amet</p>
      <button className="bg-accent hover:scale-105 ease-in-out duration-500 p-2 px-5 rounded-xl text-white text-xl">
        Call To Action
      </button>
    </div>
  );
};

export default Hero;

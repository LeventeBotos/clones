import React from "react";

const Hero = () => {
  return (
    <div className="h-96 w-full m-20 flex text-center flex-col justify-evenly items-center">
      <p className="text-3xl font-bold">Lorem ipsum dolor sit amet</p>
      {/* <button className="bg-accent hover:scale-105 ease-in-out duration-500 p-2 px-5 rounded-xl text-white text-xl">
        Call To Action
      </button> */}
      <button className="border-accent border-2 bg-transparent text-black hover:text-white hover:bg-accent ease-in-out duration-200  rounded-xl px-8 p-3 self-center text0xl">
        Call To Action
      </button>
    </div>
  );
};

export default Hero;

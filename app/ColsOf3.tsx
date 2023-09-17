import React from "react";

const ColsOf3 = () => {
  return (
    <div className="flex gap-5 text-white w-full flex-col">
      <div className="flex flex-col items-center justify-evenly md:flex-row h-96">
        <div className="bg-gray-300 h-96 w-2/3 rounded-xl" />
        <div className=" w-1/4 relative bg-accent rounded-xl p-3 h-80 self-center">
          <div className="absolute top-0 left-0 h-80 w-full flex flex-col rounded-xl justify-evenly items-center text-center bg-white bg-opacity-30">
            <p className="text-xl font-bold">Example</p>
            <p className="text-xl ">Heading</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly md:flex-row-reverse h-96">
        <div className="bg-gray-300 h-96 w-2/3 rounded-xl" />
        <div className=" w-1/4 relative bg-accent rounded-xl p-3 h-80 self-center">
          <div className="absolute top-0 left-0 h-80 w-full flex flex-col rounded-xl justify-evenly items-center text-center bg-white bg-opacity-30">
            <p className="text-xl font-bold">Example</p>
            <p className="text-xl ">Heading</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly md:flex-row h-96">
        <div className="bg-gray-300 h-96 w-2/3 rounded-xl" />
        <div className=" w-1/4 relative bg-accent rounded-xl p-3 h-80 self-center">
          <div className="absolute top-0 left-0 h-80 w-full flex flex-col rounded-xl justify-evenly items-center text-center bg-white bg-opacity-30">
            <p className="text-xl font-bold">Example</p>
            <p className="text-xl ">Heading</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColsOf3;

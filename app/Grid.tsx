import React from "react";

const Grid = () => {
  return (
    <div className="flex flex-raw gap-5 p-5 w-full">
      <div className="flex w-3/4 flex-col items-stretch gap-5">
        <div className="h-60 w-full bg-accent rounded-xl"></div>
        <div className="h-60 w-full bg-accent rounded-xl"></div>
        <div className=" h-60 w-full bg-accent rounded-xl"></div>
      </div>
      <div className="flex w-full flex-col items-stretch gap-5">
        <div className=" h-44 w-full bg-accent rounded-xl"></div>
        <div className=" h-96 w-full bg-accent rounded-xl"></div>
        <div className=" h-40 w-full bg-accent rounded-xl"></div>
      </div>
      <div className="flex w-3/4 flex-col items-stretch gap-5">
        <div className="h-60 w-full bg-accent rounded-xl"></div>
        <div className="h-60 w-full bg-accent rounded-xl"></div>
        <div className=" h-60 w-full bg-accent rounded-xl"></div>
      </div>
    </div>
  );
};

export default Grid;

import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col text-center items-center py-10 w-full md:flex-row justify-evenly">
      <div className="md:w-1/4 w-2/3 h-96 flex flex-col bg-white rounded-xl  shadow-xl">
        <div className=" h-48 bg-accent w-full rounded-xl self-center " />
        <p className="text-sm text-accent self-center pt-2">another</p>
        <p className="text-xl font-bold self-center pb-5">Example</p>
        <p className="w-2/3 self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quisquam labore.
        </p>
      </div>
      <div className="md:w-1/4 w-2/3 h-96 flex flex-col bg-white rounded-xl shadow-accent shadow-xl">
        <div className=" h-48 bg-accent w-full rounded-xl self-center " />
        <p className="text-sm text-accent self-center pt-2">another</p>
        <p className="text-xl font-bold self-center pb-5">Example</p>
        <p className="w-2/3 self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quisquam labore.
        </p>
      </div>
      <div className="md:w-1/4 w-2/3 h-96 flex flex-col bg-white rounded-xl  shadow-xl">
        <div className=" h-48 bg-accent w-full rounded-xl self-center " />
        <p className="text-sm text-accent self-center pt-2">another</p>
        <p className="text-xl font-bold self-center pb-5">Example</p>
        <p className="w-2/3 self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quisquam labore.
        </p>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

const Cards3 = () => {
  return (
    <div className="flex w-full justify-evenly gap-4 md:text-4xl text-lg text-center text-white">
      <a
        href="/"
        className="w-1/4 h-40 flex flex-col relative justify-evenly rounded-lg "
      >
        <div className="z-10 absolute top-0 left-0 rounded-lg bg-black bg-opacity-60  hover:bg-opacity-40 transition-all duration-200 h-full w-full text-center flex flex-col justify-evenly">
          <p>One</p>
        </div>
        {/* <img
          src="/mens.jpeg"
          alt="Férfi"
          className=" rounded-lg object-cover h-full"
          loading="lazy"
        /> */}
        <div className="rounded-lg w-auto h-full bg-accent" />
      </a>
      <a
        href="/"
        className="w-1/4 h-40 flex flex-col relative justify-evenly rounded-lg "
      >
        <div className="z-10 absolute top-0 left-0 rounded-lg bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-200 h-full w-full text-center flex flex-col justify-evenly">
          <p>Two</p>
        </div>
        {/* <img
          src="/womens.jpeg"
          alt="Női"
          className=" rounded-lg object-cover h-full"
          loading="lazy"
        /> */}
        <div className="rounded-lg w-auto h-full bg-accent" />
      </a>
      <a
        href="/shop"
        className="w-1/4 h-40 flex flex-col relative justify-evenly rounded-lg "
      >
        <div className="z-10 absolute top-0 left-0 rounded-lg bg-black bg-opacity-60 hover:bg-opacity-40 transition-all duration-200 h-full w-full text-center flex flex-col justify-evenly">
          <p>Three</p>
        </div>
        {/* <img
          src="/kids.jpeg"
          alt="Gyerek"
          className=" rounded-lg object-cover h-full"
          loading="lazy"
        /> */}
        <div className="rounded-lg w-auto h-full bg-accent" />
      </a>
    </div>
  );
};

export default Cards3;

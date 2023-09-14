import React from "react";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineMail,
  AiOutlinePhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { GrFacebook, GrMail, GrPhone } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full flex py-5 gap-5 flex-col text-white bg-[#1f1f1f]">
      <div className="flex flex-col gap-4 justify-evenly md:flex-row">
        <img src="/logo.png" alt="logo" className="m-auto h-14 opacity-100" />
        <a
          href="tel:+36 70 612 1894"
          className="flex h-14 items-center m-auto flex-row p-1 px-3 ease-in-out duration-200 rounded-xl hover:bg-white hover:text-black text-accent gap-2"
        >
          <AiFillPhone className=" bg-accent rounded-full text-black p-1 text-3xl" />
          <p className=" h-10 self-center text-center flex flex-col justify-evenly">
            +36 70 612 1894
          </p>
        </a>

        <a
          href="mailto:botos.levente2007@gmail.com"
          className="flex m-auto justify-center h-14 items-center p-1 px-3 ease-in-out duration-200 rounded-xl hover:bg-white hover:text-black text-accent flex-row gap-2"
        >
          <GrMail className=" bg-accent self-center rounded-full text-black p-1 text-3xl" />
          <p className=" h-10 self-center text-center flex flex-col justify-evenly">
            botos.levente2007@gmail.com
          </p>
        </a>
        <a
          href="https://www.facebook.com/"
          className="flex h-14 m-auto items-center flex-row p-1 px-3 ease-in-out duration-200 rounded-xl hover:bg-white hover:text-black gap-2 text-accent"
        >
          <GrFacebook className="text-accent rounded-full p-0 text-3xl " />
          <p className=" h-10 self-center text-center flex flex-col justify-evenly">
            Facebook
          </p>
        </a>
      </div>
      <p className="self-center">Copyright 2023 Botos Levente</p>
    </div>
  );
};

export default Footer;

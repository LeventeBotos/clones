import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { GrFacebook, GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full flex py-5 gap-5 flex-col text-white bg-[#1f1f1f]">
      <div className="flex flex-col justify-evenly md:flex-row">
        <div className="flex flex-col w-full md:w-1/3 justify-evenly text-center py-3">
          <p className="text-2xl font-bold "> Nyitvatartás:</p>
          <p>H: 9:00-19:00</p>
          <p>K: 9:00-19:00</p>
          <p>Sze: 9:00-19:00</p>
          <p>Cs: 9:00-19:00</p>
          <p>P: 9:00-19:00</p>
          <p>Szo: 10:00-18:00</p>
          <p>V: 10:00-18:00</p>
        </div>
        <div className="w-1/3 md:flex hidden justify-evenly">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21560.091144017017!2d19.019291156591763!3d47.509169339730455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc227fb4a99d%3A0x2f263ca844235e46!2zSGFsw6FzemLDoXN0eWE!5e0!3m2!1shu!2shu!4v1694721333361!5m2!1shu!2shu"
            title="Üzletünk"
            className=" h-64 w-full rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-evenly md:flex-row">
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
          <GrMail className=" bg-accent self-center rounded-full text-black hover:text-white p-1 text-3xl" />
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
      <p className="self-center">Copyright &copy; Botos Levente 2023</p>
    </div>
  );
};

export default Footer;

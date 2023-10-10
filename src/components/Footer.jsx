import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full min-h-[40vh] bg-cover bg-fixed bg-escritorio flex items-center justify-center ">
      <div className=" w-full min-h-[40vh] bg-gray-900 bg-opacity-80 flex items-center justify-center ">
        <div className="md:w-[400px] w-full min-h-[30vh] grid grid-cols-2">
          <ul className="text-white  font-normal text-lg md:col-span-1 col-span-2 flex flex-col items-center md:border-b-0 border-b-[1px] border-gray-400 mt-3">
            <li className="p-2">
              <Link to={"/"}>Products</Link>
            </li>
            <li className="p-2">
              <Link to={"/"}>Services</Link>
            </li>
            <li className="p-2">
              <Link to={"/"}>Contact</Link>
            </li>
            <li className="p-2">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>

          <div className="text-white font-normal   md:col-span-1 col-span-2 flex flex-col items-center mt-5 ">
            <h2 className=" text-3xl font-medium">Comunidad </h2>
            <div className="h-[7vh] my-1 p-1 flex items-center">
              <button className="w-10 h-10 flex items-center justify-center text-4xl mx-1 hover:text-[#1299F6]">
                <BsFacebook />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-4xl mx-1 hover:text-[#1D9BF0]">
                <BsTwitter />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-4xl mx-1 hover:text-[#0270AD]">
                <BsLinkedin />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-4xl mx-1 hover:text-[#FE0000]">
                <BsYoutube />
              </button>
            </div>
            <div className="flex items-center p-2">All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

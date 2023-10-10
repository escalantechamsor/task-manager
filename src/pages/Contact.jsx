import React from "react";
import NavBar from "../components/NavBar";
import { FaCoffee, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";

function Contact() {
  return (
    <div className="w-full h-[100vh] bg-cover bg-libro">
      <NavBar />
      <div className="w-full  pt-[15vh] px-3 h-[100vh] bg-gray-800 bg-opacity-25">
        <div className="w-full h-[65vh] mt-3 bg-gray-800 md:bg-opacity-20 bg-opacity-40 flex p-3 ">
          <div className="w-[400px] h-[400px] md:flex hidden bg-cover bg-perfilsecond rounded-full hover:scale-105 transition-all">
          <div className="w-full h-[100%] bg-gray-800 hover:bg-opacity-25 bg-opacity-5 rounded-full">

          </div>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold text-center text-gray-100 flex">
              ░D░a░t░o░s░ ░d░e░l░ ░d░e░s░a░r░r░o░l░l░a░d░o░r░
            </h2>
            <ul className="text-gray-100 text-xl p-3">
              <li>Rafael Rosabal Chamizo</li>
              <li>Frontend Developer</li>
              <li>Email: escalantechamsorr@gmail.com</li>
              <li><p>Redes:</p>
                <ul className="flex p-2">
                  
                  <li>
                    <button className="flex justify-center items-center w-5 h-5 text-xl m-2">
                      <FaFacebook />
                    </button>
                  </li>
                  <li>
                    <button className="flex justify-center items-center w-5 h-5 text-xl m-2">
                      <BsTwitter />
                    </button>
                  </li>
                  <li>
                    <button className="flex justify-center items-center w-5 h-5 text-xl m-2">
                      <FaLinkedin />
                    </button>
                  </li>
                  <li>
                    <button className="flex justify-center items-center w-5 h-5 text-xl m-2">
                      <BsGithub />
                    </button>
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Contact;

import React from "react";
import NavBar from "../components/NavBar";
import { useContextData } from "../contexts/ContextPosts";
import { FaCoffee, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function About() {
  const datos = useContextData();

  return (
    <div className="w-full h-[100vh] bg-cover bg-planer">
      <NavBar />
      <div className="w-full  pt-[15vh] px-3 h-[100vh] bg-gray-800 bg-opacity-25">
        <h3 className=" text-center p-2 text-4xl font-extrabold text-gray-100">
          ░C░r░é░d░i░t░o░s░ ░d░e░ ░d░e░s░a░r░r░o░l░l░o░
        </h3>
        <div className="p-2 w-full h-[65vh] mt-3 bg-gray-800 bg-opacity-20 flex flex-col justify-between">
          <ul className="p-3 text-lg">
            <li className="p-2 text-white shadow-lg">
              Desarrollador: Rafael Rosabal Chamizo.
            </li>
            <li className="p-2 text-white shadow-lg">
              Rol: Frontend Developer.
            </li>
            <li className="p-2 text-white shadow-lg">
              Características del producto: Gestor de tareas.{" "}
            </li>
            <li className="p-2 text-white shadow-lg">
              Funcionalidades asociadas: Permite la gestión de tareas de una
              manera organizada.
            </li>
            <li className="p-2 text-white shadow-lg">
              Tecnologías ocupadas: Javascript, ReactJS, Tailwindcss, Bootstrap,
              React Icons, React-Router-Dom, API-CALL.
            </li>
            <li className="p-2 text-white shadow-lg">
              Categoría: Gestión, OCIO.
            </li>
          </ul>
          <div className="w-full flex justify-center items-center bg-gray-800 bg-opacity-60">
            <div className="flex items-center text-gray-100">
              <p>Invítame a un </p>
              <button className="flex justify-center items-center w-5 h-5 text-xl m-2  ">
                <FaCoffee />
              </button>
            </div>
            <div className="flex items-center ml-5 text-gray-100 ">
              <p className="">Sígueme en: </p>
              <button className="flex justify-center items-center w-5 h-5 text-xl m-2 hover:text-sky-700 active:-translate-y-4 hover:scale-125 transition-all">
                <FaFacebook />
              </button>
              <button className="flex justify-center items-center w-5 h-5 text-xl m-2 hover:text-sky-600 active:-translate-y-4 hover:scale-125 transition-all">
                <BsTwitter />
              </button>
              <button className="flex justify-center items-center w-5 h-5 text-xl m-2 hover:text-sky-800 active:-translate-y-4 hover:scale-125 transition-all">
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";




function NavBar() {

  return (
    <div className=" w-full bg-gray-800 bg-opacity-60 fixed z-40  top-0 left-0 h-[10vh] flex items-center justify-between text-gray-200 shadow-2xl px-4">
      <h1 className=" font-bold text-3xl">
        <Link to={"/"}> ★彡 𝐄. 𝓜. 彡★ </Link>
      </h1>
      <ul className="uppercase lg:flex hidden h-[100%] items-center  ">
        <li className=" w-28 flex items-center transition-all delay-150 justify-center relative font-bold  hover:text-gray-800 hover:bg-slate-100 cursor-pointer text-lg mr-1  h-[100%] ">
          <Link to={"/taskPanel"}> Task panel </Link>
          <span className="position-absolute top-4  start-100 translate-middle badge rounded-pill bg-danger">
            {
             ( 10 > 2) ? '9+' : 20
            }
            <span className="visually-hidden">unread messages</span>
          </span>
        </li>
        <li className=" w-28 flex items-center transition-all delay-100 justify-center  font-bold  hover:text-gray-800 hover:bg-slate-100 cursor-pointer text-lg mr-1 h-[100%]">
          <Link to={"/about"}> About </Link>
        </li>
        <li className=" w-28 flex items-center transition-all delay-100 justify-center  font-bold  hover:text-gray-800 hover:bg-slate-100 cursor-pointer text-lg mr-1 h-[100%]">
          <Link to={"/contact"}> Contact </Link>
        </li>
        <li className=" w-32 flex items-center transition-all delay-100 justify-center  font-bold  hover:text-gray-800 hover:bg-slate-100 cursor-pointer text-lg mr-1 h-[100%]">
          <Link to={"/createTask"}> Create Task </Link>
        </li>
      </ul>
      <button className="lg:hidden flex w-10 h-10 items-center justify-center text-[1.8rem]">
             <AiOutlineMenu />   
      </button>
    </div>
  );
}

export default NavBar;

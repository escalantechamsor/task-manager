import React from "react";
import { Fade } from "react-awesome-reveal";
function Testimonials() {
  return (
    <div className="w-full min-h-[100vh] bg-cover bg-fixed bg-escritorio">
      <div className="w-full h-[100%] bg-gray-800 bg-opacity-50 ">
        <div className="uppercase p-5 flex items-center justify-center md:text-[5em] text-[2em] font-bold text-gray-200 font-mono tracking-wide">
         ░T░e░s░t░i░m░o░n░i░o░s░
        </div>
        <div>
        
        </div>
        <div className="w-full md:min-h-[80vh] h-auto grid grid-cols-4 p-5 gap-4 tracking-wide">
          <div className="shadow-2xl bg-gray-800 bg-opacity-50 rounded-t-2xl rounded-l-3xl  h-[70vh] md:col-span-1 col-span-4 flex flex-col justify-between p-2">
            <div className="w-56 h-56 bg-cover bg-andrea mx-auto mt-3 rounded-full hover:scale-105 transition-all" />
            <p className="text-center mt-3 text-white font-serif text-base p-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              quaerat consequatur, iste earum quam fugit laboriosam delectus
              aliquid error quidem similique adipisci.m
            </p>
          </div>
  
          <div className="shadow-2xl bg-gray-800 rounded-t-2xl rounded-l-3xl bg-opacity-50 h-[70vh] md:col-span-1 col-span-4 flex flex-col justify-between p-2">
            <div className="w-56 h-56 bg-cover bg-maria mx-auto mt-3 rounded-full hover:scale-105 transition-all" />
            <p className="text-center mt-3 text-white font-serif text-base p-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              quaerat consequatur, iste earum quam fugit laboriosam delectus
              aliquid error quidem similique adipisci.m
            </p>
          </div>

          <div className="shadow-2xl bg-gray-800 rounded-t-2xl rounded-l-3xl bg-opacity-50 h-[70vh] md:col-span-1 col-span-4 flex flex-col justify-between p-2">
            <div className="w-56 h-56 bg-cover bg-peter mx-auto mt-3 rounded-full hover:scale-105 transition-all" />
            <p className="text-center mt-3  text-white font-serif text-base p-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              quaerat consequatur, iste earum quam fugit laboriosam delectus
              aliquid error quidem similique adipisci.m
            </p>
          </div>

          <div className="shadow-2xl bg-gray-800 rounded-t-2xl rounded-l-3xl bg-opacity-50 h-[70vh] md:col-span-1 col-span-4 flex flex-col justify-between p-2">
            <div className="w-56 h-56 bg-cover bg-stefan mx-auto mt-3 rounded-full hover:scale-105 transition-all" />
            <p className="text-center mt-3 text-white font-serif text-base p-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              quaerat consequatur, iste earum quam fugit laboriosam delectus
              aliquid error quidem similique adipisci.m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

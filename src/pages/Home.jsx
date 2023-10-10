import React from "react";
import FadingTarjet from "../components/FadingTarjet";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full min-h-[100vh] bg-gray-300">
      <div className="w-full h-[100vh]  bg-escritorio bg-fixed bg-cover bg-no-repeat ">
        <div className="w-full h-[100vh] flex bg-gray-800 bg-opacity-10 items-center justify-center">
         <div className="w-[80%] h-[50vh] bg-gray-100 rounded-lg bg-opacity-40 flex items-center justify-center flex-col">
         <h3 className="md:text-[4em] text-[3em] text-center font-bold text-gray-800 font-serif mt-3 p-3">
              Organiza tus tareas fácilmente
            </h3>
            <h4 className="lg:text-[1.2em] text-center text-[1em] px-5 font-semibold text-gray-700">
              Escalante manager te ayuda en la organización de tus actividades de una manera sencilla.
            </h4>
         </div>
         
        </div>
      </div>





      <div className="w-full h-[40vh] flex items-center justify-center bg-cover bg-fixed bg-escritorio">
        <div className="w-full h-[40vh] flex items-center mx-auto pl-3 justify-center flex-col bg-gray-800 bg-opacity-50 font-bold font-serif">
          <div className="md:text-4xl text-2xl text-center text-gray-200">
            Una mejor manera de gestionar las actividades:
          </div>
          <div className="w-full h-[10vh] flex items-center mt-3 justify-center text-center md:text-[3em] text-4xl font-extrabold text-gray-200 underline">
            Nos encargamos del proceso
          </div>
        </div>
      </div>
    <section className="w-full h-[100vh] bg-gray-50">

    </section>

   <Footer />
      
    </div>
  );
}

export default Home;

import React from 'react'
import { Fade } from "react-awesome-reveal";

function FadingTarjet() {
  return (
    <div className=" w-full min-h-[60vh] md:grid md:grid-cols-3 flex flex-col gap-4 p-5 bg-slate-100">
        <Fade cascade duration={1500} direction="left" className="">
          <div className="md:col-span-1 col-span-3 h-[60vh] rounded-xl shadow-2xl bg-womandesk bg-cover flex justify-end flex-col md:hover:scale-105 transition-all">
            <div className="p-3 text-3xl font-bold font-mono bg-gray-800 bg-opacity-50 text-center text-gray-200  ">
              Gestión
            </div>
          </div>
          <div className=" md:col-span-1 col-span-3 h-[60vh] rounded-xl shadow-2xl bg-archive bg-cover flex justify-end flex-col md:hover:scale-105 transition-all">
            <div className="p-3 text-3xl font-bold font-mono bg-gray-800 bg-opacity-50 text-center text-gray-200 ">
              Compromiso
            </div>
          </div>
          <div className="md:col-span-1 col-span-3 h-[60vh] rounded-xl shadow-2xl bg-glasses bg-cover flex justify-end flex-col md:hover:scale-105 transition-all ">
            <div className="p-3 text-3xl font-bold font-mono bg-gray-800 bg-opacity-50 text-center text-gray-200 ">
              Eficiencia
            </div>
          </div>
        </Fade>
      </div>
  )
}

export default FadingTarjet
import React from "react";
import {
  useEnviarDatos,
  useRefDescription,
  useRefTitle,
  useRefCategory,
} from "../contexts/ContextTask";

function FormularioEnvio() {
  const sendData = useEnviarDatos();

  const title = useRefTitle();
  const desc = useRefDescription();
  const category = useRefCategory();
  return (
    <div className="w-full h-[100vh] pt-5 flex justify-end items-end">
      <form
        onSubmit={sendData}
        className=" md:w-[500px] w-[90%] m-5 p-4 text-gray-200 placeholder:text-gray-200 min-h-[70vh] bg-gray-800 bg-opacity-60  mt-5 rounded-lg flex flex-col "
      >
        <h2 className="text-center p-2 mb-2 text-[2em] font-semibold scale-110">
          C͓̽r͓̽e͓̽a͓̽r͓̽ ͓̽t͓̽a͓̽r͓̽e͓̽a͓̽ ͓̽p͓̽e͓̽r͓̽s͓̽o͓̽n͓̽a͓̽l͓̽
        </h2>
        <div>
          <label>Task title</label>
          <input
            className="w-full h-10 placeholder:text-gray-700 bg-slate-100 outline-none px-3 rounded-md bg-opacity-30"
            type="text"
            name=""
            id=""
            ref={title}
            placeholder="Task title here ..."
          />
        </div>
        <div>
          <textarea
            ref={desc}
            name=""
            id=""
            className="w-full h-32 bg-slate-100 bg-opacity-40 my-2 placeholder:text-gray-700 p-3 resize-none outline-none"
            placeholder="Description task ..."
          ></textarea>
        </div>
        <select
          className="form-select w-36 bg-transparent outline-none text-gray-200"
          aria-label="Default select example"
          ref={category}
          id="category"
          name="category"
        >
          <option defaultValue={category}>Category</option>
          <option value="ocio" className="text-gray-800">
            OCIO
          </option>
          <option value="home" className="text-gray-800">
            Home
          </option>
          <option value="office" className="text-gray-800">
            OFFICE
          </option>
        </select>
        <button
          type="submit"
          className=" w-full p-3 mt-3 bg-sky-600 hover:bg-sky-500 rounded-lg text-xl font-medium"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

export default FormularioEnvio;

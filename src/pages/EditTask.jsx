import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
//import { useCapturarTarea } from "../contexts/ContextTask";
import { useParams } from "react-router";
import { useDataTask, useEditTask } from "../contexts/ContextTask";

function EditTask() {
  const edit_task = useEditTask();
  const params = useParams();
  const tareas = useDataTask();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const result = tareas.find((tarea) => tarea.id == params.id);
    console.log(result);
    if (result) {
      setTask(result);

      console.log(params.id);
      console.log(tareas);
    }
  }, [params.id]);

  const commitChanges = (e) => {
    e.preventDefault();

    edit_task(task);
    setTask({ title: "", description: "", category: "Category" });
  };

  return (
    <div className="w-full min-h-[100vh] bg-cover bg-whitedesk bg-fixed p-3">
      <NavBar />
      <div className="w-full min-h-[90vh] pt-5 flex justify-end items-end">
        <form
          onSubmit={edit_task(task)}
          className=" md:w-[600px] w-[90%] m-5 p-4 text-gray-200 md:h-[80vh] h-auto bg-gray-800 bg-opacity-70  mt-5 rounded-lg flex flex-col justify-between"
        >
          <h2 className="text-center p-2 mb-2 text-[2em] font-semibold scale-110">
            ░E░d░i░t░a░r░ ░t░a░r░e░a░
          </h2>
          <div className="w-full  ">
            <input
              type="text"
              name="title"
              value={task.title}
              id=""
              onChange={handleChange}
              placeholder="Nombre de la tarea ..."
              className="bg-gray-200 bg-opacity-40 w-full p-3 mt-3 outline-none placeholder:font-semibold font-semibold text-lg text-gray-50 cursor-context-menu rounded-lg placeholder:text-gray-200"
            />
            <textarea
              name="description"
              id=""
              value={task.description}
              placeholder="Descripción ..."
              onChange={handleChange}
              className="resize-none bg-gray-200 bg-opacity-40 p-3 mt-2 w-full h-[30vh] overflow-y-auto outline-none placeholder:font-semibold font-semibold text-lg cursor-default text-gray-50 rounded-lg placeholder:text-gray-200 "
            ></textarea>
            <div className="flex items-center p-2 justify-between ">
              <select
                name="category"
                value={task.category}
                onChange={handleChange}
                className="form-select w-36 bg-transparent outline-none text-gray-200"
              >
                <option defaultValue={task.category}>{task.category}</option>
                <option value="Home" className="text-gray-800">
                  Home
                </option>
                <option value="Office" className="text-gray-800">
                  Office
                </option>
                <option value="OCIO" className="text-gray-800">
                  OCIO
                </option>
              </select>
            </div>
            <button
              type="submit"
              className=" w-full p-3 mt-3 bg-green-400 hover:bg-green-500 rounded-lg text-xl font-medium"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useContextData } from "../contexts/ContextPosts";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  useCapturarTarea,
  useDataTask,
  useRemoveTask,
} from "../contexts/ContextTask";

function TaskPanel() {
  //const usersCall = useContextData();
  const tareas = useDataTask();
  const remove_task = useRemoveTask();
  // const capture_data = useCapturarTarea()

  return (
    <div className="w-full h-[100vh] bg-cover bg-agenda bg-fixed">
      <NavBar />

      <div className="w-full min-h-[100vh] bg-gray-800 bg-opacity-10 p-2 bg-fixed flex flex-col px-3 overflow-x-auto ">
        <h3 className=" text-center py-5 text-4xl font-extrabold text-gray-800 bg-slate-100 bg-opacity-50  mt-[9vh] mb-3">
          ░T░a░s░k░ ░M░a░n░a░g░e░r░ ░S░t░o░r░e░
        </h3>
        <table className="w-full table bg-slate-100 bg-opacity-50 ">
          <thead>
            <tr className="bg-gray-100 bg-opacity-80">
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>Category</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tareas &&
              tareas.map((tarea, index) => {
                if (tarea !== null)
                  return (
                    <tr key={index}>
                      <th scope="row">{tarea.id}</th>
                      <td>{tarea.title}</td>
                      <td>{tarea.description}</td>
                      <td>{tarea.category}</td>
                      <td>
                        <div className="flex  items-center justify-center ">
                          <button className="w-10 h-10 bg-green-300 flex items-center justify-center m-2 rounded-full  ">
                            <Link to={`/editTask/${tarea.id}`}>
                              <FaEdit />
                            </Link>
                          </button>
                          <button
                            onClick={() => remove_task(index)}
                            className="w-10 h-10 flex items-center justify-center m-2 rounded-full bg-red-400 "
                          >
                            <AiFillDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskPanel;

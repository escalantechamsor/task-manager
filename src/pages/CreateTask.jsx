//import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
//import { useDataTask } from "../contexts/ContextTask";
//import { useForm } from "react-hook-form";
import FormularioEnvio from "../components/FormularioEnvio";

function CreateTask() {
/*   const { taskInfo, setTaskInfo } = useDataTask();
  const [valores, setValores] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data); */

  /* function updateTaskInfo(e) {
    e.preventDefault();
    setFillArray({ ...taskInfo, taskInfo });
    console.log(fillArray);
  }
  function updateData(e) {
    console.log(taskInfo);
    setTaskInfo({
      ...taskInfo,
      taskname: e.target.value,
    });
    console.log(taskInfo);
  }
  function updateDescription(e) {
    setTaskInfo({
      ...taskInfo,
      description: e.target.value,
    });
  }
  function updateCategory(e) {
    setTaskInfo({
      ...taskInfo,
      category: e.target.value,
    });
  }
  function updateData(event) {
    const { name, value } = event.target;

    setTaskInfo({
      ...taskInfo,
      [name]: value,
    });
    setValores({ ...taskInfo, taskInfo });
  }
  function enviarDatos(event) {
    event.preventDefault();
  } */

  return (
    <div className="w-full min-h-[100vh] bg-cover bg-camera bg-fixed p-3">
      <NavBar />
      <FormularioEnvio />
    </div>
  );
}

export default CreateTask;

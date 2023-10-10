import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

const DataTask = createContext();
const NotifY = createContext();
const EnvioDatos = createContext();
const RefTitle = createContext();
const RefDescription = createContext();
const RefCategory = createContext();
const RemoveTask = createContext();
const EditTask = createContext();
const CapturarTarea = createContext();

export function useCapturarTarea() {
  return useContext(CapturarTarea);
}
export function useEditTask() {
  return useContext(EditTask);
}
export function useRemoveTask() {
  return useContext(RemoveTask);
}
export function useRefTitle() {
  return useContext(RefTitle);
}
export function useRefDescription() {
  return useContext(RefDescription);
}
export function useRefCategory() {
  return useContext(RefCategory);
}
export function useEnviarDatos() {
  return useContext(EnvioDatos);
}
export function useDataTask() {
  return useContext(DataTask);
}
export function useNotifCount() {
  return useContext(NotifY);
}
export function ContextTask({ children }) {
  const refTitle = useRef("uno");
  const refDescription = useRef("dos");
  const refCategory = useRef("tres");

const storeData = localStorage.getItem("tareas");


  /*   useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]); */
  //Crear un reducer y hacer uso del contexto para gestion desde un archivo el estado global del envio de las tareas a la lista de la otra page
  const [tareas, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add_task":
        return [
          ...state,
          {
            id: Date.now(),
            title: action.title,
            description: action.description,
            category: action.category,
          },
        ];
      case "remove_task":
        return state.filter((tarea, index) => index != action.index);
      case "EDIT_TASK":
        const valorchange = action.task;
        state.map((t) => {
          if (t.id === valorchange.id) {
            (t.title = valorchange.title),
              (t.description = valorchange.description),
              (t.category = valorchange.category);
          }
        });
      default:
        return state;
    }
  });

  const enviarDatos = (e) => {
    e.preventDefault();
    if (
      refTitle.current.value !== "" &&
      refDescription.current.value !== "" &&
      refCategory.current.value !== "Category"
    ) {
      dispatch({
        type: "add_task",
        title: refTitle.current.value,
        description: refDescription.current.value,
        category: refCategory.current.value,
      });

      (refTitle.current.value = ""),
        (refDescription.current.value = ""),
        (refCategory.current.value = "Category");
    }
  };
  const removeTask = (index) => {
    let confirm_remove = confirm(
      "¿Are u sure do you want to delete this task?"
    );
    if (confirm_remove) {
      dispatch({
        type: "remove_task",
        index,
      });
    }
  };
  const updateTask = (task) => {
    dispatch({
      type: "EDIT_TASK",
      task,
    });
  };

  useEffect(() => {
    console.log("probando");
    if (tareas !== undefined )
      localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  return (
    <DataTask.Provider value={tareas}>
      <RefTitle.Provider value={refTitle}>
        <RefDescription.Provider value={refDescription}>
          <RefCategory.Provider value={refCategory}>
            <EnvioDatos.Provider value={enviarDatos}>
              <RemoveTask.Provider value={removeTask}>
                <EditTask.Provider value={updateTask}>
                  {children}
                </EditTask.Provider>
              </RemoveTask.Provider>
            </EnvioDatos.Provider>
          </RefCategory.Provider>
        </RefDescription.Provider>
      </RefTitle.Provider>
    </DataTask.Provider>
  );
}

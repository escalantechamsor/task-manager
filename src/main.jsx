import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TaskPanel from "./pages/TaskPanel";
import EditTask from "./pages/EditTask";
import { ContextPosts } from "./contexts/ContextPosts";
import { ContextTask } from "./contexts/ContextTask";
import NavBar from "./components/NavBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createTask",
    element: <CreateTask />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/taskPanel",
    element: <TaskPanel />,
  },
  {
    path: "/editTask/:id",
    element: <EditTask />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextPosts>
      <ContextTask>
          <RouterProvider router={router} />
      </ContextTask>
    
    </ContextPosts>
  </React.StrictMode>
);

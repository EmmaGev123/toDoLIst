import React from "react";
import { useRoutes } from "react-router-dom";
import AddTasks from "../pages/AddTasks";
import ShowTask from "../pages/ShowTasks";
export default function MyRouter() {
  const router = useRoutes([
    { path: "/", element: <ShowTask /> },
    { path: "/addTask", element: <AddTasks /> },
    { path: "*", element: <h1>404 page not found</h1> },
  ]);
  return router;
}

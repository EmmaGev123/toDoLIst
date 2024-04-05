import React from "react";
import { useRoutes } from "react-router-dom";
import AddTasks from "../pages/AddTasks";
import ShowTask from "../pages/ShowTasks";
import { Menu } from "../component/Menu";
import { Layout } from "../pages/Layout";


export const MyRouter: React.FC = React.memo(({ }) => {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <ShowTask /> },
        { path: "/addTask", element: <AddTasks /> },
      ],
    },
    { path: '*', element: <h1>404 not found</h1> }
  ]);
  return router;
})



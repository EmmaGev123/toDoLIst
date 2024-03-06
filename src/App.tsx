import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Menu } from "./component/Menu";
import MyRouter from "./router/MyRouter";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <MyRouter />
    </BrowserRouter>
  );
}

export default App;

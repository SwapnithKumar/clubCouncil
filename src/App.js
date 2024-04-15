import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App pl-10 pr-10 items-center w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

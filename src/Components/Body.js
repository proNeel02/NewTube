import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer/>
    </div>
  );
};
export default Body;

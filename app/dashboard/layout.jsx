import React from "react";
import SideBar from "./_components/SideBar";
import Header from "../_components/Header";
import AddCourse from "./_components/AddCourse";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-64">
      <Header/>
          <div className="p-10">
          <AddCourse/>
          {children}
          </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

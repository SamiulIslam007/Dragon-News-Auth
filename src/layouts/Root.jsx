import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto font-poppins px-3 md:px-0">
      <Outlet />
    </div>
  );
};

export default Root;

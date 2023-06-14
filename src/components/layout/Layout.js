import React from "react";
import classes from "./Layout.module.scss";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div
      className={`${classes.container} 
      ${location.pathname === "/" ? classes["container__main"] : ""}`}
    >
      {children}
    </div>
  );
};

export default Layout;

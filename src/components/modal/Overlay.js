import React from "react";
import classes from "./Overlay.module.scss";

const Overlay = ({ onClose }) => {
  return <div className={classes.overlay} onClick={onClose}></div>;
};

export default Overlay;

import React from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import ModalContent from "./ModalContent";

const Modal = () => {
  return (
    <>
      {createPortal(<Overlay />, document.getElementById("overlay-root"))}
      {createPortal(<ModalContent />, document.getElementById("modal-root"))}
    </>
  );
};

export default Modal;

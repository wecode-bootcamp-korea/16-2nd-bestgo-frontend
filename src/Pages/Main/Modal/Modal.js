import { createPortal } from "react-dom";

const Modal = (props) => {
  const el = document.getElementById("modal");
  if (el) {
    return createPortal(props.children, el);
  }
  return null;
};

export default Modal;

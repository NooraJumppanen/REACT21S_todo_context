import React from "react";
import something from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button
      className={something.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

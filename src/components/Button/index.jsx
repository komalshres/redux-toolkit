import React from "react";
import "./style.scss";

const RemoveButton = ({ children, onClick }) => {
  return (
    <button className="remove-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default RemoveButton;

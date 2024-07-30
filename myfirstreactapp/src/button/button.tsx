import React from "react";
import "./button.css";

function Button(props) {
  const { type = "normal", disable = false } = props;
  const isDisable = disable ? "disabled" : "";
  return (
    <center>
      <button className={`button ${type} ${isDisable}`}>Tamil</button>
    </center>
  );
}

export default Button;

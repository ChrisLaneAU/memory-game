import "./Btn.scss";
import React from "react";

const Btn = props => {
  return (
    <button
      data-test="component-btn"
      id={props.id}
      type={props.type}
      onClick={props.onClick}
      className={`btn btn--${props.color} ${props.className}`}
    >
      {props.text}
    </button>
  );
};

export default Btn;

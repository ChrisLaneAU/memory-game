import "./Btn.scss";
import React from "react";

const Btn = props => {
  return (
    <button
      data-test="component-btn"
      onClick={props.onClick}
      className={`btn btn--${props.color}`}
    >
      {props.text}
    </button>
  );
};

export default Btn;

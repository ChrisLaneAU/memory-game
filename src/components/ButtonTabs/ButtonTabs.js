import "./ButtonTabs.scss";
import React from "react";

export const ButtonTabs = props => {
  const btns = [
    { name: "General" },
    { name: "Rules" },
    { name: "Content" },
    { name: "Sample" }
  ];

  const renderBtns = btns.map(btn => {
    return (
      <button key={btn.name} active="false" onClick={props.onClick}>
        {btn.name}
      </button>
    );
  });

  return <div data-test="component-button-tabs">{renderBtns}</div>;
};

export default ButtonTabs;

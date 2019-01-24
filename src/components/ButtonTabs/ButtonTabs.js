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
    const activeTab = props.activeTab === btn.name ? true : false;
    return (
      <button
        key={btn.name}
        onClick={props.onClick}
        className={`button-tabs__btn ${
          activeTab ? "button-tabs__btn--active" : ""
        }`}
      >
        {btn.name}
      </button>
    );
  });

  return (
    <div data-test="component-button-tabs" className="button-tabs">
      {renderBtns}
    </div>
  );
};

export default ButtonTabs;

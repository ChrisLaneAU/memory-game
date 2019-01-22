import React from "react";
import "./LoadingOverlay.scss";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingOverlay = props => {
  const brainIcon = <FontAwesomeIcon className="loading__icon" icon="brain" />;
  const name = <p className="loading__name">Memmo</p>;

  return (
    <div data-test="component-loading-overlay" className="loading">
      <Card
        className="loading__card"
        frontImg={brainIcon}
        frontText={name}
        backImg={brainIcon}
        backText={name}
        rotate="infinitely"
      />
      <p className="loading__text">Loading...</p>
    </div>
  );
};

export default LoadingOverlay;

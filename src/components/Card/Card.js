import React from "react";
import "./Card.scss";
import "../../sass/animations.scss";

const Card = props => {
  function handleCardclick() {
    document
      .querySelector(".card__side--back")
      .classList.toggle("card__side--back--rotated");
    document
      .querySelector(".card__side--front")
      .classList.toggle("card__side--front--rotated");
  }

  function rotateInfinitely() {
    document
      .querySelector(".card__side--back")
      .classList.add("card__side--back--rotate-infinitely");
    document
      .querySelector(".card__side--front")
      .classList.add("card__side--front--rotate-infinitely");
  }

  return (
    <div
      data-test="component-card"
      className={`card ${props.className}`}
      onClick={() => {
        if (!props.rotate) return;
        if (props.rotate !== "infinitely") handleCardclick();
      }}
    >
      <div
        data-test="component-card-front"
        className={`card__side card__side--front card__side--front-1 ${
          props.rotate === "infinitely"
            ? "card__side--front--rotate-infinitely"
            : ""
        }`}
      >
        <div className="card__container">
          {props.frontImg}
          {props.frontText}
          {props.children}
          <div className="card__details" />
        </div>
      </div>
      <div
        data-test="component-card-back"
        className={`card__side card__side--back ${
          props.rotate === "infinitely"
            ? "card__side--back--rotate-infinitely"
            : ""
        }`}
      >
        <div className="card__container">
          {props.backImg}
          {props.backText}
          <div className="card__details" />
        </div>
      </div>
    </div>
  );
};

export default Card;

import "./GameSelect.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

export class GameSelect extends Component {
  renderCards() {
    const cardsData = [
      {
        icon: "tools",
        title: "Build a game",
        description: "Memory with your rules for your goals",
        linkTo: "build-a-game"
      },
      {
        icon: "th",
        title: "Try example",
        description: "Preppo: Learn prepositional phrases",
        linkTo: "build-a-game"
      },
      {
        icon: "forward",
        title: "Quick start",
        description: "Basic memory game",
        linkTo: "build-a-game"
      }
    ];

    const cards = cardsData.map((card, index) => {
      const { icon, title, description, linkTo } = card;
      return (
        <div key={icon} className="game-select">
          <Card className={`game-select__card game-select__card--${index}`}>
            <Link to={`/${linkTo}`} className="game-select__link" />
            <Link to={`/${linkTo}`} className="game-select__icon">
              <FontAwesomeIcon key={index} icon={icon} />
            </Link>
            <Link to={`/${linkTo}`} className="game-select__title">
              <h2 className="game-select__title">{title}</h2>
            </Link>
            <Link
              to={`/${linkTo}`}
              className={`game-select__description game-select__description--${index}`}
            >
              <p>{description}</p>
            </Link>
          </Card>
        </div>
      );
    });

    return cards;
  }

  render() {
    return (
      <div data-test="component-game-select" className="game-select">
        {this.renderCards()}
      </div>
    );
  }
}

export default GameSelect;

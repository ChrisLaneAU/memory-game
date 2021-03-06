import "./GameSelect.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  saveBuildGeneral,
  saveBuildRules,
  setCurrentBuild
} from "../../actions";
import Card from "../Card/Card";

export class GameSelect extends Component {
  componentDidMount() {
    const preppoGeneral = {
      gameName: "Preppo",
      gameDescription: "Learn prepositional phrases",
      numOfPairs: 6
    };
    const preppoRules = [
      "Tap a card to turn it over",
      "Tap a second card",
      "If they match you get a point and another turn",
      "If they don't match, both cards are turned back over and it's the next player's turn"
    ];
    const preppoContent = {};

    this.props.saveBuildGeneral(preppoGeneral);
    //this.props.saveBuildRules(preppoRules)
    //this.props.saveBuildContent(preppoContent)
    this.props.setCurrentBuild(preppoGeneral);
  }

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
        linkTo: "game-setup"
      },
      {
        icon: "forward",
        title: "Quick start",
        description: "Basic memory game",
        linkTo: "game-play"
      }
    ];

    const cards = cardsData.map((card, index) => {
      const { icon, title, description, linkTo } = card;
      return (
        <div key={icon} className="game-select">
          <Card
            data-test="component-card"
            className={`game-select__card game-select__card--${index}`}
          >
            <Link to={`/${linkTo}`} className="game-select__link" />
            <Link to={`/${linkTo}`} className="game-select__icon">
              <FontAwesomeIcon
                data-test="component-icon"
                key={index}
                icon={icon}
              />
            </Link>
            <Link to={`/${linkTo}`} className="game-select__title">
              <h2 data-test="title" className="game-select__title">
                {title}
              </h2>
            </Link>
            <Link
              data-test={`link-to-${linkTo}`}
              to={`/${linkTo}`}
              className={`game-select__description game-select__description--${index}`}
            >
              <p data-test="description">{description}</p>
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

const mapStateToProps = ({ builtGames }) => {
  return { builtGames };
};

export default connect(
  null,
  { saveBuildGeneral, saveBuildRules, setCurrentBuild }
)(GameSelect);

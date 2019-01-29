import "./MainMenu.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  saveBuiltGame,
  saveBuiltRules,
  setGameName,
  setNumOfPairs
} from "../../../actions";
import Card from "../../Card/Card";

export class MainMenu extends Component {
  componentDidMount() {
    const preppoGeneral = {
      gameName: "Preppo",
      gameDescription: "Learn prepositional phrases",
      numOfPairs: 6
    };
    const preppoRules = {
      rule1: "Tap a card to turn it over",
      rule2: "Tap a second card",
      rule3: "If they match you get a point and another turn",
      rule4:
        "If they don't match, both cards are turned back over and it's the next player's turn"
    };
    const { gameName, numOfPairs } = preppoGeneral;

    this.props.saveBuiltGame(preppoGeneral);
    this.props.saveBuiltRules(preppoRules, gameName);
    //this.props.saveBuildContent(preppoContent)
    this.props.setGameName(gameName);
    this.props.setNumOfPairs(numOfPairs);
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
        <div key={icon} className="main-menu">
          <Card
            data-test="component-card"
            className={`main-menu__card main-menu__card--${index}`}
          >
            <Link to={`/${linkTo}`} className="main-menu__link" />
            <Link to={`/${linkTo}`} className="main-menu__icon">
              <FontAwesomeIcon
                data-test="component-icon"
                key={index}
                icon={icon}
              />
            </Link>
            <Link to={`/${linkTo}`} className="main-menu__title">
              <h2 data-test="title" className="main-menu__title">
                {title}
              </h2>
            </Link>
            <Link
              data-test={`link-to-${linkTo}`}
              to={`/${linkTo}`}
              className={`main-menu__description main-menu__description--${index}`}
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
      <div data-test="component-main-menu" className="main-menu">
        {this.renderCards()}
      </div>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  null,
  { saveBuiltGame, saveBuiltRules, setGameName, setNumOfPairs }
)(MainMenu);

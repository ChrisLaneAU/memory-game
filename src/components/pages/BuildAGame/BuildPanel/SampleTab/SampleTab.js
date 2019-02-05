import "./SampleTab.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setCardsToFront } from "../../../../../actions";
import Btn from "../../../../Btn/Btn";

export class SampleTab extends Component {
  handleClick(event) {
    const { gameName, numOfPairs } = this.props.gameBuilder;
    const numOfCards = numOfPairs * 2;
    let cards = [];
    const { innerHTML } = event.target;
    if (innerHTML.includes("front")) {
      for (let i = 1; i <= numOfCards; i++) {
        cards.push(i);
      }
    }
    this.props.setCardsToFront(cards);
  }

  render() {
    return (
      <div data-test="component-sample-tab" className="sample-tab">
        <h4>Tap a card to rotate or:</h4>
        <div className="sample-tab__rotate-btns">
          <Btn
            text="All to front"
            color="blue"
            onClick={event => {
              this.handleClick(event);
            }}
          />
          <Btn
            text="All to back"
            color="blue"
            onClick={event => {
              this.handleClick(event);
            }}
          />
        </div>
        <Link to="/game-play" className="sample-tab__save-btn">
          <Btn text="Save and Play" color="green" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ games, gameBuilder }) => {
  return { games, gameBuilder };
};

export default connect(
  mapStateToProps,
  { setCardsToFront }
)(SampleTab);

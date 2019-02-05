import "./DisplayPanel.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import { setCardsToFront, setNumOfPairs } from "../../../../actions";
import Card from "../../../Card/Card";

export class DisplayPanel extends Component {
  renderCurrentCardIndicator() {
    const { numOfPairs, displayCardsToFront } = this.props.gameBuilder;
    const numOfCards = numOfPairs * 2;
    const currentCardToFront = displayCardsToFront[0];
    return `${currentCardToFront} / ${numOfCards}`;
  }

  handleClickCardNavLeft() {
    const { numOfPairs, displayCardsToFront } = this.props.gameBuilder;
    let prevCard = displayCardsToFront[0] - 1;
    if (prevCard === 0) prevCard = numOfPairs * 2;

    this.props.setCardsToFront([prevCard]);
  }

  handleClickCardNavRight() {
    const { numOfPairs, displayCardsToFront } = this.props.gameBuilder;
    let nextCard = displayCardsToFront[0] + 1;
    if (nextCard > numOfPairs * 2) nextCard = 1;

    this.props.setCardsToFront([nextCard]);
  }

  componentDidMount() {
    const { numOfPairs } = this.props.gameBuilder;
    const { length } = Object.entries(numOfPairs);
    if (length < 1) this.props.setNumOfPairs(2);
    this.props.setCardsToFront([1]);
  }

  render() {
    return (
      <div data-test="component-display-panel" className="display-panel">
        <div className="display-panel__left">
          <h3 className="display-panel__header">Front</h3>
          <div className="display-panel__card-nav">
            <button
              className="display-panel__btn display-panel__btn--left"
              onClick={() => this.handleClickCardNavLeft()}
            />
            <p>{this.renderCurrentCardIndicator()}</p>
            <button
              className="display-panel__btn display-panel__btn--right"
              onClick={() => this.handleClickCardNavRight()}
            />
          </div>
          <Card className="display-panel__card" />
        </div>
        <div className="display-panel__right">
          <h3 className="display-panel__header">Back</h3>
          <p className="display-panel__card-nav">All</p>
          <Card className="display-panel__card" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ gameBuilder }) => {
  return { gameBuilder };
};

export default connect(
  mapStateToProps,
  { setCardsToFront, setNumOfPairs }
)(DisplayPanel);

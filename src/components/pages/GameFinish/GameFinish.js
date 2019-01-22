import "./GameFinish.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class GameFinish extends Component {
  render() {
    return (
      <div data-test="component-game-finish">Game is finished - stats</div>
    );
  }
}

export default GameFinish;

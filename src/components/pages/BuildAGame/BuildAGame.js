import "./BuildAGame.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import BuildPanel from "./BuildPanel/BuildPanel";

export class BuildAGame extends Component {
  render() {
    return (
      <div data-test="component-build-a-game">
        <Header />
        <BuildPanel />
      </div>
    );
  }
}

export default BuildAGame;

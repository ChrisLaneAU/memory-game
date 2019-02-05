import "./BuildAGame.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import BuildPanel from "./BuildPanel/BuildPanel";
import DisplayPanel from "./DisplayPanel/DisplayPanel";

export class BuildAGame extends Component {
  render() {
    return (
      <div data-test="component-build-a-game" className="build-a-game">
        <Header />
        <div className="build-a-game__build-panel">
          <BuildPanel />
        </div>
        <div className="build-a-game__display-panel">
          <DisplayPanel />
        </div>
      </div>
    );
  }
}

export default BuildAGame;

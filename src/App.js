import "./App.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faTools,
  faTh,
  faForward,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
import Header from "./components/Header/Header";
import GameSelect from "./components/GameSelect/GameSelect";

library.add(faBrain, faTools, faTh, faForward, faPlus, faMinus);

export class App extends Component {
  componentDidMount() {
    this.props.loadingVisible(false);
  }

  render() {
    return (
      <div data-test="component-app" className="app-container">
        {this.props.loadingVisible ? (
          <div className="game-container">
            <Header />
            <GameSelect />
          </div>
        ) : (
          <LoadingOverlay />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ loadingVisible }) => {
  return { loadingVisible };
};

export default connect(
  mapStateToProps,
  actions
)(App);

import "./DisplayPanel.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "../../../Card/Card";

export class DisplayPanel extends Component {
  render() {
    return <div data-test="component-display-panel">Display panel</div>;
  }
}

export default DisplayPanel;

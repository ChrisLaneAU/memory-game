import "./SampleTab.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class SampleTab extends Component {
  render() {
    return (
      <div data-test="component-sample-tab">
        <h4>Tap a card to rotate or:</h4>
        <button>All to front</button>
        <button>All to back</button>
        <Link to="/game-play">
          <button>Save and Play</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ buildData }) => {
  return { buildData };
};

export default connect(
  mapStateToProps,
  {}
)(SampleTab);

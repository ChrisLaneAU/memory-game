import "./Header.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Header extends Component {
  render() {
    return (
      <header data-test="component-header" className="header">
        <FontAwesomeIcon className="header__icon" icon="brain" />
        <h4 className="header__text">Memmo</h4>
      </header>
    );
  }
}

export default Header;

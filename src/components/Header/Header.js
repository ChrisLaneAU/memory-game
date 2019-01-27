import "./Header.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header data-test="component-header" className="header">
        <Link to="./" className="header__content">
          <FontAwesomeIcon className="header__icon" icon="brain" />
          <h1 className="header__text">Memmo</h1>
        </Link>
      </header>
    );
  }
}

export default Header;

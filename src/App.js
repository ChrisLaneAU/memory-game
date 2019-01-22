import "./App.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
import Card from "./components/Card/Card";

library.add(faBrain);

export class App extends Component {
  render() {
    return (
      <div data-test="component-app" className="container">
        <LoadingOverlay />
      </div>
    );
  }
}

/*const mapStateToProps = state => {
  return;
};

export default connect(mapStateToProps)(UnconnectedApp);*/
export default App;

import "./BuildPanel.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import { setActiveBuildTab } from "../../../../actions";
import ButtonTabs from "../../../ButtonTabs/ButtonTabs";
import GeneralTab from "./GeneralTab/GeneralTab";
import RulesTab from "./RulesTab/RulesTab";
import ContentTab from "./ContentTab/ContentTab";
import SampleTab from "./SampleTab/SampleTab";

export class BuildPanel extends Component {
  componentDidMount() {
    this.props.setActiveBuildTab("General");
  }

  handleButtonTabsClick(event) {
    const btnText = event.target.innerHTML;
    this.props.setActiveBuildTab(btnText);
  }

  renderActiveTab() {
    const tabs = {
      General: <GeneralTab />,
      Rules: <RulesTab />,
      Content: <ContentTab />,
      Sample: <SampleTab />
    };

    return tabs[this.props.activeBuildTab];
  }

  render() {
    return (
      <div data-test="component-build-panel" className="build-panel">
        <ButtonTabs onClick={event => this.handleButtonTabsClick(event)} />
        {this.renderActiveTab()}
      </div>
    );
  }
}

const mapStateToProps = ({ activeBuildTab }) => {
  return { activeBuildTab };
};

export default connect(
  mapStateToProps,
  { setActiveBuildTab }
)(BuildPanel);

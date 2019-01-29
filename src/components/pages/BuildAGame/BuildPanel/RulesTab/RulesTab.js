import "./RulesTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Btn from "../../../../Btn/Btn";
import { saveBuiltRules, setActiveBuildTab } from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RulesTab extends Component {
  componentDidMount() {
    const { rules, gameBuilder } = this.props;
    const rulesData = rules[gameBuilder.gameName];
    //if (!rulesData) return;
    this.props.initialize(rulesData);
  }

  renderRules() {
    const { rules, gameBuilder } = this.props;
    const rulesData = rules[gameBuilder.gameName];
    if (!rulesData) return;
    const rulesArr = [];
    for (let key in rulesData) {
      rulesArr.push(rulesData[key]);
    }
    const ruleFields = rulesArr.map((rule, index) => {
      const ruleNum = index + 1;
      return (
        <Field
          key={ruleNum}
          label={ruleNum}
          name={`rule${ruleNum}`}
          component={this.renderField}
        />
      );
    });
    return ruleFields;
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    return (
      <div className="rules-tab-form__field">
        <label className="rules-tab-form__label">{`${field.label}.`}</label>
        <input className="rules-tab-form__input" type="text" {...field.input} />
        <Btn
          text={
            <FontAwesomeIcon icon="minus" className="rules-tab-form__icon" />
          }
          id={field.label}
          color="red"
          className="rules-tab-form__round-btn rules-tab-form__minus-btn"
          onClick={event => {
            event.preventDefault();
            console.log("remove line", event.target.id);
          }}
        />
      </div>
    );
  }

  onSubmit(values) {
    this.props.saveBuiltRules(values);
    this.props.setActiveBuildTab("Content");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        data-test="component-rules-tab"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className="rules-tab-form"
      >
        <h4>Rules (how to play)</h4>
        <div>{this.renderRules()}</div>
        <Btn
          text={
            <FontAwesomeIcon icon="plus" className="rules-tab-form__icon" />
          }
          color="blue"
          className="rules-tab-form__round-btn rules-tab-form__plus-btn"
          onClick={event => {
            event.preventDefault();
            console.log("add line");
          }}
        />
        <Btn
          type="submit"
          text="Continue"
          color="green"
          className="rules-tab-form__submit-btn"
        />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.rule1) {
    errors.gameName = "You need at least one rule";
  }

  return errors;
};

const mapStateToProps = ({ games, rules, gameBuilder }) => {
  return { games, rules, gameBuilder };
};

export default reduxForm({
  validate,
  form: "RulesTabForm"
})(
  connect(
    mapStateToProps,
    { saveBuiltRules, setActiveBuildTab }
  )(RulesTab)
);

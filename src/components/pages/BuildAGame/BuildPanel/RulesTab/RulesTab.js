import "./RulesTab.scss";
import React, { Component } from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";

import Btn from "../../../../Btn/Btn";
import { saveBuiltRules, setActiveBuildTab } from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RulesTab extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveRule = this.handleRemoveRule.bind(this);
  }

  renderRules() {
    const { rules, gameBuilder } = this.props;
    const rulesData = rules[gameBuilder.gameName] || { rule1: "" };

    const rulesArr = [];
    for (let key in rulesData) {
      rulesArr.push(rulesData[key]);
    }
    const ruleFields = rulesArr.map((rule, index) => {
      const ruleNum = index + 1;
      const requiresBtn = rulesArr.length !== 1 ? "true" : "false";
      return (
        <Field
          requiresBtn={requiresBtn}
          key={ruleNum}
          label={ruleNum}
          name={`rule${ruleNum}`}
          onClick={this.handleRemoveRule}
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
        <div className="rules-tab-form__error">{touched ? error : ""}</div>
        {field.requiresBtn === "true" ? (
          <Btn
            text={
              <FontAwesomeIcon icon="minus" className="rules-tab-form__icon" />
            }
            id={field.label}
            color="red"
            className="rules-tab-form__round-btn rules-tab-form__minus-btn"
            onClick={event => {
              field.onClick(event, field.label);
            }}
          />
        ) : (
          <div className="rules-tab-form__round-btn" />
        )}
      </div>
    );
  }

  componentDidMount() {
    const { rules, gameBuilder } = this.props;
    const rulesData = rules[gameBuilder.gameName];
    this.props.initialize(rulesData);
  }

  handleRemoveRule(event, ruleNum) {
    event.preventDefault();
    const { formVals, gameBuilder } = this.props;
    const { gameName } = gameBuilder;

    const newVals = {};
    let index = 0,
      key;
    for (key in formVals) {
      const isDeletedRule = key === `rule${ruleNum}` ? true : false;
      if (!isDeletedRule && formVals.hasOwnProperty(key)) {
        index++;
        newVals[`rule${index}`] = formVals[key];
      }
    }

    this.props.saveBuiltRules(newVals, gameName);
    this.props.initialize(newVals);
  }

  handleAddRule(event) {
    event.preventDefault();
    const { formVals, gameBuilder } = this.props;
    const { gameName } = gameBuilder;

    let index = 1,
      key;
    for (key in formVals) {
      if (formVals.hasOwnProperty(key)) index++;
    }
    const newVals = { ...formVals, [`rule${index}`]: "" };

    this.props.saveBuiltRules(newVals, gameName);
  }

  onSubmit(values) {
    const { gameName } = this.props.gameBuilder;
    this.props.saveBuiltRules(values, gameName);
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
          onClick={event => this.handleAddRule(event)}
        />
        <Btn
          type="submit"
          text="Next &rarr;"
          color="blue"
          className="rules-tab-form__submit-btn"
        />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  let index = 0,
    key;
  for (key in values) {
    if (values.hasOwnProperty(key)) index++;
    if (!values[`rule${index}`]) {
      errors[`rule${index}`] = "Sorry, no empty rules";
    }
  }

  return errors;
};

const mapStateToProps = state => {
  const { games, rules, gameBuilder } = state;

  return {
    games,
    rules,
    gameBuilder,
    formVals: getFormValues("RulesTabForm")(state)
  };
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

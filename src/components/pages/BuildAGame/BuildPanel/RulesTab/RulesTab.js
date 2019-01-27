import "./RulesTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Btn from "../../../../Btn/Btn";
import { saveBuildRules, setActiveBuildTab } from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RulesTab extends Component {
  componentDidMount() {
    const rules = [
      "test rule one",
      "test rule two",
      "test rule three",
      "test rule four"
    ];

    const rulesArr = rules.map((rule, index) => {
      const ruleNum = index + 1;
      return (
        <Field
          label={ruleNum}
          name={`rule${ruleNum}`}
          component={this.renderField}
        />
      );
    });

    //this.props.initialize(rules);
  }

  renderRules() {
    const rules = [
      "test rule one",
      "test rule two",
      "test rule three",
      "test rule four",
      "test rule five"
    ];

    const rulesArr = rules.map((rule, index) => {
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

    return rulesArr;
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
    this.props.saveBuildRules(values);
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
        <div>
          {this.renderRules()}
          {/*<Field label="1" name="rule1" component={this.renderField} />
          <Field label="2" name="rule2" component={this.renderField} />
          <Field label="3" name="rule3" component={this.renderField} />
          <Field label="4" name="rule4" component={this.renderField} />*/}
        </div>
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

const mapStateToProps = ({ builtGames }) => {
  return { builtGames };
};

export default reduxForm({
  validate,
  form: "RulesTabForm"
})(
  connect(
    mapStateToProps,
    { saveBuildRules, setActiveBuildTab }
  )(RulesTab)
);

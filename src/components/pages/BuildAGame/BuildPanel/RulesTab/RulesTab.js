import "./RulesTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Btn from "../../../../Btn/Btn";
import { saveBuild, setActiveBuildTab } from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RulesTab extends Component {
  componentDidMount() {
    const rules = {
      rule1: "test rule one",
      rule2: "test rule two",
      rule3: "test rule three",
      rule4: "test rule four"
    };

    this.props.initialize(rules);
  }

  renderField(field, rule) {
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
    this.props.saveBuild(values);
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
          <Field label="1" name="rule1" component={this.renderField} />
          <Field label="2" name="rule2" component={this.renderField} />
          <Field label="3" name="rule3" component={this.renderField} />
          <Field label="4" name="rule4" component={this.renderField} />
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

  if (!values.gameName) {
    errors.gameName = "Your game needs a name";
  }
  if (!values.gameDescription) {
    errors.gameDescription = "Add a descripton to tell players about your game";
  }
  if (!values.numOfPairs) {
    errors.numOfPairs = "How many pairs in your game?";
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
    { saveBuild, setActiveBuildTab }
  )(RulesTab)
);

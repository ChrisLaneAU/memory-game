import "./RulesTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { saveBuild, setActiveBuildTab } from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RulesTab extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form__input" type="text" {...field.input} />
        <button>
          <FontAwesomeIcon icon="plus" />
        </button>
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
      >
        <h4>Rules (how to play)</h4>
        <Field label="1." name="rule-1" component={this.renderField} />
        <Field label="2." name="rule-2" component={this.renderField} />
        <Field label="3." name="rule-3" component={this.renderField} />
        <Field label="4." name="rule-4" component={this.renderField} />
        <button type="submit">Continue</button>
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

const mapStateToProps = ({ buildData }) => {
  return { buildData };
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

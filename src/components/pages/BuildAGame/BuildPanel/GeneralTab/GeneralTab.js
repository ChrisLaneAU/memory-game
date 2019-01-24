import "./GeneralTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  saveBuild,
  setCurrentBuild,
  setActiveBuildTab
} from "../../../../../actions";

export class GeneralTab extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form__input" type={field.type} {...field.input} />
        {field.noError !== "true" ? (
          <div className="form__error">{touched ? error : ""}</div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  onSubmit(values) {
    this.props.saveBuild(values);
    this.props.setCurrentBuild(values);
    this.props.setActiveBuildTab("Rules");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        data-test="component-general-tab"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field
          label="Name your game"
          name="gameName"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="gameDescription"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Number of pairs"
          name="numOfPairs"
          type="text"
          component={this.renderField}
        />
        <Field
          name="numOfPairs"
          type="range"
          min="6"
          max="20"
          value="12"
          noError="true"
          component={this.renderField}
        />
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
  form: "GeneralTabForm"
})(
  connect(
    mapStateToProps,
    { saveBuild, setCurrentBuild, setActiveBuildTab }
  )(GeneralTab)
);

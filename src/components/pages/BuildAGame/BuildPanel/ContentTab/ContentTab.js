import "./ContentTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { saveBuild } from "../../../../../actions";

export class ContentTab extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form__input" type={field.type} {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.saveBuild(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        data-test="component-content-tab"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <h4>Rules (how to play)</h4>
        <Field
          label="Upload image"
          name="uploadImage"
          type="file"
          component={this.renderField}
        />
        <Field
          label="Center image"
          name="rule-2"
          type="radio"
          component={this.renderField}
        />
        <Field
          label="Fill card"
          name="rule-3"
          type="radio"
          component={this.renderField}
        />
        <h4>Images (drag and drop onto card)</h4>
        <div className="imagesList">List of images</div>
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
  form: "ContentTabForm"
})(
  connect(
    mapStateToProps,
    { saveBuild }
  )(ContentTab)
);

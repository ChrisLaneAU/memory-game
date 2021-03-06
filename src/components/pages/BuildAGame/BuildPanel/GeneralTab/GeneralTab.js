import "./GeneralTab.scss";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Btn from "../../../../Btn/Btn";
import {
  saveBuiltGame,
  setActiveBuildTab,
  setGameName,
  setNumOfPairs
} from "../../../../../actions";

export class GeneralTab extends Component {
  componentDidMount() {
    const gameName = this.props.gameBuilder.gameName || "Untitled Game";
    this.props.setGameName(gameName);
    const { games } = this.props;
    const generalData = games[gameName];
    this.props.initialize(generalData);
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    return (
      <div>
        <label className="general-tab-form__label">{field.label}</label>
        <input
          className={`general-tab-form__input general-tab-form__input--${
            field.type
          }`}
          type={field.type}
          {...field.input}
        />
        {field.hideError !== "true" ? (
          <div className="general-tab-form__error">{touched ? error : ""}</div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  onSubmit(values) {
    this.props.saveBuiltGame(values);
    this.props.setNumOfPairs(this.props.gameBuilder.numOfPairs);
    this.props.setActiveBuildTab("Rules");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        data-test="component-general-tab"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className="general-tab-form"
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
        <div className="general-tab-form__number-of-pairs">
          <Field
            label="Number of pairs"
            name="numOfPairs"
            type="number"
            component={this.renderField}
          />
          <Field
            name="numOfPairs"
            type="range"
            min="6"
            max="20"
            value="12"
            hideError="true"
            component={this.renderField}
          />
        </div>
        <Btn
          type="submit"
          text="Next &rarr;"
          color="blue"
          className="general-tab-form__submit-btn"
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
    errors.gameDescription = "Add a descripton to entice players";
  }
  if (!values.numOfPairs) {
    errors.numOfPairs = "How many pairs in your game?";
  }

  return errors;
};

const mapStateToProps = ({ games, gameBuilder, numOfPairs }) => {
  return { games, gameBuilder, numOfPairs };
};

export default reduxForm({
  validate,
  form: "GeneralTabForm"
})(
  connect(
    mapStateToProps,
    { saveBuiltGame, setActiveBuildTab, setGameName, setNumOfPairs }
  )(GeneralTab)
);

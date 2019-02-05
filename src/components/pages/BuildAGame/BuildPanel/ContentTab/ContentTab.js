import "./ContentTab.scss";
import React, { Component } from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import "./ImageUploaderCustom.scss";

import Btn from "../../../../Btn/Btn";
import ImageGallery from "./ImageGallery/ImageGallery";
import {
  setActiveBuildTab,
  setUploadedImages,
  setActiveImage
} from "../../../../../actions";

export class ContentTab extends Component {
  renderRadios() {
    const { images, activeImage } = this.props.gameBuilder;

    // TODO: set checked radio button onClick of image in gallery to match
    // style in img object - simplify below code, if not required
    let currentStyle = "center";
    const { length } = Object.entries(images);
    if (length > 0 && activeImage < length) {
      currentStyle = images[activeImage].style;
    }
    const valueVals = ["center", "fill"];

    return (
      <div className="content-tab-form__radio-group">
        <Field
          label="Center image"
          name="style"
          valueVal={valueVals[0]}
          defaultChecked={currentStyle === valueVals[0]}
          component={this.renderField}
          onChangeVal={style => this.handleRadioChange(style)}
        />
        <Field
          label="Fill card"
          name="style"
          valueVal={valueVals[1]}
          defaultChecked={currentStyle === valueVals[1]}
          component={this.renderField}
          onChangeVal={style => this.handleRadioChange(style)}
        />
      </div>
    );
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    return (
      <label className="radio radio-container">
        {field.label}
        <input
          type="radio"
          defaultChecked={field.defaultChecked}
          {...field.input}
          value={field.valueVal}
          onChange={event => {
            field.onChangeVal(event.target.value);
          }}
        />
        <span className="radio radio-checkmark" />
      </label>
    );
  }

  componentDidMount() {
    const initialStyle = { style: "center" };
    this.props.initialize(initialStyle);
  }

  onDrop(pictureFiles, pictureDataURLs, { formVals, gameBuilder }) {
    const { style } = formVals;
    const { images } = gameBuilder;
    const { length } = pictureDataURLs;
    let activeImageIndex = 0;

    const imgs = pictureDataURLs.map((img, index) => {
      activeImageIndex = index;
      const newStyle = length - 1 === index ? style : images[index].style;
      return { img, style: newStyle };
    });

    this.props.setUploadedImages(imgs);
    this.props.setActiveImage(activeImageIndex);
  }

  handleRadioChange(style) {
    const { images, activeImage } = this.props.gameBuilder;
    if (Object.entries(images).length === 0) return;

    const updatedImages = images.map((image, index) => {
      const { img } = image;
      const newStyle = activeImage === index ? style : image.style;
      return { img, style: newStyle };
    });

    this.props.setUploadedImages(updatedImages);
  }

  onSubmit(values) {
    this.props.setActiveBuildTab("Sample");
  }

  render() {
    const { handleSubmit, gameBuilder } = this.props;

    return (
      <div className="content-wrapper">
        <form
          data-test="component-content-tab"
          className="content-tab-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <h4>Upload images</h4>
          <ImageUploader
            name="uploadImage"
            className="content-tab-form__uploader"
            withIcon={false}
            singleImage={true}
            buttonText="Choose image"
            label="Max file size: 5mb"
            onChange={(pictureFiles, pictureDataURLs) => {
              this.onDrop(pictureFiles, pictureDataURLs, this.props);
            }}
            imgExtension={[".jpg", ".gif", ".png"]}
            maxFileSize={5242880}
          />
          {this.renderRadios()}
          <h4>Images (drag and drop onto card)</h4>
          <ImageGallery />
          <Btn
            type="submit"
            text="Next &rarr;"
            color="blue"
            className="content-tab-form__submit-btn"
          />
        </form>
      </div>
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

const mapStateToProps = state => {
  const { games, gameBuilder } = state;
  return {
    games,
    gameBuilder,
    formVals: getFormValues("ContentTabForm")(state)
  };
};

export default reduxForm({
  validate,
  form: "ContentTabForm"
})(
  connect(
    mapStateToProps,
    { setActiveBuildTab, setUploadedImages, setActiveImage }
  )(ContentTab)
);

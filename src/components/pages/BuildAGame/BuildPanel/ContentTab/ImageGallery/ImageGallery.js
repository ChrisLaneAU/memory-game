import "./ImageGallery.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../../../../actions";

export class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    const item = this.wrapperRef;
    if (
      item &&
      !item.contains(event.target) &&
      !event.target.classList.contains("radio")
    ) {
      this.props.setActiveImage(9999999);
    }
  }

  handleImageClick(id) {
    this.props.setActiveImage(id - 0);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.props.setActiveImage(0);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    const { images, activeImage } = this.props.gameBuilder;
    const imgs = Object.entries(images).length === 0 ? [] : images;
    const { length } = imgs;
    if (length === 0) return <div />;

    const renderImgs = imgs.map((image, index) => {
      const activeClass =
        this.props.gameBuilder.activeImage === index
          ? "image-gallery__img-container--active"
          : "";
      return (
        <div
          className={`image-gallery__img-container ${activeClass}`}
          onMouseDown={event => this.handleImageClick(event.target.id)}
          key={index}
          id={index}
          ref={this.setWrapperRef}
        >
          <img
            src={image.img}
            className={`image-gallery__img image-gallery__img--${image.style}`}
            alt=""
          />
        </div>
      );
    });

    return (
      <div data-test="component-image-gallery" className="image-gallery">
        {renderImgs}
      </div>
    );
  }
}

const mapStateToProps = ({ images, gameBuilder }) => {
  return { images, gameBuilder };
};

export default connect(
  mapStateToProps,
  { setActiveImage }
)(ImageGallery);

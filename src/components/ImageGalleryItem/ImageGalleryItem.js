import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  static propTypes = { onClick: PropTypes.func };

  modal = (elem) => {
    this.props.openModal(this.props.largeImageURL);
    console.log(this.props.largeImageURL);
  };

  render() {
    return (
      <>
        <li onClick={this.modal} className={classes.ImageGalleryItem}>
          <img
            src={this.props.webformatURL}
            alt="type"
            key={this.props.largeImageURL}
            className={classes.ImageGalleryItemImage}
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;

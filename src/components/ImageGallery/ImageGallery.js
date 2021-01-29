import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import classes from "./ImageGallery.module.css";

function ImageGallery({ data, openModal }) {
  return (
    <div>
      <ul className={classes.ImageGallery}>
        {data.map((elem) => {
          return (
            <ImageGalleryItem
              key={elem.id}
              webformatURL={elem.webformatURL}
              openModal={openModal}
              largeImageURL={elem.largeImageURL}
            />
          );
        })}
      </ul>
    </div>
  );
}
ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;

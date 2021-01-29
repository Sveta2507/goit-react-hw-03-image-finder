import React from "react";
import classes from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, id, type }) {
  return (
    <li key={id} className={classes.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={type}
        className={classes.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;

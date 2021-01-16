import React from "react";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ props }) {
  return (
    <ul className="ImageGallery">
      {props.map((item) => {
        return (
          <ImageGalleryItem
            id={item.id}
            webformatURL={item.webformatURL}
            type={item.type}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;

import React from "react";

function ImageGalleryItem({ webformatURL, id, type }) {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={type} />
    </li>
  );
}

export default ImageGalleryItem;

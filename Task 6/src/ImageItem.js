// src/components/ImageItem.js
import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, index, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(index)}>
      <img src={image} alt="Gallery" />
    </div>
  );
};

export default ImageItem;

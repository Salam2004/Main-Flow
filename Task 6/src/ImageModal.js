// src/components/ImageModal.js
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, closeModal, goToPreviousImage, goToNextImage }) => {
  return (
    <div className="image-modal" onClick={closeModal}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <button className="previous" onClick={goToPreviousImage}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <img src={image} alt="Modal" />
        <button className="next" onClick={goToNextImage}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;

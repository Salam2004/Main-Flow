// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const images = [
  'https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.wwxK07x0Umfnh0l-nrjxjgHaDg&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.aUqyCPkTpyXx3nAZgOyjLwHaFj&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.FEqv7YYMNjXtrVYqo7HHzAHaE7&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.9lnXkkbptDmcYPbscu6F_AHaEK&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.mPogxw_pyPLE_hi1qWNTbwHaEK&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.FlSy_HPHe_sO4uYh6hjKtwHaEK&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.hkBqYm9xbVLsq8Wf5rtBlQHaEA&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.QVBY30VqTi-tlYt_BaoGqAHaEo&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.zuv9LWRZ0o0OitTYVcbSEwHaEK&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.Xw2hEMrkroOJy8yiVLKt8QHaEK&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.jMF0-x4R7iGkQIULcWWz8gHaEK&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.y6CRwgQiXtmv71ravklCBgHaEK&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.7gl2RFJl4MRGb8X8SRhmdAHaEK&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.6KioyKuDlAGCtWA5iA7ZFQHaEK&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.EpEUttBsIJizu2_7-LVZBQHaFj&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.2IrMLU3tf9fDCxN7LkwK4gHaFj&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.E14E6e9MiARI4mlSTvAQ-QHaFj&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.ntIgQ7Hr7F6O8x5zR17c8wHaEP&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.yPVK2OgXOlCmZ5RCdMys3AHaF7&pid=Api&P=0&h=180',
];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} index={index} openModal={openModal} />
      ))}
      {selectedImageIndex !== null && (
        <ImageModal
          image={images[selectedImageIndex]}
          closeModal={closeModal}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;

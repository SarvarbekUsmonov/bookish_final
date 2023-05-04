import React, { useState, useEffect } from 'react';

const ImageWithFallback = ({ inputImageUrl, fallbackImageUrl, ...props }) => {
  const [imageUrl, setImageUrl] = useState(inputImageUrl);

  useEffect(() => {
    const img = new Image();
    img.src = inputImageUrl;

    img.onload = () => {
      setImageUrl(inputImageUrl);
    };

    img.onerror = () => {
      setImageUrl(fallbackImageUrl);
    };
  }, [inputImageUrl, fallbackImageUrl]);

  return <img src={imageUrl} {...props} />;
};

export default ImageWithFallback;
import React, { useState } from 'react';

function ImageSelector() {
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const width = img.width;
          const height = img.height;
          setImageData({ src: e.target.result, width, height });
        };
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageData && (
        <div>
          <img src={imageData.src} alt="Selected" style={{ maxWidth: '100%' }} />
          <p>
            Width: {imageData.width}px, Height: {imageData.height}px
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageSelector;
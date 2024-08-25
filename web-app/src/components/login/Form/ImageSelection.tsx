import React, { useState } from 'react';
// import { AspectRatio, Box, Input, Image, Button } from '@chakra-ui/react';
import './ImageSelection.css';

export const ImageUpload = () => {
  const [image, setImage] = useState('');

  const handleImageSelection = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const removeImage = () => {
    setImage('');
  };

  return (
    <div>
      <div>
        {/* <div className="image-upload-frame">
          {image ? (
            <Box borderColor="gray.300" borderWidth="2px" rounded="md" role="group">
              <Image src={image} objectFit={'cover'} />
            </Box>
          ) : (
            <>
              <input
                className="image-upload-box"
                type="file"
                aria-hidden="true"
                accept="image/*"
                value={image}
                onChange={handleImageSelection}
              />
            </>
          )}
          <button onClick={removeImage}>Supprimer l'image</button>
        </div> */}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { AspectRatio, Box, VStack, Input, Image, Button } from '@chakra-ui/react';

export const ImageUpload = () => {
  const [image, setImage] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleImageSelection = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(URL.createObjectURL(e.target.files[0]));
    // upload image logic
  };

  const removeImage = () => {
    setImage('');
  };

  return (
    <Box>
      <VStack p={8}>
        <AspectRatio width="32" ratio={1}>
          {image ? (
            <Box borderColor="gray.300" borderWidth="2px" rounded="md" role="group">
              <Image src={image} objectFit={'cover'} />
            </Box>
          ) : (
            <>
              {' '}
              <Box
                borderColor="#C2C2C2"
                backgroundColor="#EDEDED"
                borderWidth="1px"
                rounded="20px"
                role="group"
                _hover={{
                  shadow: 'md',
                }}
              ></Box>
              <Input
                type="file"
                multiple={false}
                height="100%"
                width="100%"
                position="absolute"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                value={image}
                onChange={handleImageSelection}
              />
            </>
          )}
        </AspectRatio>
        <Button onClick={removeImage}>Supprimer l'image</Button>
      </VStack>
    </Box>
  );
};

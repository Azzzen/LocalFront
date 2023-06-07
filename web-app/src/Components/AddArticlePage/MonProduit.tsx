import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import { ImageUpload } from './ImageUpload';
import MonProduitForm from './MonProduitForm';

export default function MonProduit() {
  return (
    <React.Fragment>
      <Text fontSize="lg">Mon Produit</Text>
      <Divider />
      <Flex direction="row" justifyContent="space-around">
        <ImageUpload />
        <MonProduitForm />
      </Flex>
    </React.Fragment>
  );
}

import React from 'react';
import { Text, Divider, Flex } from '@chakra-ui/react';
import MonEntrepriseForm from './MonEntrepriseForm';
import { ImageUpload } from 'Components/AddArticlePage/ImageUpload';

export default function MonEntreprise() {
  return (
    <React.Fragment>
      <React.Fragment>
        <Text fontSize="lg">Mon Entreprise</Text>
        <Divider />
        <Flex direction="row" justifyContent="space-around">
          <ImageUpload />
          <MonEntrepriseForm />
        </Flex>
      </React.Fragment>
    </React.Fragment>
  );
}

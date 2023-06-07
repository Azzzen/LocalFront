import React from 'react';
import { Text, Divider } from '@chakra-ui/react';
import AdresseForm from './AdresseForm';

export default function Adresse() {
  return (
    <React.Fragment>
      <Text fontSize="lg">Composition et provenance</Text>
      <Divider />
      <AdresseForm />
    </React.Fragment>
  );
}

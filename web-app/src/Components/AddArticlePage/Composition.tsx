import React from 'react';
import { Text, Divider } from '@chakra-ui/react';
import CompositionForm from './CompositionForm';

export default function Composition() {
  return (
    <React.Fragment>
      <Text fontSize="lg">Composition et provenance</Text>
      <Divider />
      <CompositionForm />
    </React.Fragment>
  );
}

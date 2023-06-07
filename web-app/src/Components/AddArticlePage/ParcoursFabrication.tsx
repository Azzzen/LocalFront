import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import ParcoursFabricationForm from './ParcoursFabricationForm';

export default function ParcoursFabrication() {
  return (
    <React.Fragment>
      <Text fontSize="lg">Parcours de fabrication</Text>
      <Divider />
      <Flex direction="row" justifyContent="space-around">
        <ParcoursFabricationForm />
      </Flex>
    </React.Fragment>
  );
}

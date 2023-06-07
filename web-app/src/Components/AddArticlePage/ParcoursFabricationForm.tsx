import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SmallFormInput } from '../FormInput';
export default function ParcoursFabricationForm() {
  return (
    <Flex direction={'column'}>
      <Flex direction={'row'} justifyContent={'space-evenly'}>
        <SmallFormInput productTitle="Adresse de l'Usine" placeholder="Ex: 12 rue Verte" />
        <SmallFormInput productTitle="Code Postal" placeholder="Ex: 31300" />
      </Flex>
      <Flex direction={'row'} justifyContent={'space-evenly'}>
        <SmallFormInput productTitle="Ville" placeholder="Ex: Toulouse" />
        <SmallFormInput productTitle="Pays" placeholder="Ex: France" />
      </Flex>
    </Flex>
  );
}

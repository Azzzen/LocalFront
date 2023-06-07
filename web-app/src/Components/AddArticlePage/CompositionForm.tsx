import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SmallFormInput } from '../FormInput';
export default function CompositionForm() {
  return (
    <Flex direction={'row'} justifyContent={'space-evenly'}>
      <SmallFormInput productTitle="Matière" placeholder="Ex: 100% Coton" />
      <SmallFormInput productTitle="Origine" placeholder="Ex: Made in France" />
    </Flex>
  );
}

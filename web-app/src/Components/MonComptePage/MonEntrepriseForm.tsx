import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MidFormInput, SmallFormInput } from '../FormInput';
export default function MonEntrepriseForm() {
  return (
    <Flex direction={'column'} justifyContent={'space-evenly'}>
      <SmallFormInput productTitle="Nom de l'entreprise" placeholder="Tranquille Emile" />
      <MidFormInput
        productTitle="Description"
        placeholder="Tranquille Emile est une marque de vêtement destiné aux hommes soucieux de l’impact écologique de leur consommation"
      />
    </Flex>
  );
}

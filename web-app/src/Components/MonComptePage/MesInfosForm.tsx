import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SmallFormInput } from '../FormInput';
export default function MesInfosForm() {
  return (
    <Flex direction={'column'}>
      <Flex direction={'row'} justifyContent={'space-evenly'}>
        <SmallFormInput productTitle="Nom" placeholder="Ex: Dupont" />
        <SmallFormInput productTitle="Prénom" placeholder="Ex: Chantal" />
      </Flex>
      <Flex direction={'row'} justifyContent={'space-evenly'}>
        <SmallFormInput productTitle="Adresse mail" placeholder="Ex: c.dupont@gmail.com" />
      </Flex>
      <Flex direction={'row'} justifyContent={'space-evenly'}>
        <SmallFormInput productTitle="Téléphone" placeholder="Ex: 06 41 52 63 74" />
      </Flex>
    </Flex>
  );
}

import React from 'react';
import { Flex, FormControl } from '@chakra-ui/react';
import { MidFormInput } from '../FormInput';
export default function DescriptionForm() {
  return (
    <Flex direction={'column'}>
      <FormControl>
        <MidFormInput
          productTitle="Quels sont les efforts éthiques apportés à cet article ?"
          placeholder="Ex: Cet article est produit 100% en france dans la ville du Mans"
        />
        <MidFormInput
          productTitle="Quels sont les efforts écologiques apportés à cet article ?"
          placeholder="Ex: Cet article est composé uniquement de coton bio en provenance d'Europe"
        />
      </FormControl>
    </Flex>
  );
}

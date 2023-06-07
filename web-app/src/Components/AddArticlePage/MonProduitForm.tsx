import React from 'react';
import { Flex, FormControl } from '@chakra-ui/react';
import { MidFormInput, SmallFormInput } from '../FormInput';
export default function MonProduitForm() {
  return (
    <Flex direction={'column'}>
      <FormControl>
        <SmallFormInput productTitle="Titre du produit" placeholder="Ex: Robe longue fuschia" />
        <SmallFormInput productTitle="Prix" placeholder="34€" />
        <MidFormInput productTitle="Description" placeholder="Cette Robe fuschia..." />
      </FormControl>
    </Flex>
  );
}

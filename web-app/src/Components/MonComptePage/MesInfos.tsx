import React from 'react';
import { Text, Divider } from '@chakra-ui/react';
import MesInfosForm from './MesInfosForm';

export default function MesInfos() {
  return (
    <React.Fragment>
      <Text fontSize="lg">Mes informations</Text>
      <Divider />
      <MesInfosForm />
    </React.Fragment>
  );
}

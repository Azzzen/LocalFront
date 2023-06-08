import { Box, Divider, Flex, Text } from '@chakra-ui/react';

import React from 'react';
import MonEntreprise from './MonEntreprise';
import Adresse from './Adresse';
import MesInfos from './MesInfos';
import MotDePasse from './MotDePasse';
export default function MonCompte() {
  return (
    <React.Fragment>
      <Flex justifyContent={'space-around'}>
        <Box
          width="80%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor="#F6F6F6"
          padding="2%"
        >
          <Text fontSize="2xl">Mon Compte</Text>
          <Divider />
          <Box paddingTop="2%" paddingBottom="2%">
            <Flex direction="row" justifyContent={'space-evenly'}>
              <Box>
                <MonEntreprise />
                <Adresse />
              </Box>
              <Box>
                <MesInfos />
                <MotDePasse />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

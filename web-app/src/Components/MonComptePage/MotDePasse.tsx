import React from 'react';
import { Text, Divider, Flex, Button } from '@chakra-ui/react';

export default function MotDePasse() {
  return (
    <React.Fragment>
      <React.Fragment>
        <Text fontSize="lg">Mot de passe</Text>
        <Divider />
        <Flex direction="column" justifyContent="space-around" alignItems={'center'}>
          <Text fontSize="md">
            Cliquez sur le bouton ci-dessous pour changer votre mot
            <br /> de passe, nous vous enverrons un email avec la
            <br /> procédure à suivre!
          </Text>
          <Button bgColor="#99AF8C" width="sm" color="#E9E9E9">
            <a href="/password">Réinitialiser le mot de passe</a>
          </Button>{' '}
        </Flex>
      </React.Fragment>
    </React.Fragment>
  );
}

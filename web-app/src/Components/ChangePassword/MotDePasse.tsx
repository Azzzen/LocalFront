import {
  Box,
  Divider,
  Button,
  FormControl,
  Text,
  VStack,
  Flex,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ConfirmButton from './ConfirmButton';
import LogoBanner from '../LogoBanner';
export default function AddArticle() {
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('password: ' + password, ', conf: ', confPassword);
  };
  return (
    <React.Fragment>
      <Flex justifyContent={'space-around'}>
        <Box
          width="80%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor={'white.200'}
          paddingTop="2%"
          paddingBottom="2%"
        >
          <VStack>
            <LogoBanner />
            <Text fontSize="xl">Vous avez oublié votre mot de passe ?</Text>
            <Text fontSize="xl">Aucun problème, entrez-en un nouveau ci-dessous!</Text>
            <Divider />
            <Flex paddingTop="5%" paddingBottom="2%">
              <FormControl isRequired>
                <FormLabel fontSize={'2xl'}>Nouveau mot de passe</FormLabel>
                <Input type="text" onChange={(e) => setPassword(e.currentTarget.value)} />
                <FormLabel>confirmation du mot de passe</FormLabel>
                <Input type="text" onChange={(e) => setConfPassword(e.currentTarget.value)} />
              </FormControl>
            </Flex>
            <Button
              marginTop="15%"
              bgColor={'grey.300'}
              height="110px"
              width="432px"
              color={'grey.300'}
              style={{ borderRadius: '73px' }}
              onClick={handleSubmit}
            >
              <Text color={'white.100'} fontSize="3xl">
                Confirmer
              </Text>
            </Button>
          </VStack>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

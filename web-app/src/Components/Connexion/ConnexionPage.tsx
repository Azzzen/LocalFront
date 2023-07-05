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
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import LogoBanner from '../LogoBanner';

export default function ConnexionPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('password: ' + email, ', conf: ', password);
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
            <Box margin={'2%'}>
              <LogoBanner />
            </Box>
            <div>
              <Text fontSize="xl">
                Bienvenue, Veuillez vous connecter pour accéder à votre espace!
              </Text>
              <Divider />
            </div>
            <Flex flexDirection={'row'} padding={'1%'}>
              <HStack spacing={200}>
                <Flex paddingTop="5%" paddingBottom="2%">
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="text" onChange={(e) => setEmail(e.currentTarget.value)} />
                    <FormLabel>mot de passe</FormLabel>
                    <Input type="text" onChange={(e) => setPassword(e.currentTarget.value)} />
                  </FormControl>
                </Flex>
              </HStack>
              <Flex flexDir={'column'}>
                <Box
                  borderWidth="1px"
                  borderRadius="5px"
                  borderColor={'white.400'}
                  overflow="hidden"
                  bgColor={'white.200'}
                  padding="5%"
                >
                  <Text fontSize="xl">Pas de compte ?</Text>
                  <Divider />
                  <Text fontSize="xl" color="green.200">
                    <a href="/register">S'inscrire</a>
                  </Text>
                  <Text fontSize="xl">Mot de passe oublié ?</Text>
                  <Divider />
                  <Text fontSize="xl" color="green.200">
                    <a href="/password">Changer mon mot de passe</a>
                  </Text>
                </Box>
              </Flex>
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
                Se connecter
              </Text>
            </Button>
          </VStack>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

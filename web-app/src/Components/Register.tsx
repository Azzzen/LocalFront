import { Box, Divider, Button, FormControl, Text } from '@chakra-ui/react';
import { VStack, Flex, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import LogoBanner from './LogoBanner';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessRole, setBusinessRole] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [businessContact, setBusinessContact] = useState('');
  const [submittable, setSubmitable] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      email,
      password,
      name,
      lastName,
      businessName,
      businessRole,
      confPassword,
      businessContact
    );
  };
  const handlepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfPassword(e.currentTarget.value);
    console.log(confPassword);
    setSubmitable(password == confPassword ? true : false);
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
            <Text fontSize="xl">Heureux de faire votre connaissance ! </Text>
            <div>
              <Text fontSize="xl">
                Veuillez remplir ces champs afin de finaliser votre inscription
              </Text>
              <Divider />
            </div>
            <Box
              borderWidth="1px"
              borderRadius="5px"
              borderColor={'white.400'}
              overflow="hidden"
              bgColor={'white.200'}
              padding="5%"
              width={'67%'}
            >
              <Text fontSize="xl">Déjà un compte ?</Text>
              <Divider />
              <Text fontSize="xl" color="green.200">
                <a href="/login">Se Connecter</a>
              </Text>
            </Box>
            {/* <Flex flexDir={'column'}>

            </Flex> */}
            <Flex flexDirection={'row'} padding={'1%'}>
              <Flex paddingTop="5%" paddingBottom="2%" paddingRight={'2%'}>
                <FormControl isRequired>
                  <FormLabel>Nom</FormLabel>
                  <Input type="text" onChange={(e) => setLastName(e.currentTarget.value)} />
                  <FormLabel>Nom de l'entreprise</FormLabel>
                  <Input type="text" onChange={(e) => setBusinessName(e.currentTarget.value)} />
                  <FormLabel>Email</FormLabel>
                  <Input type="text" onChange={(e) => setEmail(e.currentTarget.value)} />
                  <FormLabel>Mot de passe</FormLabel>
                  <Input type="text" onChange={(e) => setPassword(e.currentTarget.value)} />
                </FormControl>
              </Flex>
              <Flex paddingTop="5%" paddingBottom="2%">
                <FormControl isRequired>
                  <FormLabel>Prénom</FormLabel>
                  <Input type="text" onChange={(e) => setName(e.currentTarget.value)} />
                  <FormLabel>Poste dans l'entreprise</FormLabel>
                  <Input type="text" onChange={(e) => setBusinessRole(e.currentTarget.value)} />
                  <FormLabel>Email de l'entreprise</FormLabel>
                  <Input type="text" onChange={(e) => setBusinessContact(e.currentTarget.value)} />
                  <FormLabel>Confirmation de mot de passe</FormLabel>
                  <Input type="text" onChange={(e) => handlepassword(e)} />
                </FormControl>
              </Flex>
            </Flex>
            <Button
              marginTop="15%"
              bgColor={submittable ? 'grey.300' : 'grey.100'}
              height="110px"
              width="432px"
              color={'grey.300'}
              style={{ borderRadius: '73px' }}
              onClick={handleSubmit}
              isDisabled={!submittable}
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

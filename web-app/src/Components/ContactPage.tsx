import { Box, Button, Checkbox, Divider, Flex, FormLabel, Select, Stack } from '@chakra-ui/react';
import { HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './navbar/navbar';
import LogoBanner from './LogoBanner';

type FormValues = {
  name: string;
  email: string;
  object: string;
  message: string;
};

export interface ProcessEnv {
  [key: string]: string | undefined;
}

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [acheck, setACheck] = useState(true);
  const [showObjectInput, setshowObjectInput] = useState(false);
  const presetObjects = [
    { option: 'Interêt pour un partenariat' },
    { option: 'Informations quant au calcul du localscore' },
    { option: 'Demande de devis' },
    { option: 'Autre' },
  ];

  const onSubmit = async () => {
    const status = acheck ? 'Particulier' : 'Professionnel';
    const serviceID: string = process.env.REACT_APP_SERVICE_ID ?? 'service_je9m2b5';
    const templateID: string = process.env.REACT_APP_TEMPLATE_ID ?? 'template_47awap6';
    const userID: string = process.env.USER_ID ?? 'tnXfv8dmbjeWqQI5P';

    try {
      const templateParams = {
        name,
        email,
        object,
        message,
        status,
      };
      await emailjs.send(serviceID, templateID, templateParams, userID);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleOptions = (currentOption: string) => {
    currentOption === 'Autre' ? setshowObjectInput(true) : setshowObjectInput(false);
    setObject(currentOption);
  };

  const handleEmail = (mail: string) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(mail)) {
      setValidEmail(true);
      setEmail(mail);
    } else {
      setValidEmail(false);
    }
  };
  const handleName = (name: string) => {
    if (name.length > 1) {
      setValidName(true);
      setName(name);
    } else setValidName(false);
  };
  const handleMessage = (message: string) => {
    if (message.length > 1) {
      setValidMessage(true);
      setMessage(message);
    } else setValidMessage(false);
  };
  return (
    <Fragment>
      <Flex justifyContent={'space-around'}>
        <Box
          width="80%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor={'white.200'}
          paddingTop="2%"
          paddingBottom="2%"
          marginTop={10}
        >
          <VStack>
            <Box margin={'2%'}>
              <LogoBanner />
            </Box>
            <div>
              <Divider />
              <Text fontSize="xl">Formulaire de contact </Text>
            </div>
            <Flex flexDirection={'row'} padding={'1%'}>
              <HStack spacing={200}>
                <Flex paddingTop="5%" paddingBottom="2%">
                  <form>
                    <Box margin={10}>
                      <FormLabel>Nom</FormLabel>
                      <Input
                        isInvalid={!validName}
                        onChange={(e) => handleName(e.currentTarget.value)}
                        type="text"
                      />
                    </Box>
                    <Box margin={10}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        isInvalid={!validEmail}
                        onChange={(e) => handleEmail(e.currentTarget.value)}
                        type="email"
                      />
                    </Box>
                    <Stack spacing={5} direction="row" margin={10}>
                      <Checkbox
                        isChecked={!acheck}
                        colorScheme="green"
                        onChange={() => {
                          setACheck(!acheck);
                        }}
                      >
                        Je suis un professionnel
                      </Checkbox>
                    </Stack>
                    <Box margin={10}>
                      <FormLabel>Objet</FormLabel>

                      {/* <FormLabel>{!showObjectInput ? 'Objet du message' : ''} </FormLabel> */}
                      <Select
                        onChange={(e) => handleOptions(e.target.value)}
                        placeholder="Selectionnez un objet"
                      >
                        {presetObjects.map((pObject, index) => (
                          <option
                            onChange={() => {
                              handleOptions;
                            }}
                            key={index}
                            value={pObject.option}
                          >
                            {pObject.option}
                          </option>
                        ))}
                      </Select>
                      <Box margin={10}>
                        {showObjectInput && (
                          <Input onChange={(e) => setObject(e.currentTarget.value)} type="text" />
                        )}
                      </Box>
                    </Box>
                    <Box margin={10}>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        isInvalid={!validMessage}
                        onChange={(e) => handleMessage(e.currentTarget.value)}
                      />
                    </Box>
                    <Box display={'flex'} margin={10}>
                      <Button
                        backgroundColor={'green.200'}
                        color={'white'}
                        isDisabled={!validEmail || !validMessage || !validName}
                        onClick={() => onSubmit()}
                      > 
                        Send
                      </Button>
                    </Box>
                  </form>
                </Flex>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Fragment>
  );
}

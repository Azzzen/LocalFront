import { Box, Button, Checkbox, Divider, Flex, FormLabel, Select, Stack } from '@chakra-ui/react';
import { HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';

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
    { option: 'objet 1' },
    { option: 'objet 2' },
    { option: 'objet 3' },
    { option: 'Autre' },
  ];

  const onSubmit = async (data: FormValues) => {
    const { name, email, object, message } = data;
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
        >
          <VStack>
            <div>
              <Text fontSize="xl">Formulaire de contact </Text>
              <Divider />
            </div>
            <Flex flexDirection={'row'} padding={'1%'}>
              <HStack spacing={200}>
                <Flex paddingTop="5%" paddingBottom="2%">
                  <form>
                    <FormLabel>Nom</FormLabel>
                    <Input
                      isInvalid={!validName}
                      onChange={(e) => handleName(e.currentTarget.value)}
                      type="text"
                    />
                    <FormLabel>Email</FormLabel>
                    <Input
                      isInvalid={!validEmail}
                      onChange={(e) => handleEmail(e.currentTarget.value)}
                      type="email"
                    />
                    <Stack spacing={5} direction="row">
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
                    <FormLabel>{!showObjectInput ? 'Objet du message' : ''} </FormLabel>
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
                    {showObjectInput && (
                      <Fragment>
                        <FormLabel>Objet</FormLabel>
                        <Input onChange={(e) => setObject(e.currentTarget.value)} type="text" />
                      </Fragment>
                    )}
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      isInvalid={!validMessage}
                      onChange={(e) => handleMessage(e.currentTarget.value)}
                    />
                    <Button
                      isDisabled={!validEmail || !validMessage || !validName}
                      onClick={() => onSubmit({ name, email, object, message })}
                    >
                      Send
                    </Button>
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

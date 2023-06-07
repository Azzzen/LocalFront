import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import DescriptionForm from './DescriptionForm';

export default function Description() {
  return (
    <React.Fragment>
      <Text fontSize="lg">Description</Text>
      <Divider />
      <Flex direction="row" justifyContent="space-around">
        <DescriptionForm />
      </Flex>
    </React.Fragment>
  );
}

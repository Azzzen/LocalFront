import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

export default function SubmitButton(props: { title: string }) {
  return (
    <Flex justifyContent={'center'}>
      <Button bgColor="#99AF8C" width="sm" color="#E9E9E9">
        {props.title}
      </Button>
    </Flex>
  );
}

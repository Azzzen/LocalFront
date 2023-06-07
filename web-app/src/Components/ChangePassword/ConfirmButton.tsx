import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

export default function ConfirmButton(props: { title: string; handleClick: CallableFunction }) {
  return (
    <Flex justifyContent={'center'}>
      <Button
        marginTop="15%"
        bgColor="#828282"
        height="110px"
        width="432px"
        color="#E9E9E9"
        style={{ borderRadius: '73px' }}
      >
        <Text fontSize="3xl">{props.title}</Text>
      </Button>
    </Flex>
  );
}

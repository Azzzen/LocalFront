import React, { useState } from 'react';
import { Flex, FormLabel, Input, Textarea } from '@chakra-ui/react';

const MidFormInput = ({ productTitle, placeholder }: Props) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <Flex direction="column">
        <FormLabel>{productTitle}</FormLabel>
        <Textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </Flex>
    </React.Fragment>
  );
};

const SmallFormInput = ({ productTitle, placeholder }: Props) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <Flex direction="column">
        <FormLabel>{productTitle}</FormLabel>
        <Input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </Flex>
    </React.Fragment>
  );
};

type Props = {
  productTitle: string;
  placeholder?: string;
};

export { MidFormInput, SmallFormInput };

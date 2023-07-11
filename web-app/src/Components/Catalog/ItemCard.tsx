import { Dispatch, SetStateAction, useState } from 'react';
import { Line } from 'rc-progress';

import { CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  // Progress,
  Text,
  VStack,
} from '@chakra-ui/react';
import DeleteModal from './DeleteModal';
import { Items } from './Catalog';

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export default function ItemCard({
  title,
  photo,
  id,
  price,
  desc,
  score,
  color,
  lastbought,
  lastshown,
  lastclick,
  setItems,
  setDelItemId,
}: Props) {
  return (
    <div style={{ margin: '10px' }}>
      <Card maxW={1331} maxH={247}>
        <CardBody>
          <Flex justifyContent={'flex-end'}>
            <DeleteModal articleId={id} setDelItemId={setDelItemId} />
          </Flex>
          <HStack justifyContent={'space-around'}>
            <Image src={photo} height={'0.1%'} width={'9%'} />
            <VStack>
              <Text fontSize={'sm'}>{id}</Text>
              <Text fontSize={'xl'}>{title}</Text>
              <Text fontSize={'sm'}>prix unitaire: {price}€</Text>
              <Text fontSize={'sm'}>Description:</Text>
              <Text fontSize={'xs'}>{desc}</Text>
            </VStack>
            <VStack>
              <Text>Environement:</Text>
              <Text>{score}/100</Text>
              <Line percent={score} strokeWidth={5} strokeColor={color} />
              <Text>Ethique:</Text>
              <Text>{score}/100</Text>
              <Line percent={score} strokeWidth={5} strokeColor={color} />
            </VStack>
            <Divider orientation="vertical" />
            <VStack alignItems={'flex-start'}>
              <Text fontSize={'xs'}>Dernière apparition sur l'extension: </Text>
              <Text fontSize={'xs'}>{lastshown}</Text>
              <Text fontSize={'xs'}>Dernière redirection: </Text>
              <Text fontSize={'xs'}>{lastclick}</Text>
              <Text fontSize={'xs'}>Dernier achat: </Text>
              <Text fontSize={'xs'}>{lastbought}</Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Button>Modifier l'article</Button>
            </VStack>
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
}

type Props = {
  title: string;
  photo: string;
  id: string;
  price: number;
  desc: string;
  score: number;
  color: string;
  lastbought: string;
  lastshown: string;
  lastclick: string;
  setItems: Dispatcher<Items[]>;
  setDelItemId: Dispatcher<string>;
};

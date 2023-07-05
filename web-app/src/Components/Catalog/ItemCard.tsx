import { Dispatch, SetStateAction, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
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
    <Card>
      <CardBody>
        <Flex justifyContent={'flex-end'}>
          <DeleteModal articleId={id} setDelItemId={setDelItemId} />
          {/* <IconButton
            aria-label="delete item"
            icon={<CloseIcon />}
            colorScheme="red"
            color="black"
            onClick={() => setOpenDeleteModal(true)}
          /> */}
        </Flex>
        <HStack>
          <Image src={photo} height={225} width={183} />
          <VStack>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>prix unitaire: {price}€</Text>
            <Text>Description:</Text>
            <Text>{desc}</Text>
          </VStack>
          {/* <Divider borderColor={'black'} orientation="vertical" /> */}
          <VStack>
            <Text>environement:</Text>
            <Text>
              {score}/100 {color}
            </Text>
            <Text>ethique:</Text>
            <Text>
              {score}/100 {color}
            </Text>
          </VStack>
          <VStack>
            <Text>Dernière apparition sur l'extension: </Text>
            <Text>{lastshown}</Text>
            <Text>Dernière redirection: </Text>
            <Text>{lastclick}</Text>
            <Text>Dernier achat: </Text>
            <Text>{lastbought}</Text>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
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

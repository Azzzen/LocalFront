import { CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Dispatcher } from './ItemCard';

// import { extendTheme } from '@chakra-ui/react'

// const theme = extendTheme({
//   components: {
//     Modal: {
//       baseStyle: {
//         bg: 'white.500',
//       },
//     },
//   },
// })

export default function DeleteModal({ articleId, setDelItemId }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteArticle = () => {
    onClose;
    setDelItemId(articleId);
  };
  return (
    <>
      <IconButton
        aria-label="delete item"
        icon={<CloseIcon />}
        colorScheme="red"
        color="black"
        onClick={onOpen}
      />
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={'white.200'}>
          <ModalHeader>Etes-vous certain de vouloir effacer cet article ?</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            En cliquant sur le bouton ci-dessous, vous supprimerez définitivement cet article de
            votre catalogue. Etes-vous sur de vouloir le supprimer ?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={deleteArticle}>
              Oui, supprimer définitivement cet article
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

type Props = {
  articleId: string;
  setDelItemId: Dispatcher<string>;
};

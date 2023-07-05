import { Box, Divider, Flex, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar/navbar';

export default function SiteMap() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Flex justifyContent={'space-around'}> */}
      <VStack justifyContent={'space-around'}>
        <Text fontSize={'4xl'} color={'green.200'}>
          Plan du Site
        </Text>
        <Box
          width="30%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor={'white.200'}
          padding="2%"
        >
          <Text fontSize={'2xl'}>Site Web</Text>
          <Divider />
          <Text fontSize="lg" color="green.200">
            <a href="/">Accueil</a>
          </Text>
          <Text fontSize="lg" color="green.200">
            <a href="/register">Telecharger l'extension</a>
          </Text>
          <Text fontSize={'2xl'}>Espace Partenaire</Text>
          <Divider />
          <Text fontSize="lg" color="green.200">
            <a href="/register">Inscription</a>
          </Text>
          <Text fontSize="lg" color="green.200">
            <a href="/">Connexion</a>
          </Text>
          <Text fontSize="lg" color="green.200">
            <a href="/mon-compte">Mon Compte</a>
          </Text>
          <Text fontSize="lg" color="green.200">
            <a href="/addArticle">Ajouter un article à mon catalogue</a>
          </Text>
          <Text fontSize="lg" color="green.200">
            <a href="/catalog">Catalogue</a>
          </Text>
          <Text fontSize={'2xl'}>Informations légales</Text>
          <Divider />
          <Text fontSize="lg" color="green.200">
            <a href="/register">Politique de confidentialité</a>
            <Text fontSize="lg" color="green.200"></Text>
            <a href="/register">Mentions légales</a> <Text fontSize="lg" color="green.200"></Text>
            <a href="/register">Conditions générales d'utilisation</a>
            <Text fontSize="lg" color="green.200"></Text>
            <a href="/register">Conditions générales de vente</a>
            <Text fontSize="lg" color="green.200"></Text>
          </Text>
        </Box>
      </VStack>
      {/* </Flex> */}
    </React.Fragment>
  );
}

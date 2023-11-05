import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar/navbar';

export default function LegalMentions() {
  return (
    <React.Fragment>
      <Navbar show={true} />
      {/* <Flex justifyContent={'space-around'}> */}
      <VStack justifyContent={'space-around'}>
        <Text fontSize={'4xl'} color={'green.200'}>
          Mentions légales
        </Text>
        <Box
          width="40%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor={'white.200'}
          padding="2%"
        >
          <Text fontSize={'2xl'}>Editeur du site</Text>
          <Divider />
          <Text fontSize="lg" color="gray.700">
            Nom de l'entreprise: LocalShirt
          </Text>
          <Text fontSize="lg" color="gray.700">
            Forme Juridique: TBD
          </Text>
          <Text fontSize="lg" color="gray.700">
            Siège Social: 14-16 Rue Voltaire, 94270 Le Kremlin-Bicêtre, France
          </Text>
          <Text fontSize="lg" color="gray.700">
            Numero de téléphone: 06 03 69 00 91
          </Text>
          <Text fontSize="lg" color="gray.700">
            adresse E-mail: localshirt.eip@gmail.com
          </Text>
          <Text fontSize="lg" color="gray.700">
            Numero d'identification: TBD
          </Text>
          <Text fontSize={'2xl'}>Directeur de la publication</Text>
          <Divider />
          <Text fontSize="lg" color="gray.700">
            Nom du directeur: Timothée de Boynes
          </Text>
          <Text fontSize="lg" color="gray.700">
            Adresse e-mail du directeur: timothee.de-boynes@epitech.eu
          </Text>
          <Text fontSize={'2xl'}>Hébergeur du site</Text>
          <Divider />
          <Text fontSize="lg" color="gray.700">
            Nom de l'hébergeur: Netlify, Inc
          </Text>
          <Text fontSize="lg" color="gray.700">
            Adresse: 44 Montgomery Street, Suite 300, San Francisco, California 94104
          </Text>
          <Text fontSize="lg" color="gray.700">
            Adresse e-mail: support@netlify.com
          </Text>
          <Text fontSize={'2xl'}>Propriété intellectuelle</Text>
          <Text fontSize="lg" color="gray.700">
            Le site internet, son contenu et tous les éléments qui le composent (textes, images,
            logos, vidéos, etc.) sont la propriété exclusive de LocalShirt ou sont utilisés avec
            l'autorisation des titulaires des droits. Toute reproduction, représentation,
            modification, diffusion ou exploitation totale ou partielle, quel que soit le support
            utilisé, est interdite sans l'autorisation préalable écrite de LocalShirt
          </Text>
          <Text fontSize={'2xl'}>Liens vers des sites tiers :</Text>
          <Text fontSize="lg" color="gray.700">
            Le site internet peut contenir des liens hypertextes redirigeant vers des sites internet
            tiers. LocalShirt n'exerce aucun contrôle sur ces sites et décline toute responsabilité
            quant à leur contenu, leur disponibilité ou leur politique de confidentialité.
            L'activation de ces liens se fait sous la responsabilité de l'utilisateur.
          </Text>
          <Text fontSize={'2xl'}>Collecte et traitement de données personnelles</Text>
          <Text fontSize="lg" color="gray.700">
            Le site internet peut collecter et traiter certaines données personnelles des
            utilisateurs. Pour plus d'informations sur la collecte, l'utilisation et la protection
            de vos données personnelles, veuillez consulter notre politique de confidentialité.
          </Text>
          <Text fontSize={'2xl'}>Cookies</Text>
          <Text fontSize="lg" color="gray.700">
            Le site internet utilise des cookies pour améliorer l'expérience de navigation des
            utilisateurs. Les cookies sont de petits fichiers textes stockés sur l'appareil de
            l'utilisateur. En utilisant le site internet, l'utilisateur consent à l'utilisation de
            cookies conformément à notre politique de cookies.
          </Text>
          <Text fontSize={'2xl'}>Responsabilité</Text>
          <Text fontSize="lg" color="gray.700">
            LocalShirt s'efforce de fournir des informations exactes et à jour sur le site internet,
            mais ne peut garantir leur exhaustivité ou leur exactitude. LocalShirt décline toute
            responsabilité en cas d'erreurs ou d'omissions concernant les informations disponibles
            sur le site.
          </Text>
          <Text fontSize={'2xl'}>Modification des mentions légales</Text>
          <Text fontSize="lg" color="gray.700">
            LocalShirt se réserve le droit de modifier les présentes mentions légales à tout moment,
            en fonction des évolutions du site internet ou de la législation applicable. Les
            modifications prendront effet dès leur publication sur le site internet. Pour toute
            question ou demande concernant les mentions légales du site, veuillez nous contacter à
            l'adresse e-mail suivante : localshirt.eip@gmail.com. Dernière mise à jour des mentions
            légales : 06/07/2023
          </Text>
        </Box>
      </VStack>
      {/* </Flex> */}
    </React.Fragment>
  );
}

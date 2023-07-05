import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar/navbar';

export default function CGU() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Flex justifyContent={'space-around'}> */}
      <VStack justifyContent={'space-around'}>
        <Text fontSize={'4xl'} color={'green.200'}>
          Conditions générales d'utilisation
        </Text>
        <Box
          width="60%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor={'white.200'}
          padding="2%"
        >
          <Text fontSize="lg" color="gray.700">
            Les présentes conditions générales d'utilisation (les "CGU") régissent l'utilisation du
            site internet Localshirt (le "Site") et les services proposés par Localshirt (ci-après
            dénommé "nous", "notre" ou "nos"). En accédant au Site et en utilisant nos services,
            vous acceptez les présentes CGU dans leur intégralité. Si vous n'acceptez pas ces CGU,
            veuillez cesser d'utiliser le Site et nos services.{' '}
          </Text>
          <Text fontSize={'2xl'}>Description du service:</Text>
          <Divider />
          <Text fontSize="lg" color="gray.700">
            Localshirt est un site internet qui compare l'impact environnemental de vêtements
            provenant de différentes marques. Le Site vise à fournir des informations objectives sur
            l'empreinte écologique des vêtements afin d'aider les utilisateurs à prendre des
            décisions d'achat plus responsables. Nous redirigeons également les utilisateurs vers
            des marques partenaires proposant des vêtements avec le meilleur impact écologique.
          </Text>
          <Text fontSize={'2xl'}>Utilisation du Site:</Text>

          <Text fontSize="lg" color="gray.700">
            a. Droits de propriété : Le Site et son contenu (textes, images, logos, vidéos, etc.)
            sont protégés par des droits de propriété intellectuelle. Sauf autorisation expresse,
            vous vous engagez à ne pas reproduire, modifier, distribuer ou exploiter de quelque
            manière que ce soit le contenu du Site.
          </Text>
          <Text fontSize="lg" color="gray.700">
            b. Licence limitée : En utilisant le Site, nous vous accordons une licence limitée, non
            exclusive et révocable pour accéder au Site et utiliser nos services, conformément aux
            présentes CGU. Cette licence ne vous confère aucun droit de propriété sur le Site ou son
            contenu.
          </Text>
          <Text fontSize="lg" color="gray.700">
            c. Contenu généré par les utilisateurs : En utilisant le Site, vous pouvez être amené à
            publier du contenu généré par les utilisateurs. Vous reconnaissez et acceptez que vous
            êtes seul responsable du contenu que vous publiez et que vous vous engagez à ne pas
            publier de contenu illégal, diffamatoire, obscène ou offensant.
          </Text>
          <Text fontSize={'2xl'}>Limitation de responsabilités:</Text>
          <Divider />
          <Text fontSize="lg" color="gray.700">
            a. Informations fournies : Nous nous efforçons de fournir des informations précises et à
            jour sur le Site. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou la
            fiabilité de ces informations. Vous reconnaissez que l'utilisation des informations
            fournies sur le Site se fait à vos propres risques.
          </Text>
          <Text fontSize="lg" color="gray.700">
            b. Liens externes : Le Site peut contenir des liens vers des sites internet tiers. Nous
            déclinons toute responsabilité quant au contenu, à la disponibilité ou à la politique de
            confidentialité de ces sites tiers. L'activation de ces liens se fait sous votre
            responsabilité.
          </Text>
          <Text fontSize={'2xl'}>Protection des données personnelles :</Text>
          <Divider />
          <Text fontSize="lg" color="gray.700">
            La collecte et le traitement des données personnelles des utilisateurs sont régis par
            notre politique de confidentialité. En utilisant le Site, vous acceptez notre politique
            de confidentialité et consentez à la collecte, à l'utilisation et au traitement de vos
            données personnelles conformément à celle-ci.
          </Text>
          <Text fontSize={'2xl'}>Modification des CGU:</Text>
          <Text fontSize="lg" color="gray.700">
            Nous nous réservons le droit de modifier les présentes CGU à tout moment, en fonction de
            l'évolution du Site ou de la législation applicable. Les modifications prendront effet
            dès leur publication sur le Site. Il est de votre responsabilité de consulter
            régulièrement les CGU pour vous tenir informé des éventuelles modifications.
          </Text>
          <Text fontSize={'2xl'}>Droit applicable et juridiction compétente:</Text>
          <Text fontSize="lg" color="gray.700">
            Les présentes CGU sont régies et interprétées conformément aux lois en vigueur. Tout
            litige relatif aux CGU ou à l'utilisation du Site sera soumis à la juridiction exclusive
            des tribunaux compétents.
          </Text>
          <Text fontSize={'2xl'}>Contact:</Text>
          <Text fontSize="lg" color="gray.700">
            Si vous avez des questions, des commentaires ou des réclamations concernant les
            présentes CGU, veuillez nous contacter à l'adresse suivante : localshirt.eip@gmail.com.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Dernière mise à jour des CGU : 06/07/2023.
          </Text>
        </Box>
      </VStack>
      {/* </Flex> */}
    </React.Fragment>
  );
}

import { Box, Divider, Flex, Text, Grid, GridItem } from '@chakra-ui/react';

import React from 'react';
import SubmitButton from '../SubmitButton';
import Composition from './Composition';
import MonProduit from './MonProduit';
import ParcoursFabrication from './ParcoursFabrication';
import Description from './Description';
import Navbar from 'Components/navbar/navbar';
import BackgroundShapes from '../../assets/BackgroundShapes';
export default function AddArticle() {
  return (
    <React.Fragment>
      <Navbar />
      <Flex justifyContent={'space-around'}>
        <Box
          width="80%"
          borderWidth="3px"
          borderRadius="20px"
          overflow="hidden"
          bgColor="#F6F6F6"
          padding="2%"
        >
          <div>
            <Text fontSize="2xl">Ajouter un article</Text>
            <Divider />
          </div>
          <Box paddingTop="2%" paddingBottom="2%">
            <Flex direction="row" justifyContent={'space-evenly'}>
              <Box paddingRight="1%">
                <MonProduit />
                <Composition />
              </Box>
              <Box paddingLeft="1%">
                <ParcoursFabrication />
                <Description />
              </Box>
            </Flex>
          </Box>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colStart={2}>
              <SubmitButton title="Ajouter l'article" />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

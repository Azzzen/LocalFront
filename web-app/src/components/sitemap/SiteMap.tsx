import React from 'react';
import '../background.css';
import blurredBall from '../../assets/blurred-green-ball.svg';
import { Button, CardContent, Divider, Grid, Stack, Typography, Card, styled } from '@mui/material';
import theme from "../../theme";
import { Center } from '../../informationPage/Information';
import BlurryBackground from '../blurryBackground/BlurryBackground';

export default function SiteMap() {
  const ResponsiveCard = styled(Card)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '30vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '90vw',
    },
    display: 'flex',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
  }));

  const LinkButton = styled(Button)(({ theme }) => ({
    color: '#99AF8C',
    height: "30px"
  }));
  const LeftAlignedStack = styled(Stack)({
    alignItems: 'flex-start',
  });
  return (
    <Center width={'100vw'} height={'100vh'}>
      <BlurryBackground />

      <Typography variant="h1" color="green.main" align="center" sx={{ fontWeight: 'bold', marginBottom: "20px" }}>
        Plan du Site
      </Typography>

      <Grid item xs={12} sm={8} lg={4}>
        <ResponsiveCard variant="outlined" color="white">
          <CardContent sx={{ marginLeft: "20px" }}>
            <Typography variant="h2" color="gray.main" align="left" sx={{ marginTop: '10%' }}>
              Site web
            </Typography>
            <Divider variant="fullWidth" sx={{ border: '1px solid', borderColor: 'gray.main' }} />
            <LeftAlignedStack>
              <LinkButton sx={{ marginTop: '3%' }} variant="text" href="/">
                Accueil
              </LinkButton>
              <LinkButton variant="text" href="https://chromewebstore.google.com/?hl=fr">
                Télécharger l'extension
              </LinkButton>
            </LeftAlignedStack>
            <Typography variant="h2" color="gray.main" align="left" sx={{ marginTop: '15%' }}>
              Espace partenaire
            </Typography>
            <Divider variant="fullWidth" sx={{ border: '1px solid', borderColor: 'gray.main' }} />
            <LeftAlignedStack>
              <LinkButton sx={{ marginTop: '3%' }} variant="text">
                Inscription
              </LinkButton>
              <LinkButton variant="text" >
                Connexion
              </LinkButton>
              <LinkButton variant="text" >
                Reinitialiser mon mot de passe
              </LinkButton>
              <LinkButton variant="text">
                Mon compte
              </LinkButton>
              <LinkButton variant="text" >
                Ajouter un article à mon catalogue
              </LinkButton>
              <LinkButton variant="text" >
                Catalogue
              </LinkButton>
            </LeftAlignedStack>
            <Typography variant="h2" color="gray.main" align="left" sx={{ marginTop: '15%' }}>
              Informations légales
            </Typography>
            <Divider variant="fullWidth" sx={{ border: '1px solid', borderColor: 'gray.main' }} />
            <LeftAlignedStack>
              <LinkButton sx={{ marginTop: '3%' }} variant="text" href="/cgv">
                Conditions générales de vente
              </LinkButton>
              <LinkButton variant="text" href="/legalMentions">
                Mentions légales
              </LinkButton>
              <LinkButton variant="text" href="/confidentiality">
                Politique de confidentialité
              </LinkButton>
              <LinkButton variant="text" href="/cgu">
                Conditions générales d'utilisation
              </LinkButton>
            </LeftAlignedStack>
          </CardContent>
        </ResponsiveCard>
      </Grid>
    </Center>
  );
}

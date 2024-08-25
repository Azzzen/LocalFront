import React from 'react';
import { useCookies } from 'react-cookie';
import { gql } from '@apollo/client';
import { Button, CardContent, Divider, Box, Grid, Stack, Typography, Card, styled, Link } from '@mui/material';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { validatePassword } from './../tools/validatePassword';
import theme from '../../theme'
import Forbidden from '../forbidden/Forbidden';
import { ImageInput } from '../inputs/Image';
import { Center } from "../../informationPage/Information";
import BlurryBackground from '../blurryBackground/BlurryBackground';
import client from '../../graphqlApollo';
import { showToast } from './../tools/toast';

export default function Register() {
  const [cookies, setCookie] = useCookies(['token', 'theme']);
  let email = '';
  let password = '';
  let name = '';
  let lastName = '';
  let businessName = '';
  let businessRole = '';
  let confPassword = '';
  let businessContact = '';
  let businessDescription = '';
  let businessLogo = '';
  let profilePic = '';

  const setProfilePic = (value: string) => {
    profilePic = value;
  };
  const setBusinessLogo = (value: string) => {
    businessLogo = value;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (password === confPassword &&
      email.length !== 0 &&
      password.length !== 0 &&
      name.length !== 0 &&
      lastName.length !== 0 &&
      businessName.length !== 0 &&
      businessRole.length !== 0 &&
      businessContact.length !== 0) {
      if (validatePassword(password) === true) {
        const qr = gql(`
      query {
        register(
          email: "${email}", 
          password: "${password}", 
          name: "${name}", 
          lastName: "${lastName}", 
          businessName: "${businessName}", 
          businessRole: "${businessRole}", 
          businessContact: "${businessContact}",
          business_logo: "${businessLogo}",
          profil_picture:"${profilePic}",
          businessLink: "",
          businessDescription: "${businessDescription}",
          ) {
          status
          userMessage
          devMessage
          content {
            email
            access_token
          }
        }
      }
    `);
        const data = await client.query({
          query: qr,
        });
        if (data.data.register.status === 200) {
          setCookie('token', data.data.register.content.access_token, { path: '/' });
          window.location.replace('/confirm_registration');
        } else {
          showToast('error', data.data.register.userMessage);
        }
      }
    } else {
      console.error('non');
    }
  };

  const ResponsiveCard = styled(Card)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '67vw',
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

  const NameInputText = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '12vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '30vw',
      height: '30vw',
      borderRadius: '30vw',
    },
    marginRight: '1vw',
    marginBottom: '1vw',
  }));

  const LongInputText = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '17vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '30vw',
      height: '30vw',
      borderRadius: '30vw',
    },
    marginRight: '1vw',
    marginBottom: '1vw',
  }));

  const RegisterButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.green.main,
    color: theme.palette.white.main,
    marginBottom: '2vw'
  }));
  const LeftAlignedStack = styled(Stack)({
    alignItems: 'flex-start',
  });

  return !cookies.token ? (
    <React.Fragment>
      <BlurryBackground />
      <Center width={'100vw'} height={'100vh'}>
        <Typography variant="h1" color="green.main" align="center" sx={{ fontWeight: 'bold' }}>
          Bienvenue chez LocalShirt
        </Typography>
        <Grid item xs={12} sm={8} lg={4}>
          <ResponsiveCard variant="outlined" color="white">
            <CardContent>
              <Typography variant="h2" color="gray.main" align="left">
                Mes informations personnelles
              </Typography>
              <Divider sx={{ border: '1px solid', borderColor: 'gray.main', marginBottom: '3vw', width: '30vw' }} />
              <LeftAlignedStack>
                <Box style={{ width: '60vw', marginBottom: '0vw' }} display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
                  <Box style={{ width: '28vw' }} display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} flexDirection={'row'}>
                      <Box display={'flex'} flexDirection={'column'}>
                        <Typography color="gray.main" align="left">
                          Nom
                        </Typography>
                        <NameInputText InputProps={{ style: { height: '42px' } }} id="lastInNameInputText" variant="outlined" onChange={(e: any) => { name = e.target.value }} />
                      </Box>
                      <Box display={'flex'} flexDirection={'column'}>
                        <Typography color="gray.main" align="left">
                          Prenom
                        </Typography>
                        <NameInputText InputProps={{ style: { height: '42px' } }} id="name" variant="outlined" onChange={(e: any) => { lastName = e.target.value }} />
                      </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Email
                      </Typography>
                      <NameInputText InputProps={{ style: { height: '42px' } }} id="email" variant="outlined" onChange={(e: any) => { email = e.target.value }} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Telephone
                      </Typography>
                      <NameInputText InputProps={{ style: { height: '42px' } }} id="telephone" variant="outlined" onChange={(e: any) => { businessContact = e.target.value }} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Mot de Passe
                      </Typography>
                      <LongInputText InputProps={{ style: { height: '42px' } }} id="password" variant="outlined" onChange={(e: any) => { password = e.target.value }} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Confirmation du mot de passe
                      </Typography>
                      <LongInputText InputProps={{ style: { height: '42px' } }} id="passwordConfirmation" variant="outlined" onChange={(e: any) => { confPassword = e.target.value }} />
                    </Box>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <ImageInput prevLogo={''} title={'photo de profil'} edit={true} setImageString={setProfilePic} imageString={profilePic} id="1" />
                  </Box>
                </Box>
              </LeftAlignedStack>
              <Typography variant="h2" color="gray.main" align="left" style={{ marginTop: '3vw' }}>
                Mon Entreprise
              </Typography>
              <Divider sx={{ border: '1px solid', borderColor: 'gray.main', marginBottom: '3vw', width: '30vw' }} />
              <LeftAlignedStack>
                <Box style={{ width: '60vw', marginBottom: '0vw' }} display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
                  <Box style={{ width: '28vw' }} display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Nom de l'Entreprise
                      </Typography>
                      <LongInputText InputProps={{ style: { height: '42px' } }} id="outlined-basic" variant="outlined" onChange={(e: any) => { businessName = e.target.value }} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Poste occupe
                      </Typography>
                      <LongInputText InputProps={{ style: { height: '42px' } }} id="outlined-basic" variant="outlined" onChange={(e: any) => { businessRole = e.target.value }} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography color="gray.main" align="left">
                        Description de ma marque
                      </Typography>
                      <LongInputText multiline rows={4} InputProps={{ style: { width: '27vw' } }} id="outlined-basic" variant="outlined" onChange={(e: any) => { businessDescription = e.target.value }} />
                    </Box>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Grid item lg={6} display={'flex'} flexDirection={"column"} alignItems={"center"} >
                      <Box className={'column-element'}>
                        <ImageInput prevLogo={''} title={'ajouter un logo'} edit={true} setImageString={setBusinessLogo} imageString={businessLogo} id='2' />
                      </Box>
                    </Grid>
                  </Box>
                </Box>
              </LeftAlignedStack>
              <Box display={'flex'} justifyContent={'space-around'}>
                <RegisterButton variant="contained" onClick={handleSubmit}>S'inscrire</RegisterButton>
              </Box>
            </CardContent>
          </ResponsiveCard>
        </Grid>
        <Box display={"flex"} flexDirection={'row'} width={'21vw'} justifyContent={'space-between'} marginTop={'1vh'}>
          <Typography variant="h2">Déja un compte ?</Typography>
          <Link underline='none' variant="h2" color={theme.palette.green.main} href={'/login'}>Se connecter</Link>
        </Box>
      </Center>
    </React.Fragment>
  ) : (
    <Forbidden />
  );
}


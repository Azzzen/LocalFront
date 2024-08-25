import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import { ImageInput } from '../inputs/Image';
import { gql, useQuery } from '@apollo/client';
import client from '../../graphqlApollo';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Divider, Grid, Button, Typography, styled, TextField, Box } from '@mui/material';
import Forbidden from '../forbidden/Forbidden';
import Loading from '../loading/Loading';
import { Center } from "../../informationPage/Information";
import BlurryBackground from '../blurryBackground/BlurryBackground';

type User = {
  email: string;
  password: string;
  name: string;
  lastName: string;
  businessRole: string;
  businessContact: string;
  businessDescription: string;
  businessName: string;
  isConfirmed: boolean;
  isDeveloper: boolean;
};

export default function myAccount() {
  const [isLoading, setLoading] = useState(true);
  const [cookies] = useCookies(['token']);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const [prevName, setPrevName] = useState('')
  const [prevLastName, setPrevLastName] = useState('')
  const [prevEmail, setPrevEmail] = useState('')
  const [prevBusinessName, setPrevBusinessName] = useState('')
  const [prevBusinessCity, setPrevBusinessCity] = useState('')
  const [prevBusinessCountry, setPrevBusinessCountry] = useState('')
  const [prevBusinessZipCode, setPrevBusinessZipCode] = useState('')
  const [prevBusinessContact, setPrevBusinessContact] = useState('')
  const [prevBusinessAdress, setPrevBusinessAdress] = useState('')
  const [prevBusinessDescription, setPrevBusinessDescription] = useState('')
  const [prevLogo, setPrevLogo] = useState('');
  let businessName = prevBusinessName
  let name = prevName
  let lastName = prevLastName
  let businessAdress = prevBusinessAdress
  let businessCity = prevBusinessCity
  let businessCountry = prevBusinessCountry
  let businessZipCode = prevBusinessZipCode
  let businessContact = prevBusinessContact
  let businessDescription = prevBusinessDescription
  let businessLogo = prevLogo;
  const [edit, setEdit] = useState(false)

  const getUserInfo = async () => {
    const qr = gql(`
    query {
      profile {
        status
        userMessage
        devMessage
        user {
        email
        password
        name
        lastName
        businessRole
        businessContact
        businessName
        businessAdress
        businessZipCode
        businessCity
        businessCountry
        businessDescription
        business_logo
        profil_picture
        isConfirmed
        isDeveloper
        }
      }
    }
  `);
    const data = await client.query({
      query: qr,
      context: {
        headers: {
          authorization: 'Bearer ' + cookies.token,
        },
      },
    });
    const UserData = data.data.profile.user;
    setPrevName(UserData.name)
    setPrevLastName(UserData.lastName)
    setPrevEmail(UserData.email)
    setPrevBusinessName(UserData.businessName)
    setPrevBusinessCity(UserData.businessCity)
    setPrevBusinessCountry(UserData.businessCountry)
    setPrevBusinessZipCode(UserData.businessZipCode)
    setPrevBusinessContact(UserData.businessContact)
    setPrevBusinessAdress(UserData.businessAdress)
    setPrevBusinessDescription(UserData.businessDescription)
    setPrevLogo(UserData.business_logo)
    setLoading(false);
  };

  const setBusinessLogo = (value: string) => {
    businessLogo = value;
  };
  useEffect(() => {
    if (user && user.isConfirmed) {
      getUserInfo()
    }
  }, [user])
  const imageInput = <ImageInput prevLogo={prevLogo} title={'modifier le logo'} edit={edit} setImageString={setBusinessLogo} imageString={businessLogo} id='1' />;
  const queryTxt = `
  query {
    profile {
      status
      userMessage
      devMessage
      user {
        email
        password
        name
        lastName
        businessRole
        businessContact
        businessName
        businessAdress
        businessZipCode
        businessCity
        businessCountry
        businessDescription
        business_logo
        profil_picture
        isConfirmed
        isDeveloper
      }
    }
  }
`;
  const queryMultiple = () => {
    const res2 = useQuery(
      gql(queryTxt),
      {
        client,
        context: {
          headers: {
            authorization: 'Bearer ' + cookies.token,
          },
        },
      }
    );
    return [res2];
  };

  const res = queryMultiple();

  useEffect(() => {
    res.map((elem) => {
      if (!elem.loading && !elem.error && elem.data) {
        if (elem.data.profile) setUser(elem.data.profile.user);
      }
    });
  }, [res]);


  const savePartnerInfo = async () => {
    const userQuery = `
    query  {
      update_connected_user(
        businessContact: "${businessContact}",
        name: "${name}",
        lastName: "${lastName}",
        businessName: "${businessName}",
        businessAdress: "${businessAdress}",
        businessZipCode: "${businessZipCode}",
        businessCity: "${businessCity}",
        businessCountry: "${businessCountry}",
        businessDescription: "${businessDescription}",
        business_logo: "${businessLogo}",
      ) {
        devMessage
        userMessage
        content {
          access_token
          email
        }
      }
    }`;
    const qr = gql(userQuery);
    const data = await client.query({
      query: qr,
      context: {
        headers: {
          authorization: 'Bearer ' + cookies.token,
        },
      },
    });
    window.location.reload();
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

  const LongInputText = styled(NameInputText)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '88%',
    },
    [theme.breakpoints.down('md')]: {
      width: '60vw',
    }
  }));

  const PasswordButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '72%',
    },
    [theme.breakpoints.down('md')]: {
      width: '60vw',

    },
    marginTop: "15px",
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.palette.green.main,
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    color: theme.palette.white.main,
    borderRadius: '5px'
  }))

  const EditButton = styled(PasswordButton)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '20%',
    },
    [theme.breakpoints.down('md')]: {
      width: '60vw',
    },
  }))

  return (
    user && user.isConfirmed ? (

      <React.Fragment>
        <Loading open={isLoading}/>
        <BlurryBackground />
        <Center width={'100vw'} height={'100vh'}>
          <ResponsiveCard variant="outlined" color="white">
            <CardContent sx={{ width: '100%' }}>
              <Box sx={{ marginBottom: '35px', display: 'flex' }}>
                <Box width='100%' alignItems={'center'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                  <Typography variant="h1" color="gray.main" align="left">
                    Mon Compte
                  </Typography>
                  <EditButton onClick={() => { !edit ? setEdit(!edit) : savePartnerInfo() }}> {!edit ? "Editer mes informations" : 'Valider les modifications'}</EditButton>
                </Box>
              </Box>
              {/* premiere ligne */}
              <Grid container justifyContent="space-between" spacing={3} width="100%" >
                {/* premiere colonne */}
                <Grid item xs={12} lg={6}>
                  <Typography variant="h2" color="gray.main" align="left">
                    Mon Entreprise
                  </Typography>
                  <Divider sx={{ border: '1px solid', borderColor: 'gray.main', marginBottom: '30px' }} />
                  <Grid container >
                    <Grid item lg={6} display={'flex'} flexDirection={"column"} alignItems={"center"} marginBottom={'20px'}>
                      <Box className={'column-element'}>{imageInput}</Box>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Titre de l'entreprise
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="businessName" placeholder={prevBusinessName} variant="outlined" onChange={(e: React.ChangeEvent) => { businessName = (e.target as HTMLInputElement).value }} />
                      <Typography color="gray.main" align="left">
                        Description
                      </Typography>
                      <NameInputText disabled={!edit} multiline rows={4} id="businessDescription" variant="outlined" placeholder={prevBusinessDescription} onChange={(e: React.ChangeEvent) => { businessDescription = (e.target as HTMLInputElement).value }} />
                    </Grid>
                  </Grid>
                </Grid>
                {/* seconde colonne */}
                <Grid item lg={6}>
                  <Typography variant="h2" color="gray.main" align="left">
                    Mes informations personnelles
                  </Typography>
                  <Divider sx={{ border: '1px solid', borderColor: 'gray.main', marginBottom: '30px' }} />
                  <Grid container width={'100%'}>
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Nom
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="lastname" placeholder={prevLastName} variant="outlined" onChange={(e: React.ChangeEvent) => { lastName = (e.target as HTMLInputElement).value }} />
                    </Grid>
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Prenom
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="name" placeholder={prevName} variant="outlined" onChange={(e: React.ChangeEvent) => { name = (e.target as HTMLInputElement).value }} />
                    </Grid>
                    <Grid item lg={12} width={'100%'}>
                      <Typography color="gray.main" align="left">
                        Adresse Email
                      </Typography>
                      <LongInputText disabled InputProps={{ style: { height: '42px' } }} id="email" placeholder={prevEmail} variant="outlined" />
                    </Grid>
                    <Grid item lg={12} width={'100%'}>
                      <Typography color="gray.main" align="left">
                        Telephone
                      </Typography>
                      <LongInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="phone" placeholder={prevBusinessContact} variant="outlined" onChange={(e: React.ChangeEvent) => { businessContact = (e.target as HTMLInputElement).value }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* deuxieme ligne */}
              <Grid container justifyContent="space-between" spacing={3} width="100%" >
                {/* premiere colonne */}
                <Grid item lg={6}>
                  <Typography variant="h2" color="gray.main" align="left">
                    Adresse
                  </Typography>
                  <Divider sx={{ border: '1px solid', borderColor: 'gray.main', marginBottom: '30px' }} />
                  <Grid container >
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Addresse de l'entreprise
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="businessName" placeholder={prevBusinessAdress} variant="outlined" onChange={(e: React.ChangeEvent) => { businessAdress = (e.target as HTMLInputElement).value }} />
                    </Grid>
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Code postal
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="businessZipCode" placeholder={prevBusinessZipCode} variant="outlined" onChange={(e: React.ChangeEvent) => { businessZipCode = (e.target as HTMLInputElement).value }} />
                    </Grid>
                  </Grid>
                  <Grid container >
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Ville
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="businessName" placeholder={prevBusinessCity} variant="outlined" onChange={(e: React.ChangeEvent) => { businessCity = (e.target as HTMLInputElement).value }} />
                    </Grid>
                    <Grid item lg={6}>
                      <Typography color="gray.main" align="left">
                        Pays
                      </Typography>
                      <NameInputText disabled={!edit} InputProps={{ style: { height: '42px' } }} id="businessName" placeholder={prevBusinessCountry} variant="outlined" onChange={(e: React.ChangeEvent) => { businessCountry = (e.target as HTMLInputElement).value }} />
                    </Grid>
                  </Grid>
                </Grid>
                {/* seconde colonne */}
                <Grid item lg={6}>
                  <Typography variant="h2" color="gray.main" align="left">
                    Mot de Passe
                  </Typography>
                  <Divider sx={{ border: '1px solid', borderColor: 'gray.main', marginBottom: '30px' }} />
                  <Grid container >
                    <Grid item lg={12}>
                      <Typography color="gray.main" align="left">
                        Cliquez sur le bouton ci-dessous pour changer votre mot de passe, nous vous enverrons un email avec la procédure à suivre!
                      </Typography>
                      <PasswordButton onClick={() => navigate("/forgotPasswordEmail")}>Changer mon mot de passe</PasswordButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </ResponsiveCard>
        </Center>
      </React.Fragment >) : (<Forbidden />)
  )
}
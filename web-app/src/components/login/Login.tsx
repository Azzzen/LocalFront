import client from '../../graphqlApollo';
import { gql } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Forbidden from '../forbidden/Forbidden';
import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, InputAdornment, Link, TextField, Typography, styled } from '@mui/material';
import { toast } from 'react-toastify';
import Loading from '../loading/Loading';
import { Center } from "../../informationPage/Information";
import BlurryBackground from '../blurryBackground/BlurryBackground';
import { showToast } from './../tools/toast';

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['token', 'theme']);

  let email = '';
  let password = '';
  const navigate = useNavigate();


  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const qr = gql(`
  query {
    login(email: "${email}", password: "${password}") {
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
    e.preventDefault();
    setLoading(true);
    const data = await client.query({
      query: qr,
    })
    if (data.data.login.status != 200) {
      showToast('error', data.data.login.userMessage);
      setLoading(false);
    }
    if (data.data.login.content != null) {
      setCookie('token', data.data.login.content.access_token, { path: '/' });
      window.location.replace('/mon-compte');
    }
  };

  const CenteredCardContainer = styled(Box)({
    height: ' 30vw',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  });
  const ConnectionButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.palette.gray.main,
    color: theme.palette.white.light,
    marginBottom: "3vh"
  }));

  const RegisterButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.palette.beige.main,
    color: theme.palette.gray.main,
  }));

  const ResponsiveCard = styled(Card)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '30vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: '20vw',
    },
    display: 'flex',
    Height: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: theme.palette.green.main,
  }));

  const Input = styled(TextField)(({ theme }) => ({
    height: "42px",
    borderRadius: '10px',
    marginBottom: '20px',
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgb(255,255,255, 0.3)'
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'transparent',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'transparent',
    },

  }));

  return (
    <React.Fragment>
    <Loading open={isLoading}/>
      <BlurryBackground />
      <Center width={'100vw'} height={'100vh'}>
        <CenteredCardContainer>
          <ResponsiveCard >
            <CardContent>
              <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Typography sx={{ fontSize: 32, fontWeight: 'bold' }} color="white.main" >
                  Espace
                </Typography>
                <Typography sx={{ fontSize: 32, fontWeight: 'bold', marginBottom: '8vh' }} color="white.main" gutterBottom>
                  Partenaires
                </Typography>
              </Box>
              <Box display="flex" flexDirection='column' alignItems="center">
                <Input
                  style={{ height: '42px' }}
                  InputProps={{ style: { height: '42px' } }}
                  id="login"
                  label="Identifiant"
                  variant='filled'

                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { email = e.target.value }}
                />
                <Input
                  style={{ height: '42px' }}
                  InputProps={{ style: { height: '42px' } }}
                  id="password" label="Mot de passe"
                  variant='filled'
                  type='password'

                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { password = e.target.value }}
                />
                <ConnectionButton variant="contained" onClick={handleSubmit}>Connexion</ConnectionButton>
                <Link style={{ marginBottom: "3vh" }} color="white.light" variant="h3" href="/forgotPasswordEmail"> Mot de passe oublie ?</Link>
                <RegisterButton onClick={() => { navigate('/register') }} variant="contained">Creer un compte</RegisterButton>
              </Box>
            </CardContent>
          </ResponsiveCard>
        </CenteredCardContainer>
      </Center>
    </React.Fragment>
  )
}

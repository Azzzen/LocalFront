import React, { useState } from 'react';
import { gql } from '@apollo/client';
import client from '../../graphqlApollo';
import BlurryBackground from '../blurryBackground/BlurryBackground';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { GreyButton } from '../../components/buttons/buttons';
import { useParams } from 'react-router-dom';
import { validatePassword } from './../tools/validatePassword';
import { showToast } from '../tools/toast';

const ChangePassword = () => {
  const { emails } = useParams();
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // i keep it just in case, it wasn't used for some reason
  // const isValidPassword = (password: string): boolean => {
  //   const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  //   return passwordRegex.test(password);
  // };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {

      if (validatePassword(password) === false) {
        return;
      }

      const { data } = await client.query({
        query: gql`
              query ResetPassword($emails: String!, $password: String!, $confPassword: String!) {
                forget_password(
                  resetPasswordReference: $emails
                  password: $password
                  confirm_password: $confPassword
                ) {
                  status
                  devMessage
                }
              }
            `,
        variables: { emails, password, confPassword },
      });
      if (data.forget_password.status == 200) {
        setSubmitted(true);
      } else if (data.forget_password.status == 401) {
        showToast('error', data.forget_password.content.msg);
      }
      else {
        throw "bad ajax request";
      }
    } catch (error) {
      console.error('Error: AJAX request', error);
    }
  };

  const containerStyle = {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
  };

  const centerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  };

  const paperStyle = {
    backgroundColor: 'white',
    width: '600px',
    height: '360px',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '20px',
  };

  return (
    <Box sx={containerStyle}>
      <BlurryBackground />
      <Box sx={centerContainerStyle}>
        <Typography sx={{ padding: '20px', fontWeight: 'bold' }} variant={'h1'} color={'green.main'}>Réinitialisation du mot de passe</Typography>
        <Paper elevation={3} sx={paperStyle}>
          {submitted ? (
            <Typography sx={{ padding: '30px' }} variant={'h3'}>
              Le mot de passe a été réinitialisé avec succès! <br></br>
              <br></br>
              Heureux de vous revoir!
            </Typography>
          ) : (
            <>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '20px' }}>
                <Typography sx={{ marginBottom: '30px' }} variant={'h3'}>Veuillez entrer votre nouveau mot de passe
                </Typography>
                <TextField
                  label="Nouveau mot de passe"
                  variant="outlined"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: '80%', marginBottom: '20px' }}
                />
                <TextField
                  label="Confirmer le mot de passe"
                  variant="outlined"
                  value={confPassword}
                  type="password"
                  onChange={(e) => setConfPassword(e.target.value)}
                  sx={{ width: '80%', marginBottom: '40px' }}
                />
                <Button variant="contained" size="small" sx={{ ...GreyButton(), width: '150px', height: '50px' }} onClick={handleSubmit}>
                  <Typography color={'white.light'}>continuer</Typography>
                </Button>
              </Box>
            </>
          )
          }
        </Paper >
      </Box >
    </Box >
  );
};

export default ChangePassword;

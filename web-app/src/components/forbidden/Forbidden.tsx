import React from 'react';
import greenLogo from '../../assets/green_logo.svg';
import basket from '../../assets/laundry_basket.svg';
import {Box, CardContent, Grid, Link, Stack, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import {Center} from "../../informationPage/Information";
import theme from "../../theme";

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    maxHeight: 620,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 1400,
    minWidth: 1000,
  },
}));

export default function Forbidden() {
  return (
    <React.Fragment>
      <div className="background"></div>
      <div className="wave"></div>
      <div className="wave-2"></div>

      <Center width={'100vw'} height={'100vh'}>
        <Stack rowGap={'5vh'}>
          <CardContent>
            <Box display={'flex'} justifyContent={'center'}>
              <a href="/">
                <img src={greenLogo} alt="LOGO" />
              </a>
            </Box>
            <Stack alignItems={'center'} rowGap={'2vh'}>
              <Typography variant='h3'>Vous vous êtes perdu ?</Typography>
                <Box display={'flex'} justifyContent={'center'}>
                  <img src={basket} alt="LOGO" style={{ width: '400px' }} />
                </Box>
                <Stack direction={'row'} marginTop={'1vh'} columnGap={'2vw'}>
                    <Link variant="h2" color={theme.palette.green.main} fontSize={'20px'} href={'/register'}>S'inscrire</Link>
                    <Link variant="h2" color={theme.palette.green.main} fontSize={'20px'} href={'/login'}>Se connecter</Link>
                    <Link variant="h2" color={theme.palette.green.main} fontSize={'20px'} href={'/forgotPasswordEmail'}>Réinitialiser son mot de passe</Link>
                </Stack>
            </Stack>
          </CardContent>
        </Stack>
      </Center>
    </React.Fragment >
  );
}
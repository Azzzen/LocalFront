import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Ball from '../assets/blurred-green-ball.svg';
import { useQuery } from '@apollo/client';
import client from '../graphqlApollo';
import { gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar";
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  greenBall1: {
    position: 'absolute',
    left: '-300px',
    animationName: '$pulseBounceMove',
    animationDuration: '15s',
    animationTimingFunction: 'ease-in-out, linear',
    animationIterationCount: 'infinite',
  },
  '@keyframes pulseBounceMove': {
    '0%': {
      transform: 'scale(1) translateY(0) translateX(0)',
    },
    '25%': {
      transform: 'scale(1.1) translateY(-100px) translateX(0)',
    },
    '50%': {
      transform: 'scale(1) translateY(0) translateX(100px)',
    },
    '75%': {
      transform: 'scale(1.1) translateY(-100px) translateX(0)',
    },
    '100%': {
      transform: 'scale(1) translateY(0) translateX(0)',
    },
  },
  greenBall2: {
    position: 'absolute',
    left: '1300px',
    top: '200px',
    animationName: '$pulseBounceMove',
    animationDuration: '20s',
    animationTimingFunction: 'ease-in-out, linear',
    animationIterationCount: 'infinite',
  },
}));

function DupeDevConf() {
  const classes = useStyles();
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('email');

  const { loading, error, data } = useQuery(
    gql`
      query confirmDev($token: String!) {
        confirmDev(token: $token) {
          status
          devMessage
          userMessage
          content {
            email
            access_token
          }
        }
      }
    `,
    {
      variables: { token },
      client,
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const navigateInformationPage = () => {
    navigate('/information');
  };

  const TextContainer = styled(Box)({
    position: 'relative',
    marginTop: '100px',
    alignItems: 'center',
  });

  const BodyText = styled(Typography)({
    marginTop: '40px',
    color: '#8C8C8C',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '30px',
    fontWeight: 600,
    lineHeight: 'normal',
  });

  const ButtonAccount = styled(Button)({
    marginTop: '40px',
    position: 'absolute',
    left: '300px',
    backgroundColor: '#99AF8C',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '410px',
    height: '100px',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '30px',
    fontWeight: 600,
    lineHeight: 'normal',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  });

  const Title = styled(Typography)({
    marginTop: '-300px',
    marginBottom: '0px',
    color: '#8C8C8C',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '80px',
    fontWeight: 700,
    lineHeight: 'normal',
  });

  return (
    <Fragment>
      <Navbar />
      <img className={classes.greenBall1} src={Ball} alt="none" />
      <img className={classes.greenBall2} src={Ball} alt="none" />
      <TextContainer >
        <Title>Bienvenue parmi nous,</Title>
        <BodyText>
          Localshirt vous souhaite la bienvenue en tant que developpeur !
        </BodyText>
        <ButtonAccount>Commencez l'aventure!</ButtonAccount>
      </TextContainer>
    </Fragment>
  );
}

export default DupeDevConf

import { useState } from 'react';
import BlurryBackground from '../blurryBackground/BlurryBackground';
import { gql } from '@apollo/client';
import client from '../../graphqlApollo';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { GreyButton } from '../../components/buttons/buttons';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const { data } = await client.query({
                query: gql`
                query SendEmailToken($emails: String!) {
                    send_email_password(email: $emails) {
                        status
                        devMessage
                    }
                }
            `,
                variables: { emails: email },
            });
            if (data.send_email_password.status === 200) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('log', error);
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
                            Un email vous a été envoyé! <br></br>
                            <br></br>
                            Veuillez suivre les instructions présentes dans cet email afin
                            de réinitialiser votre mot de passe.
                        </Typography>
                    ) : (
                        <>
                            <Typography sx={{ padding: '30px' }} variant={'h3'}>Veuillez nous fournir l’adresse mail associée à votre compte
                                afin de vous envoyer un mail de réinitialisation
                                de mot de passe
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ width: '80%', marginBottom: '20px' }}
                                />
                                <Button variant="contained" size="small" sx={{ ...GreyButton(), width: '150px', height: '50px' }} onClick={handleSubmit} >
                                    <Typography color={'white.light'}>continuer</Typography>
                                </Button>
                            </Box>
                        </>
                    )}
                </Paper>
            </Box>
        </Box>
    );
};

export default ForgotPassword;

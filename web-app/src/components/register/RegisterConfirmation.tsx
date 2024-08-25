import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import BlurryBackground from '../blurryBackground/BlurryBackground';
import { Center } from '../../informationPage/Information';

function RegisterConfirmation() {
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

    const Title = styled(Typography)({
        marginBottom: '0px',
        color: '#8C8C8C',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '80px',
        fontWeight: 700,
        lineHeight: 'normal',
    });

    return (
        <Center width={'100vw'} height={'100vh'}>
            <BlurryBackground />
            <TextContainer >
                <Box sx={{ marginTop: "-200px" }}>
                    <Title>Une dernière étape</Title>
                    <BodyText>
                        Veuillez cliquer sur le lien de validation recu par mail !
                    </BodyText>
                </Box>
            </TextContainer>
        </Center>
    );
}

export default RegisterConfirmation

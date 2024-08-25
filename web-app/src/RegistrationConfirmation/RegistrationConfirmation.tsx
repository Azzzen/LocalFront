import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { gql } from '@apollo/client';
import { Button, Typography, Box} from '@material-ui/core';
import { styled } from '@mui/material/styles';

import client from '../graphqlApollo';
import BlurryBackground from '../components/blurryBackground/BlurryBackground';
import { Center } from '../informationPage/Information';

function RegistrationConfirmation() {
  const navigate = useNavigate();

  let email = ''
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const { error, data } = useQuery(
    gql`
      query ConfirmUser($token: String!) {
        confirm(token: $token) {
            status
            userMessage
            devMessage
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

  if (!error && data?.confirm?.content?.email)
    email = data?.confirm?.content?.email

  const navigateInformationPage = () => {
    navigate('/information');
  };

  return (
    <Center>
      <BlurryBackground />
      <TextContainerConfBox>
        <TitleConfTypography>
          Bienvenue parmi nous,
        </TitleConfTypography>
        <UsernameTypography>
          {email}
        </UsernameTypography>
        <BodyTextConfTypography>
          Localshirt vous remercie pour l'intérêt que vous portez à notre planète,<br></br> et vous souhaite un excellent shopping!
        </BodyTextConfTypography>
        <ButtonAccount variant="contained" onClick={navigateInformationPage}>
          Commencez l'aventure!
        </ButtonAccount>
      </TextContainerConfBox>
    </Center>
  );
}

const TitleConfTypography = styled(Typography)(({ theme }) => ({
  marginTop: '100px',
  marginBottom: '0px',
  color: theme.palette.gray.main,
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily,
  fontSize: '80px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}));

export const TextContainerConfBox = styled(Box)(() => ({
  position: 'relative',
  marginTop: '100px',
  alignItems: 'center',
}));

export const UsernameTypography = styled(Typography)(({ theme }) => ({
  marginTop: '0px',
  color: theme.palette.green.main,
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily,
  fontSize: '40px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}));

export const BodyTextConfTypography = styled(Typography)(({ theme }) => ({
  marginTop: '40px',
  color: theme.palette.gray2.main,
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily,
  fontSize: '30px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}));

export const ButtonAccount = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  position: 'absolute',
  left: '300px',
  backgroundColor: theme.palette.green.main,
  color: theme.palette.white.main,
  border: 'none',
  borderRadius: '10px',
  padding: '10px 20px',
  cursor: 'pointer',
  width: '410px',
  height: '100px',
  textAlign: 'center',
  fontFamily: theme.typography.fontFamily,
  fontSize: '27px',
  fontWeight: 600,
  lineHeight: 'normal',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#748E6D',
  },
}));


export default RegistrationConfirmation;

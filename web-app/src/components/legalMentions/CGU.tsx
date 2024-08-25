import blurredBall from '../../assets/blurred-green-ball.svg';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Typography, Stack } from '@mui/material';
import { Center } from '../../informationPage/Information';
import BlurryBackground from '../blurryBackground/BlurryBackground';

export const CenteredCardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
});
export const ResponsiveCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
  display: 'flex',
  maxHeight: '80vh',
  overflowY: 'auto',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
}));
const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    maxHeight: 620,

  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 1400,
  },
}));
export default function CGU() {
  return (
    <Center width={'100vw'} height={'100vh'}>
      <BlurryBackground />
      <CenteredCardContainer>
        <ResponsiveCard variant="outlined">
          <CardContent>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Conditions générales d'utilisation
            </Typography>
            <Typography variant="h5">
              Les présentes conditions générales d'utilisation (les "CGU") régissent l'utilisation
              du site internet Localshirt (le "Site") et les services proposés par Localshirt
              (ci-après dénommé "nous", "notre" ou "nos"). En accédant au Site et en utilisant nos
              services, vous acceptez les présentes CGU dans leur intégralité. Si vous n'acceptez
              pas ces CGU, veuillez cesser d'utiliser le Site et nos services.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Description du service:
            </Typography>
            <Typography variant='h5' >
              Localshirt est un site internet qui compare l'impact environnemental de vêtements
              provenant de différentes marques. Le Site vise à fournir des informations objectives
              sur l'empreinte écologique des vêtements afin d'aider les utilisateurs à prendre des
              décisions d'achat plus responsables. Nous redirigeons également les utilisateurs vers
              des marques partenaires proposant des vêtements avec le meilleur impact écologique.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Utilisation du site:
            </Typography>
            <Typography variant="h5">
              a. Droits de propriété : Le Site et son contenu (textes, images, logos, vidéos, etc.)
              sont protégés par des droits de propriété intellectuelle. Sauf autorisation expresse,
              vous vous engagez à ne pas reproduire, modifier, distribuer ou exploiter de quelque
              manière que ce soit le contenu du Site.
            </Typography>
            <Typography variant="h5">
              b. Licence limitée : En utilisant le Site, nous vous accordons une licence limitée,
              non exclusive et révocable pour accéder au Site et utiliser nos services, conformément
              aux présentes CGU. Cette licence ne vous confère aucun droit de propriété sur le Site
              ou son contenu.
            </Typography>
            <Typography variant="h5">
              c. Contenu généré par les utilisateurs : En utilisant le Site, vous pouvez être amené
              à publier du contenu généré par les utilisateurs. Vous reconnaissez et acceptez que
              vous êtes seul responsable du contenu que vous publiez et que vous vous engagez à ne
              pas publier de contenu illégal, diffamatoire, obscène ou offensant.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Limitation de responsabilités:
            </Typography>
            <Typography variant="h5">
              a. Informations fournies : Nous nous efforçons de fournir des informations précises et
              à jour sur le Site. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité
              ou la fiabilité de ces informations. Vous reconnaissez que l'utilisation des
              informations fournies sur le Site se fait à vos propres risques.
            </Typography>
            <Typography variant="h5">
              b. Liens externes : Le Site peut contenir des liens vers des sites internet tiers.
              Nous déclinons toute responsabilité quant au contenu, à la disponibilité ou à la
              politique de confidentialité de ces sites tiers. L'activation de ces liens se fait
              sous votre responsabilité.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Protection des données personnelles :
            </Typography>
            <Typography variant="h5">
              La collecte et le traitement des données personnelles des utilisateurs sont régis par
              notre politique de confidentialité. En utilisant le Site, vous acceptez notre
              politique de confidentialité et consentez à la collecte, à l'utilisation et au
              traitement de vos données personnelles conformément à celle-ci.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Modification des CGU:
            </Typography>
            <Typography variant="h5">
              Nous nous réservons le droit de modifier les présentes CGU à tout moment, en fonction
              de l'évolution du Site ou de la législation applicable. Les modifications prendront
              effet dès leur publication sur le Site. Il est de votre responsabilité de consulter
              régulièrement les CGU pour vous tenir informé des éventuelles modifications.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Droit applicable et juridiction compétente:
            </Typography>
            <Typography variant="h5">
              Les présentes CGU sont régies et interprétées conformément aux lois en vigueur. Tout
              litige relatif aux CGU ou à l'utilisation du Site sera soumis à la juridiction
              exclusive des tribunaux compétents.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Contact:
            </Typography>
            <Typography variant="h5">
              Si vous avez des questions, des commentaires ou des réclamations concernant les
              présentes CGU, veuillez nous contacter à l'adresse suivante :
              localshirt.eip@gmail.com.
            </Typography>
            <Typography variant="h5">Dernière mise à jour des CGU : 06/07/2023.</Typography>
          </CardContent>
        </ResponsiveCard>
      </CenteredCardContainer>
    </Center >
  );
}

import blurredBall from '../../assets/blurred-green-ball.svg';
import { CardContent, Stack, Typography } from '@mui/material';
import { CenteredCardContainer, ResponsiveCard } from './CGU';
import { Center } from '../../informationPage/Information';
import BlurryBackground from '../blurryBackground/BlurryBackground';

export default function LegalMentions() {
  return (
    <Center width={'100vw'} height={'100vh'}>
      <BlurryBackground />
      <CenteredCardContainer>
        <ResponsiveCard>
          <CardContent>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Mentions légales
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Editeur du site
            </Typography>
            <Typography variant="h5">Nom de l'entreprise: LocalShirt</Typography>
            <Typography variant="h5">Forme Juridique: TBD</Typography>
            <Typography variant="h5">
              Siège Social: 14-16 Rue Voltaire, 94270 Le Kremlin-Bicêtre, France
            </Typography>
            <Typography variant="h5">Numero de téléphone: 06 03 69 00 91</Typography>
            <Typography variant="h5">adresse E-mail: localshirt.eip@gmail.com</Typography>
            <Typography variant="h5">Numero d'identification: TBD</Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Directeur de la publication
            </Typography>
            <Typography variant="h5">Nom du directeur: Timothée de Boynes</Typography>
            <Typography variant="h5">
              Adresse e-mail du directeur: timothee.de-boynes@epitech.eu
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Hébergeur du site
            </Typography>
            <Typography variant="h5">Nom de l'hébergeur: Netlify, Inc</Typography>
            <Typography variant="h5">
              Adresse: 44 Montgomery Street, Suite 300, San Francisco, California 94104
            </Typography>
            <Typography variant="h5">Adresse e-mail: support@netlify.com</Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Propriété intellectuelle
            </Typography>
            <Typography variant="h5">
              Le site internet, son contenu et tous les éléments qui le composent (textes, images,
              logos, vidéos, etc.) sont la propriété exclusive de LocalShirt ou sont utilisés avec
              l'autorisation des titulaires des droits. Toute reproduction, représentation,
              modification, diffusion ou exploitation totale ou partielle, quel que soit le support
              utilisé, est interdite sans l'autorisation préalable écrite de LocalShirt
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Liens vers des sites tiers :{' '}
            </Typography>
            <Typography variant="h5">
              Le site internet peut contenir des liens hypertextes redirigeant vers des sites
              internet tiers. LocalShirt n'exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu, leur disponibilité ou leur politique de
              confidentialité. L'activation de ces liens se fait sous la responsabilité de
              l'utilisateur.
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Collecte et traitement de données personnelles
            </Typography>
            <Typography variant="h5">
              Le site internet peut collecter et traiter certaines données personnelles des
              utilisateurs. Pour plus d'informations sur la collecte, l'utilisation et la protection
              de vos données personnelles, veuillez consulter notre politique de confidentialité.
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Cookies
            </Typography>
            <Typography variant="h5">
              Le site internet utilise des cookies pour améliorer l'expérience de navigation des
              utilisateurs. Les cookies sont de petits fichiers textes stockés sur l'appareil de
              l'utilisateur. En utilisant le site internet, l'utilisateur consent à l'utilisation de
              cookies conformément à notre politique de cookies.
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Responsabilité{' '}
            </Typography>
            <Typography variant="h5">
              LocalShirt s'efforce de fournir des informations exactes et à jour sur le site
              internet, mais ne peut garantir leur exhaustivité ou leur exactitude. LocalShirt
              décline toute responsabilité en cas d'erreurs ou d'omissions concernant les
              informations disponibles sur le site.
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Modification des mentions légales
            </Typography>
            <Typography variant="h5">
              LocalShirt se réserve le droit de modifier les présentes mentions légales à tout
              moment, en fonction des évolutions du site internet ou de la législation applicable.
              Les modifications prendront effet dès leur publication sur le site internet.
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Contact :
            </Typography>
            <Typography variant="h5">
              Pour toute question ou demande concernant les mentions légales du site, veuillez nous
              contacter à l'adresse e-mail suivante : localshirt.eip@gmail.com.
            </Typography>
            <Typography variant="h5">
              Dernière mise à jour des mentions légales : 06/07/2023.
            </Typography>
          </CardContent>
        </ResponsiveCard>
      </CenteredCardContainer>
    </Center >
  );
}

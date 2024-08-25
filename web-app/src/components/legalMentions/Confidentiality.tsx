import '../../localshirt.css';
import './button.css';
import blurredBall from '../../assets/blurred-green-ball.svg';
import { CardContent, Stack, Typography } from '@mui/material';
import { CenteredCardContainer, ResponsiveCard } from './CGU';
import BlurryBackground from '../blurryBackground/BlurryBackground';
import { Center } from '../../informationPage/Information';
export default function CGU() {
  return (
    <Center width={'100vw'} height={'100vh'}>
      <BlurryBackground />
      <CenteredCardContainer>
        <ResponsiveCard variant="outlined">
          <CardContent>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Politique de confidentialité{' '}
            </Typography>
            <Typography variant="h5">
              La présente politique de confidentialité décrit comment Localshirt (ci-après dénommé
              "nous", "notre" ou "nos") collecte, utilise et protège les données personnelles des
              utilisateurs lorsqu'ils accèdent au site internet Localshirt (le "Site") et utilisent
              nos services. Nous attachons une grande importance à la protection de la vie privée de
              nos utilisateurs et nous nous engageons à respecter les dispositions légales en
              vigueur en matière de protection des données personnelles.
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Collecte des données personnelles :
            </Typography>
            <Typography variant="h5">
              a. Données fournies volontairement : Lors de votre utilisation du Site, il se peut que
              nous vous demandions de fournir certaines données personnelles telles que votre nom,
              votre adresse e-mail, votre adresse postale, etc. Ces données sont collectées lorsque
              vous vous inscrivez sur le Site, lorsque vous utilisez nos services ou lorsque vous
              nous contactez.
            </Typography>
            <Typography variant="h5">
              b. Données collectées automatiquement : Nous collectons automatiquement certaines
              informations lorsque vous accédez au Site, telles que votre adresse IP, votre type de
              navigateur, votre système d'exploitation, etc. Ces informations sont collectées à
              l'aide de cookies et de technologies similaires. Veuillez consulter notre politique de
              cookies pour plus d'informations sur l'utilisation des cookies.
            </Typography>
            <Typography variant="h5">Numero de téléphone: 06 03 69 00 91</Typography>
            <Typography variant="h5">adresse E-mail: localshirt.eip@gmail.com</Typography>
            <Typography variant="h5">Numero d'identification: TBD</Typography>
            <Typography variant="h5">Nom du directeur: Timothée de Boynes</Typography>
            <Typography variant="h5">
              Adresse e-mail du directeur: timothee.de-boynes@epitech.eu
            </Typography>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Utilisation des données personnelles :
            </Typography>
            <Typography variant="h5">
              Nous utilisons les données personnelles collectées dans le but de :
              <ul>
                <li>Fournir nos services et répondre à vos demandes.</li>
                <li>Améliorer et personnaliser votre expérience sur le Site.</li>
                <li>Analyser l'utilisation du Site et mesurer l'efficacité de nos services.</li>
                <li>
                  Vous informer sur les nouvelles fonctionnalités, les offres spéciales ou les
                  événements liés à Localshirt, sous réserve de votre consentement préalable.
                </li>
                <li>
                  Communiquer avec vous concernant des questions relatives à votre utilisation du
                  Site ou à nos services.
                </li>
              </ul>
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Partage des données personnelles :
            </Typography>
            <br />
            <Typography variant="h5">
              Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas
              suivants :
              <ul>
                <li>Lorsque vous nous donnez votre consentement préalable.</li>
                <li>
                  Lorsque cela est nécessaire pour fournir nos services ou répondre à vos demandes.
                </li>
                <li>Lorsque cela est requis par la loi ou dans le cadre d'une procédure légale.</li>
                <li>
                  Lorsque cela est nécessaire pour protéger nos droits, notre propriété ou notre
                  sécurité, ainsi que ceux de nos utilisateurs ou du public.
                </li>
              </ul>
            </Typography>
            {/* </Typography> */}
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Sécurité des données :
            </Typography>
            <br />
            <Typography variant="h5">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout accès non autorisé,
              toute divulgation, toute altération ou toute destruction. Cependant, veuillez noter
              qu'aucune méthode de transmission ou de stockage électronique n'est totalement
              sécurisée, et nous ne pouvons garantir la sécurité absolue de vos données.
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Durée de conservation des données :
            </Typography>
            <Typography variant="h5">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre
              les finalités pour lesquelles elles ont été collectées, sauf si une période de
              conservation plus longue est requise ou autorisée par la loi.
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Droits des utilisateurs :
            </Typography>
            <Typography variant="h5">
              Vous disposez de certains droits concernant vos données personnelles, notamment le
              droit d'accéder à vos données, de les rectifier, de les supprimer, de restreindre leur
              traitement, de vous opposer à leur traitement et le droit à la portabilitéde vos
              données. Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail indiquée
              dans la section "Contact" ci-dessous. Veuillez noter que nous pouvons vous demander de
              fournir des informations supplémentaires afin de vérifier votre identité avant de
              répondre à votre demande.
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Cookies :
            </Typography>
            <Typography variant="h5">
              Le Site utilise des cookies pour améliorer votre expérience de navigation. Les cookies
              sont de petits fichiers texte stockés sur votre appareil lorsque vous accédez à notre
              Site. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre
              politique de cookies.
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Liens vers des sites tiers :
            </Typography>
            <Typography variant="h5">
              Le Site peut contenir des liens vers des sites internet tiers. Nous n'avons aucun
              contrôle sur ces sites et déclinons toute responsabilité quant à leur contenu ou à
              leurs pratiques en matière de confidentialité. Nous vous encourageons à consulter les
              politiques de confidentialité de ces sites tiers avant de fournir vos données
              personnelles.
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Modifications de la politique de confidentialité :
            </Typography>
            <Typography variant="h5">
              Nous nous réservons le droit de modifier la présente politique de confidentialité à
              tout moment, en fonction de l'évolution de nos pratiques en matière de confidentialité
              ou de la législation applicable. Les modifications prendront effet dès leur
              publication sur le Site. Nous vous encourageons à consulter régulièrement la politique
              de confidentialité pour vous tenir informé des éventuelles modifications.
            </Typography>
            <br />
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Contact :
            </Typography>
            <Typography variant="h5">
              Si vous avez des questions, des commentaires ou des préoccupations concernant notre
              politique de confidentialité, veuillez nous contacter à l'adresse e-mail suivante :
              localshirt.eip@gmail.com.
            </Typography>
            <Typography variant="h5">
              Dernière mise à jour de la politique de confidentialité : 06/07/2023.
            </Typography>
          </CardContent>
        </ResponsiveCard>
      </CenteredCardContainer>
    </Center>
  );
}
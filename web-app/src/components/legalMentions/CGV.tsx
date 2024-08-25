import blurredBall from '../../assets/blurred-green-ball.svg';
import { CardContent, Stack, Typography } from '@mui/material';
import { CenteredCardContainer, ResponsiveCard } from './CGU';
import { Center } from '../../informationPage/Information';
import BlurryBackground from '../blurryBackground/BlurryBackground';

export default function CGU() {
  return (
    <Center width={'100vw'} height={'100vh'}>
      <BlurryBackground />
      <CenteredCardContainer>
        <ResponsiveCard variant="outlined">
          <CardContent>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Conditions générales de vente
            </Typography>
            <Typography variant="h5">
              Les présentes conditions générales de vente (les "CGV") régissent l'utilisation du
              site internet et l'achat de produits proposés par Localshirt (ci-après dénommé "nous",
              "notre" ou "nos") via le site internet Localshirt (le "Site"). En passant commande sur
              le Site, vous acceptez les présentes CGV dans leur intégralité. Veuillez lire
              attentivement les CGV avant de passer votre commande.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Produits et commandes :
            </Typography>
            <Typography variant="h5">
              a. Description des produits : Le Site propose des produits liés à la comparaison de
              l'impact environnemental des vêtements et à la redirection vers des marques
              partenaires au meilleur impact écologique. Nous nous efforçons de fournir des
              informations précises sur les produits, y compris leur description, leur disponibilité
              et leur prix. Cependant, nous ne pouvons garantir l'exactitude complète de ces
              informations.
            </Typography>
            <Typography variant="h5">
              b. Processus de commande : Pour passer une commande sur le Site, vous devez suivre les
              instructions indiquées sur la page de commande. Vous devez fournir des informations
              exactes, complètes et à jour lors de la commande. Une fois votre commande passée, vous
              recevrez un e-mail de confirmation récapitulant les détails de votre commande.
            </Typography>
            <Typography variant='h5'>
              c. Acceptation de la commande : Nous nous réservons le droit de refuser toute commande
              pour quelque raison que ce soit, notamment en cas d'indisponibilité du produit, de
              problème de paiement, d'erreur sur le prix ou de suspicion de fraude. Si nous refusons
              votre commande, nous vous en informerons dans les plus brefs délais et vous
              rembourserons tout paiement effectué.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Prix et paiement :
            </Typography>
            <Typography variant="h5">
              a. Prix : Les prix des produits sont indiqués sur le Site et sont exprimés dans la
              devise locale. Les prix sont sujets à modification sans préavis. Les frais de
              livraison, le cas échéant, sont à la charge de l'acheteur et sont indiqués lors du
              processus de commande.
            </Typography>
            <Typography variant="h5">
              b. Paiement : Le paiement des produits s'effectue en ligne au moment de la commande.
              Nous acceptons les modes de paiement spécifiés sur le Site. Vous garantissez être le
              titulaire légitime du moyen de paiement utilisé. Les informations de paiement sont
              traitées de manière sécurisée, conformément aux normes de sécurité en vigueur.
            </Typography>

            <Typography variant='h3' color="text.secondary" gutterBottom>
              Livraison :
            </Typography>
            <Typography variant="h5">
              a. Zones de livraison : Nous livrons nos produits dans les zones spécifiées sur le
              Site. Veuillez noter que certaines restrictions de livraison peuvent s'appliquer en
              fonction de votre pays de résidence.
            </Typography>
            <Typography variant="h5">
              b. Délais de livraison : Nous faisons de notre mieux pour respecter les délais de
              livraison indiqués lors du processus de commande. Cependant, les délais de livraison
              sont donnés à titre indicatif et peuvent varier en fonction de différents facteurs
              indépendants de notre volonté.
            </Typography>
            <Typography variant="h5">
              c. Frais de livraison : Les frais de livraison, le cas échéant, sont indiqués lors du
              processus de commande. Vous êtes responsable de fournir une adresse de livraison
              exacte et complète. Tout frais supplémentaire lié à une adresse incorrecte ou
              incomplète sera à votre charge.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Droit de rétractation :
            </Typography>
            <Typography variant="h5">
              Conformément à la législation en vigueur, vous disposez d'un délai de rétractation de
              14 jours à compter de la réception du produit pour exercer votre droit de rétractation
              sans avoir à justifier de motifs ni à payer de pénalités. Pour exercer ce droit, vous
              devez nous informer de votre décision de rétractation par écrit, en utilisant les
              coordonnées fournies dans la section "Contact" ci-dessous. Vous devrez ensuite nous
              retourner le produit dans son état d'origine, accompagné de tous les accessoires
              éventuels, dans les meilleurs délais et à vos frais.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Responsabilité:
            </Typography>
            <Typography variant="h5">
              a. Informations fournies : Nous nous efforçons de fournir des informations précises et
              à jour sur le Site, notamment en ce qui concerne les produits. Cependant, nous ne
              pouvons garantir l'exactitude complète de ces informations. Vous reconnaissez que
              l'utilisation des informations fournies sur le Site se fait à vos propres risques.
            </Typography>
            <Typography variant="h5">
              b. Limitation de responsabilité : Dans les limites autorisées par la loi, nous
              déclinons toute responsabilité en cas de dommages indirects, consécutifs, spéciaux ou
              incidents découlant de l'utilisation du Site ou de l'achat de nos produits.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Propriété intellectuelle :
            </Typography>
            <Typography variant="h5">
              Tous les droits de propriété intellectuelle liés au Site, à son contenu et à nos
              produits restent notre propriété exclusive ou sont utilisés avec l'autorisation des
              titulaires des droits. Toute reproduction, représentation, modification ou
              exploitation totale ou partielle, quel que soit le support utilisé, est strictement
              interdite sans notre autorisation préalable écrite.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Modification des CGV :
            </Typography>
            <Typography variant="h5">
              Nous nous réservons le droit de modifier les présentes CGV à tout moment, en fonction
              de l'évolution de notre activité ou de la législation applicable. Les modifications
              prendront effet dès leur publication sur le Site. Il est de votre responsabilité de
              consulter régulièrement les CGV pour vous tenir informé des éventuelles modifications.
            </Typography>
            <Typography variant='h3' color="text.secondary" gutterBottom>
              Contact :
            </Typography>
            <Typography variant="h5">
              Si vous avez des questions, des commentaires ou des réclamations concernant les
              présentes CGV, veuillez nous contacter à l'adresse e-mail suivante :
              localshirt.eip@gmail.com.
            </Typography>
            <Typography variant="h5">Dernière mise à jour des CGV : 06/07/2023.</Typography>
          </CardContent>
        </ResponsiveCard>
      </CenteredCardContainer>
    </Center>
  );
}

import { Box, Typography, Grid, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 2,
                py: 1,
                whiteSpace: 'nowrap',
                marginTop: 'auto',
                zIndex: 1000
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Link href="/" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Accueil</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/catalog" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Produits</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/sitemap" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Plan du site</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/legalMentions" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Mentions légales</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/cgv" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Conditions générales de vente</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/confidentiality" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Politique de confidentialité</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/cgu" color="white.main" underline="none"><Typography fontSize={10} variant={'body2'} color='white.main'>Conditions d'utilisation</Typography></Link>
                </Grid>
            </Grid>
            <Typography fontSize={10} variant={'body2'} color='white.main' sx={{ marginRight: '30px' }}>LocalShirt © 2024</Typography>
        </Box>
    );
}

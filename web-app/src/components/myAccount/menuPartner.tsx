import { useCookies } from 'react-cookie';
import { Typography } from '@mui/material';
import * as Typo from '../../components/Typography/typographyStyle';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


interface MenuPartnerProps {
    name: string;
    lastname: string;
    businessName: string;
    businessLogo: string;
    isDeveloper: string;
}

const MenuPartner = ({ name, lastname, businessName, businessLogo, isDeveloper }: MenuPartnerProps) => {
    console.log(isDeveloper);
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const logOut = () => {
        removeCookie('token')
        navigate('/')
    }
    const myAccountRedirect = () => {
        window.location.replace('/mon-compte');
    };

    const addArticleRedirect = () => {
        window.location.replace('/addArticle');
    };

    // keeping it since it will be added at some point, speedy need to add the check if we are admin
    const RedirectToAdmin = () => {
        window.location.replace('/admin');
    };

    const catalogRedirect = () => {
        window.location.replace('/catalog');
    };

    return (
        <>
            <Box sx={{ padding: "40px" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '20px' }}>
                    <Avatar sx={{ width: '50px', height: '50px', marginRight: '10px' }} alt={"Remy Sharp"} src={businessLogo} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography style={Typo.poppinsRegular18}>{name} {lastname}</Typography>
                        <Typography style={Typo.poppinsRegular15}>{businessName}</Typography>
                    </Box>
                </Box>

                <Divider sx={{ marginBottom: '20px' }} orientation="horizontal" flexItem />

                <Typography style={Typo.poppinsUnderTitleSB15} sx={{ marginBottom: '15px', cursor: 'pointer' }} onClick={myAccountRedirect}>Mon Compte</Typography>
                <Typography style={Typo.poppinsUnderTitleSB15} sx={{ marginBottom: '15px', cursor: 'pointer' }} onClick={catalogRedirect}>Mon Catalogue</Typography>
                {isDeveloper &&
                    <Typography style={Typo.poppinsUnderTitleSB15} sx={{ marginBottom: '15px', cursor: 'pointer' }} onClick={RedirectToAdmin}>Page Admin</Typography>
                }
                <Typography style={Typo.poppinsUnderTitleSB15} sx={{ marginBottom: '15px', cursor: 'pointer' }} onClick={addArticleRedirect}>Ajouter un article</Typography>
                <Typography style={Typo.poppinsUnderTitleSB15} sx={{ cursor: 'pointer' }} onClick={logOut}>Deconnexion</Typography>
            </Box>

        </>
    );
};

export default MenuPartner;

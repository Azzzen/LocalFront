import React from 'react';
import './navbar/Header.scss'
import localShirtFullLogoGreen from '../assets/green_logo.svg';
import { useNavigate } from 'react-router-dom';
import {alpha, Box, Grid, Link, Stack, styled, TextField, Typography, Avatar, Chip} from "@mui/material";


function Header() {
    const navigate = useNavigate();

    const navigateCatalogue = () => {
        navigate('/catalog');
    };

    const navigateAccount = () => {
        navigate('/mon-compte');
      };
      
    const Center = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }));

    
return(
     <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} paddingTop={'1vh'}>
            <img src={localShirtFullLogoGreen} style={{marginLeft: '2vw'}}/>
            <Box sx={{boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 20%)"}} marginRight={'3vw'}>
                <Center bgcolor={'green.main'} borderRadius={'5px'} width={'100%'} height={'100%'} paddingX={'1vw'}
                        onClick={() => window.location.replace('/login')} sx={{":hover": {cursor: "pointer"}}}>
                    <Typography variant={'button'} color={'white.light'}>Espace Partenaire</Typography>
                </Center>
            </Box>
        </Stack>
);

}

export default Header;

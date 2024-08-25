import React, { useEffect, useState } from 'react';
import { Box, Menu, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuPartner from './menuPartner';
import { gql } from '@apollo/client';
import client from '../../graphqlApollo';
import { useCookies } from 'react-cookie';

const GET_PROFILE = gql`
query {
    profile {
      user {name, lastName, businessName, profil_picture, business_logo, isDeveloper}
    }
  }
  `;

const AccountButton = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [cookies, setCookie] = useCookies(['token']);
    const [name, setName] = useState("name");
    const [lastName, setLastname] = useState("lastName");
    const [businessName, setbusinessName] = useState("businessName");
    const [profilePicture, setProfilePicture] = useState("Image");
    const [businessLogo, setBusinessLogo] = useState("Image");
    const [isDeveloper, setIsDeveloper] = useState("isDeveloper");

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await client.query({
                    query: GET_PROFILE, context: {
                        headers: {
                            authorization: "Bearer " + cookies.token,
                        },
                    }
                });
                const { name, lastName, businessName, profil_picture, business_logo, isDeveloper} = data.profile.user;
                setName(name);
                setLastname(lastName);
                setbusinessName(businessName);
                setProfilePicture(profil_picture);
                setBusinessLogo(business_logo)
                setIsDeveloper(isDeveloper)

            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchData();


    }, []);

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingTop: '10px', paddingRight: '50px' }} onClick={handleMenuOpen} >
                <Typography sx={{ paddingRight: '20px' }}>{name} {lastName}</Typography>
                <Avatar sx={{ width: '50px', height: '50px' }} alt="Remy Sharp" src={profilePicture} />
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        backgroundColor: '#F2EEEB',
                        borderRadius: '20px',
                    },
                }}
            >
                <MenuPartner name={name} lastname={lastName} businessName={businessName} businessLogo={businessLogo} isDeveloper={isDeveloper} />
            </Menu >
        </>
    );
};

export default AccountButton;

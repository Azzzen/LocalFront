import { Box, Button, Stack, Typography } from "@mui/material";
import { useCookies } from 'react-cookie';

import { Center } from "../../informationPage/Information";
import localShirtFullLogoGreen from "../../assets/green_logo.svg";
import whiteLogo from './../../assets/white_logo.svg';

export default function Navbar() {
    const [cookies, setCookie] = useCookies(['token', 'theme']);
    return (
        <Box position="fixed" top={0} left={0} width="100vw" zIndex={1000}>
            <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} paddingY={'1.5vh'} position={'absolute'}>
                <Button style={{ border: 'none', background: 'none', }} onClick={() => window.location.replace("/")}>
                    {window.location.pathname === "/catalog" ? (
                        <img
                            src={whiteLogo}
                            alt="White Logo"
                            style={{
                                marginLeft: '290px',
                                marginTop: "5px",
                                position: 'fixed',
                                top: '18px',
                                width: '250px',
                                height: 'auto',
                                zIndex: 1000,
                            }}
                        />
                    ) : (
                        <img
                            src={localShirtFullLogoGreen}
                            alt="Green Logo"
                            style={{ marginLeft: '2vw' }}
                        />
                    )}
                </Button>
            </Stack>
        </Box>
    )
}

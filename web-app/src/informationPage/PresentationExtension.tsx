import {Grid, Link, Stack, Typography} from "@mui/material";
import localShirtFullLogoWhite from "../assets/white_logo.svg";
import extensionScreen from "../assets/extension_screen.svg";
import React from "react";
import {Center} from "./Information";

export default function PresentationExtension() {
    return (
        <Stack width={'100vw'} height={'100vh'} sx={{scrollSnapAlign: 'start', aspectRatio: '3/1'}}>
            <Grid container width={'100%'} height={'100%'} direction={'row'} justifyContent={'center'}
                  alignItems={'center'}>
                <Grid item xs={6} paddingLeft={10} paddingRight={2}>
                    <Stack spacing={2}>
                        <img src={localShirtFullLogoWhite} width={'90%'}/>
                        <Stack>
                            <Typography variant={'body2'} color={'white.main'}>Une mode <Typography variant={'body2'}
                                                                                                    color={'green.main'}
                                                                                                    display={'inline'}
                                                                                                    fontWeight={'bold'}>éthique</Typography> à
                                ton image :</Typography>
                            <Typography variant={'body2'} color={'white.main'}>Trouvons le vêtement <Typography
                                variant={'body2'} color={'green.main'} display={'inline'}
                                fontWeight={'bold'}>éco-responsable</Typography> qui reflète</Typography>
                            <Typography variant={'body2'} color={'white.main'}>ton style <Typography variant={'body2'}
                                                                                                     color={'green.main'}
                                                                                                     display={'inline'}
                                                                                                     fontWeight={'bold'}>unique</Typography> !</Typography>
                        </Stack>
                        <Link target="_blank" href="https://chromewebstore.google.com/?hl=fr" rel="noreferrer" marginRight={'2vw'} width={'50%'}
                              height={'8vh'} bgcolor={'green.main'} borderRadius={'40px'}>
                            <Center width={'100%'} height={'100%'}>
                                <Typography fontSize={30} color={'white.light'}>Télécharger l'extension</Typography>
                            </Center>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={6} paddingLeft={2} paddingRight={10}>
                    <img src={extensionScreen}/>
                </Grid>
            </Grid>
        </Stack>
    );
}

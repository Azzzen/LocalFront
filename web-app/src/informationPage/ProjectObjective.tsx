import {Stack, Typography} from "@mui/material";
import womanImage from "../assets/women.svg";
import {Center} from "./Information";

export default function ProjectObjective() {
    return (
        <Stack width={'100vw'} height={'100vh'} sx={{scrollSnapAlign: 'start', aspectRatio: '3/1'}}>
            <Stack direction={'row'} width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}
                   spacing={20}>
                <Center alignSelf={'end'}>
                    <img src={womanImage}/>
                </Center>
                <Stack>
                    <Typography fontSize={100} fontWeight={'bold'} color={'black-main'}>Le projet
                        LocalShirt</Typography>
                    <Typography variant={'body2'} color={'white.main'}>La mission de Localshirt est de sensibiliser
                        les</Typography>
                    <Typography variant={'body2'} color={'black.main'}>consommateurs sur <Typography variant={'body2'}
                                                                                                     color={'green.main'}
                                                                                                     display={'inline'}
                                                                                                     fontWeight={'bold'}>l’impact
                        de l’industrie textile</Typography>, et</Typography>
                    <Typography variant={'body2'} color={'black.main'}>de les encourager à faire des choix
                        plus <Typography variant={'body2'} color={'green.main'} display={'inline'}
                                         fontWeight={'bold'}>durables</Typography>,</Typography>
                    <Typography variant={'body2'} color={'black.main'}><Typography variant={'body2'}
                                                                                   color={'green.main'}
                                                                                   display={'inline'}
                                                                                   fontWeight={'bold'}>respectueux de
                        l’environnement</Typography>, et de l’être humain.</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

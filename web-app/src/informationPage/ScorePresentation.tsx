import {Box, Stack, Typography} from "@mui/material";
import greenBubble from "../assets/green_bubble.svg";
import pinkShirtScore from "../assets/shirt_score.svg";
import whiteBubble from "../assets/white_bubble.svg";

export default function ScorePresentation() {
    return (
        <Stack width={'100vw'} height={'100vh'} sx={{scrollSnapAlign: 'start', aspectRatio: '3/1'}} paddingTop={'11vh'}>
            <Stack width={'100%'}>
                <Box height={'42vh'} left={'18vw'} position={'relative'} width={'25vw'} marginBottom={'-20vh'}>
                    <img src={greenBubble} style={{position: 'absolute', zIndex: -1}}/>
                    <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
                        <Typography fontSize={25} color={'white.main'}>Le <Typography fontSize={30} color={'#EAC645'}
                                                                                      display={'inline'}
                                                                                      fontWeight={'bold'}>score</Typography></Typography>
                        <Typography fontSize={25} color={'white.main'}><Typography fontSize={30} color={'#EAC645'}
                                                                                   display={'inline'}
                                                                                   fontWeight={'bold'}>environnemental</Typography> est
                            basé</Typography>
                        <Typography fontSize={25} color={'white.main'}>sur la liste des</Typography>
                        <Typography fontSize={25} color={'white.main'}>matériaux utilisés durant la</Typography>
                        <Typography fontSize={25} color={'white.main'}>production du produit</Typography>
                    </Stack>
                </Box>
                <Box height={'19vh'} alignSelf={'center'} position={'relative'} zIndex={2}>
                    <img src={pinkShirtScore}/>
                </Box>
                <Box height={'42vh'} left={'62vw'} position={'relative'} width={'25vw'}>
                    <img src={whiteBubble} style={{position: 'absolute', zIndex: -1}}/>
                    <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
                        <Typography fontSize={25} color={'green.main'}>Le <Typography fontSize={30} color={'#EAC645'}
                                                                                      display={'inline'}
                                                                                      fontWeight={'bold'}>score
                            éthique</Typography> est</Typography>
                        <Typography fontSize={25} color={'green.main'}>calculé en fonction des</Typography>
                        <Typography fontSize={25} color={'green.main'}>conditions de travail des</Typography>
                        <Typography fontSize={25} color={'green.main'}>différentes étapes de</Typography>
                        <Typography fontSize={25} color={'green.main'}>production du produit</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
}

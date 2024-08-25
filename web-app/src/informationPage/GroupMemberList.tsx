import {Avatar, Stack, styled, TextField, Typography} from "@mui/material";
import axel from "../assets/52727831819_146b9b47af_o.jpg";
import timothe from "../assets/IMG_7461.png";
import juliette from "../assets/FB_IMG_1712578105946.jpg";
import erwan from "../assets/Downgraded.png";
import martin from "../assets/20240108_111538.jpg";
import quentin from "../assets/52727831819_146b9b47af_o (copy).jpg";
import speedy from "../assets/speedy.jpg";
import React from "react";

export const PresentationSentenceGray = styled(Typography)(({theme}) => ({
    color: theme.palette.gray.main,
    fontSize: 35,
    display: 'inline'
}));

export const PresentationSentenceGreen = styled(Typography)(({theme}) => ({
    color: theme.palette.green.main,
    fontSize: 35,
    display: 'inline'
}));

export default function GroupMemberList() {
    const teamMemberCard = (image: string, alignRight: boolean, text: JSX.Element) => {
        return (
            <Stack direction={'row'} alignItems={'center'} width={'90%'} justifyContent={alignRight ? 'end' : ''} columnGap={'2vw'}>
                {!alignRight && <Avatar alt="Natacha" src={image} sx={{width: '10vw', height: '10vw'}}/>}
                <Stack>
                    {text}
                </Stack>
                {alignRight && <Avatar alt="Natacha" src={image} sx={{width: '10vw', height: '10vw'}}/>}
            </Stack>
        )
    }

    return (
        <Stack width={'100vw'} sx={{scrollSnapAlign: 'start', aspectRatio: '3/1'}} rowGap={'10vh'} paddingTop={'11vh'}>
            <Stack sx={{'&::-webkit-scrollbar': {display: 'none'}}} rowGap={'10vh'} overflow={'auto'} alignItems={'center'}>
                <Stack width={'100%'} alignItems={'center'}>
                    <Typography fontSize={45} color={'gray.main'}>Voici <Typography fontSize={45} color={'green.main'} display={'inline'} fontWeight={'bold'}>
                        LocalShirt
                    </Typography> ! Dédié à l'écologie, mais avec style !
                    </Typography>
                    <Typography fontSize={45} color={'gray.main'}>Vous pouvez nous contacter via l'adresse <Typography fontSize={45} color={'green.main'} display={'inline'} fontWeight={'bold'}>
                        localshirt.eip@gmail.com
                    </Typography> !
                    </Typography>
                </Stack>
                <Stack width={'80%'} alignItems={'center'} rowGap={'10vh'} paddingBottom={'10vh'}>
                    {teamMemberCard(axel, false, <PresentationSentenceGray>Je suis <PresentationSentenceGreen>passionné</PresentationSentenceGreen>, <PresentationSentenceGreen>créatif</PresentationSentenceGreen> et <PresentationSentenceGreen>déterminé</PresentationSentenceGreen>, toujours prêt à explorer de nouvelles idées pour <PresentationSentenceGreen>inspirer</PresentationSentenceGreen> et <PresentationSentenceGreen>motiver</PresentationSentenceGreen> ceux qui m'entourent</PresentationSentenceGray>)}
                    {teamMemberCard(timothe, true, <PresentationSentenceGray><PresentationSentenceGreen>Timothée De Boynes</PresentationSentenceGreen>, toujours <PresentationSentenceGreen>curieux</PresentationSentenceGreen> et en quête de nouvelles technologies, je suis prêt à relever tous les défis pour <PresentationSentenceGreen>offrir</PresentationSentenceGreen> des expériences web <PresentationSentenceGreen>exceptionnelles</PresentationSentenceGreen>.</PresentationSentenceGray>)}
                    {teamMemberCard(juliette, false, <PresentationSentenceGray>Bonjour ! Je suis <PresentationSentenceGreen>Juliette Destang</PresentationSentenceGreen>, étudiante à Epitech et <PresentationSentenceGreen>passionné</PresentationSentenceGreen> par le web et les paquebots. <PresentationSentenceGreen>Bienvenue</PresentationSentenceGreen> sur localshirt !</PresentationSentenceGray>)}
                    {teamMemberCard(erwan, true, <PresentationSentenceGray><PresentationSentenceGreen>Erwan Simonetti</PresentationSentenceGreen>, côté serveur, web-app ou devOP, <PresentationSentenceGreen>j'aime</PresentationSentenceGreen> relever les défis technologiques et <PresentationSentenceGreen>veille</PresentationSentenceGreen> à ce que chaque étape soit réalisée avec <PresentationSentenceGreen>soin</PresentationSentenceGreen> et <PresentationSentenceGreen>attention</PresentationSentenceGreen>.</PresentationSentenceGray>)}
                    {teamMemberCard(martin, false, <PresentationSentenceGray>Je suis un développeur backend passionné par la création de solutions robustes et performantes qui alimentent les coulisses invisibles mais essentielles des applications. Merci Chat GPT.</PresentationSentenceGray>)}
                    {teamMemberCard(quentin, true, <PresentationSentenceGray>Hello ! Je m'appel <PresentationSentenceGreen>Quentin Caniou</PresentationSentenceGreen> et je fais de mon mieux pour que vous puissiez trouver les <PresentationSentenceGreen>vêtements de vos rêves</PresentationSentenceGreen> grâce à <PresentationSentenceGreen>l'intelligence artificielle</PresentationSentenceGreen> !</PresentationSentenceGray>)}
                    {teamMemberCard(speedy, false, <PresentationSentenceGray>Bienvenue! Je travaille actuellement sur Localshirt en tant que dévelopeur backend</PresentationSentenceGray>)}
                </Stack>
            </Stack>
        </Stack>
    );
}
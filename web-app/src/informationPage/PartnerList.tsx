import {useCookies} from "react-cookie";
import {gql, useQuery} from "@apollo/client";
import client from "../graphqlApollo";
import React, {useEffect, useState} from "react";
import {alpha, Box, Grid, Link, Stack, Typography} from "@mui/material";
import searchLogo from "../assets/search_logo.svg";
import {Center, SearchInputField} from "./Information";
import notFound from '../assets/bubble-gum-error-404.gif'
import Loading from "../components/loading/Loading";


export default function PartnerList() {
    const [cookies] = useCookies(['token']);
    const {loading, error, data} = useQuery(gql`
        query {
          get_companies {
            status
            content
            companies {
              name
              logo
              description
              businessLink
            }
          }
        }`, {client});
    const [companies, setCompanies] = useState<{
        name: string,
        logo: string,
        description: string,
        businessLink: string
    }[]>([]);
    const [searchBarContent, setSearchBarContent] = useState<string>('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading && !error && data) {
            setCompanies(data.get_companies.companies);
            setLoading(false);
        }
    }, [loading, error, data]);
    return (
        <Stack width={'100vw'} marginTop={'120px'} alignItems="center"sx={{scrollSnapAlign: 'start', aspectRatio: '3/1'} }>
            <Loading open={isLoading}/>
            <Stack alignItems="center" bgcolor={alpha('#436850', 0.6)} borderRadius={'20px'} width={'70vw'}
                   height={'70vh'}
                   display={"flex"}rowGap={'1vh'}
                   sx={{boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 8%)", '&::-webkit-scrollbar': {display: 'none'}}}
                   overflow={'hidden'}>
                <Typography fontWeight={'bold'} fontSize={60} color={'white.main'} margin={'5vh 5vw'}>Découvrez nos
                    partenaires !</Typography>
                <Stack bgcolor={'white.main'} direction={'row'} width={'90%'} borderRadius={'10px'}>
                    <img src={searchLogo} width={'20vw'} style={{marginLeft: '1vh'}}/>
                    <SearchInputField placeholder={'Rechercher un partenaire...'} onChange={(value: any) => setSearchBarContent(value.target.value)}></SearchInputField>
                </Stack>
                <Stack rowGap={'3vh'} width={'90%'} overflow={'auto'} sx={{'&::-webkit-scrollbar': {display: 'none'}}}>
                    {companies.filter(company => company.name.substring(0, searchBarContent.length).toLowerCase() == searchBarContent.toLowerCase()).length > 0 ? companies.filter(company => company.name.substring(0, searchBarContent.length).toLowerCase() == searchBarContent.toLowerCase()).map(company => {
                        return (
                            <Box>
                                <Grid container bgcolor={'white.light'} direction={'row'} width={'100%'}
                                      borderRadius={'20px'} height={'16vh'} sx={{
                                    boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 10%)",
                                    '&::-webkit-scrollbar': {display: 'none'}
                                }}>
                                    <Grid item xs={2} borderRadius={'20px'}>
                                        <Center width={'100%'} height={'100%'} borderRadius={'20px'}>
                                            <Center borderRadius={'5px'} bgcolor={'#EDEDED'} width={'70%'}
                                                    height={'70%'}>
                                                <img src={company.logo} style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                            </Center>
                                        </Center>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography fontSize={'25px'} fontWeight={500}
                                                    color={'#504D4D'}>{company.name}</Typography>
                                        <Typography fontSize={'20px'} sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                        }} color={'#585858'}>{company.description}</Typography>
                                    </Grid>
                                    <Grid item xs={2} alignSelf={'center'}>
                                        <Link target="_blank" href={company.businessLink} rel="noreferrer">
                                            <Center bgcolor={'#828282'} borderRadius={'10px'} marginRight={'2vw'} width={'8vw'}
                                                    height={'6vh'}>
                                                <Typography fontSize={'18px'} color={'white.light'}>En savoir plus</Typography>
                                            </Center>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>)
                    }) : (<Stack alignItems={'center'} justifyContent={'center'} maxWidth={'100%'} maxHeight={'100%'}>
                        <img src={notFound} style={{maxWidth: '80%', maxHeight: '80%'}}/>
                        <Typography fontSize={25} color={'white.main'}>Pas de partenaire correspondant</Typography>
                    </Stack>)}
                </Stack>
            </Stack>
        </Stack>
    );
}
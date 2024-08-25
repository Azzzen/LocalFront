import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from "../graphqlApollo";



export default function LinkAnalyze() {

    const [url, setUrl] = useState('');

    const handleAnalyseClick = async () => {
        if (url.trim() !== '') {
            try {
                const { data } = await client.query({
                    query: gql`
               query Alternative($url: String!) {
                findAlternative (
                    URL: $url, 
                    likeliness: 0.8, 
                    minPrice: 0, 
                    maxPrice: 100
                ) {
                    status
                    devMessage
                    articles {
                        id
                        name
                        brand
                        redirection_url
                        email
                        country { name }
                        material { name }
                        transport { name }
                        image
                        brandlogo
                        environnementdesc
                        ethicaldesc
                        branddesc
                        price
                        rgb
                        ethical_score
                        ecological_score
                        local_score
                    }
                }
            }
        `,
                    variables: { url: url }
                });
                console.log('Data:', data);
            } catch (error) {
                console.error('Error updating article:', error);
            }
        } else {
            console.log('Please enter a valid URL');
        }
    };



    return (
        <Stack  sx={{ scrollSnapAlign: 'start', aspectRatio: '3/1' }}>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%" sx={{ bgcolor: 'blue.main' }}>
                <Stack alignItems="center" textAlign="center" maxWidth="1200px" width="100%" spacing={10}>
                    <Typography fontSize={50} fontWeight="bold" color={'gray.main'}>Analyser un produit dès maintenant !</Typography>
                    <Typography variant="body2" color={'gray.main'}>Veuillez fournir le lien vers un article vestimentaire dès maintenant pour obtenir une alternative plus écologique et éthique !</Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Lien de l'article vestimentaire"
                        fullWidth
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        sx={{
                            bgcolor: 'background.paper',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 'inherit',
                            }
                        }}
                    />
                    <Button
                        onClick={handleAnalyseClick}
                        sx={{
                            width: '50%',
                            height: '8vh',
                            bgcolor: 'green.main',
                            borderRadius: '40px',
                            marginRight: '2vw',
                            '&:hover': {
                                bgcolor: 'green.dark',
                            },

                        }}
                    >
                        <Box sx={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography fontSize={30} color={'white.light'}>
                                Analyser l'article
                            </Typography>
                        </Box>
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}

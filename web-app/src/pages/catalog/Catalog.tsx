import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LeftPanel from './LeftPanel';
import ItemCard from './ItemCard';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { GreyButton } from '../../components/buttons/buttons';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { gql } from '@apollo/client';
import client from '../../graphqlApollo';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import BlurryBackground from '../../components/blurryBackground/BlurryBackground';
import Forbidden from '../../components/forbidden/Forbidden';

type User = {
  email: string;
  password: string;
  name: string;
  lastName: string;
  businessRole: string;
  businessContact: string;
  businessDescription: string;
  businessName: string;
  isConfirmed: boolean;
  isDeveloper: boolean;
};

export type Items = {
  title: string;
  photo: string;
  id: string;
  price: number;
  desc: string;
  score: number;
  type: string;
  redirectnumber: number;
  lastshown: Date;
  lastclick: Date;
  ethicalscore: number;
  ecologicalscore: number;

};

const Catalog = () => {
  const [isLoading, setLoading] = useState(false);
  const [cookies] = useCookies(['token']);
  const [itemList, setItemList] = useState<Items[]>([]);
  const [filteredItemList, setFilteredItemList] = useState<Items[]>([]);
  const [filtre, setFiltre] = React.useState('');
  const [user, setUser] = useState<User>();


  const qr = gql(`
  query {
    getArticlePartnerUserList {
      status
      devMessage
      userMessage
      articles {
        id
        name
        brand
        country {name}
        transport {name}
        material {name}
        price
        local_score
        branddesc
        image
        type
        ecological_score
        ethical_score
        redirectnumber
        lastshown
        lastclick
      }
    }
  }
  `);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const articles = await getArticles();
        setItemList(articles);
        setFilteredItemList(articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);


  const handleChange = (event: SelectChangeEvent) => {
    setFiltre(event.target.value);
  };

  const getArticles = async () => {
    const data = await client.query({
      query: qr, context: {
        headers: {
          authorization: "Bearer " + cookies.token,
        },
      }
    });
    const articles = data.data.getArticlePartnerUserList.articles;
    const items = [];
    for (const article of articles) {
      const item: Items = {
        title: article.name,
        photo: article.image,
        id: article.id,
        price: article.price,
        type: article.type,
        desc: article.branddesc,
        score: article.local_score,
        ecologicalscore: article.ecological_score,
        ethicalscore: article.ethical_score,
        redirectnumber: article.redirectnumber,
        lastshown: article.lastshown,
        lastclick: article.lastclick
      };
      items.push(item);
    }
    return items;
  };



  const handleSearchChange = (searchQuery: string) => {

    const filteredItems = searchQuery.trim() === ''
      ? itemList
      : itemList.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
      });

    setFilteredItemList(filteredItems);
  };

  const handleButtonClick = (category: string) => {
    const filteredItems = itemList.filter((item) => {
      return item.type.toLowerCase().includes(category.toLowerCase());
    });
    setFilteredItemList(filteredItems);

  };

  const addArticleRedirect = () => {
    window.location.replace('/addArticle');
  };

  const dividerStyle = {
    borderRight: '1px solid',
    color: '#5E5E5E',
  };

  return ( !cookies.token ? <Forbidden /> :
    <>
      <BlurryBackground />
      <LeftPanel onSearchChange={handleSearchChange} onButtonClick={handleButtonClick} />
      <Loading open={isLoading} />
      <Box sx={{
        position: 'absolute',
        top: '0',
        left: '370px',
        width: '1510px',
        height: '100vh',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: '15px'
        }} >
          <Typography sx={{ fontSize: '50px', paddingBottom: '20px' }}>Catalogue</Typography>
        </Box>
        <Divider orientation="horizontal" flexItem sx={dividerStyle} />

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: '15px'
        }} >
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingTop: '10px', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Trier par </Typography>
            <FormControl sx={{ m: 1, minWidth: 120, bgcolor: '#C8C8C8', borderRadius: '10px', '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
              <InputLabel id="item-card-filtre">Filtre</InputLabel>
              <Select
                value={filtre}
                onChange={handleChange}
                autoWidth
                label="Filtre"
              >
                <MenuItem value="">
                  <em>Filtre</em>
                </MenuItem>
                <MenuItem value={1}>Récent</MenuItem>
                <MenuItem value={2}>Ancient</MenuItem>
              </Select>
            </FormControl>
          </Box >
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingTop: '15px', justifyContent: 'center' }}>
            <Button variant="contained" size="small" sx={{ ...GreyButton(), width: '220px', height: '50px' }} onClick={addArticleRedirect}>
              <Typography color={'white.light'}>Ajouter un article</Typography>
            </Button>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '50px', paddingLeft: '30px' }}>
          {filteredItemList.map((item, index) => (
            <div key={item.id} style={{ marginBottom: index < itemList.length - 1 ? '30px' : 0 }}>
              <ItemCard
                key={item.id}
                title={item.title}
                type={item.type}
                photo={item.photo}
                id={item.id}
                price={item.price}
                desc={item.desc}
                score={item.score}
                ecologicalscore={item.ecologicalscore}
                ethicalscore={item.ethicalscore}
                redirectnumber={item.redirectnumber}
                lastshown={item.lastshown}
                lastclick={item.lastclick} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Catalog;

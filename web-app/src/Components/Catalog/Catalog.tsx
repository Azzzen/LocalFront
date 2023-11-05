import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Sidebar from './Sidebar';
import { Box, Button, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import Navbar from 'Components/navbar/navbar';
export type Items = {
  title: string;
  photo: string;
  id: string;
  price: number;
  desc: string;
  score: number;
  color: string;
  identification: string;
  lastbought: string;
  lastshown: string;
  lastclick: string;
};

export default function Catalog() {
  const [delItemId, setDelItemId] = useState('');
  const [items, setItems] = useState<Items[]>([
    {
      title: 'robe femme',
      identification: 'dresses',
      photo:
        'https://img01.ztat.net/article/spp-media-p1/304abd6dbfd947f09e2df993acd09077/f0cc9468a38c433c9936d20c296adb08.jpg?imwidth=1800',
      id: '00000',
      price: 12.9,
      desc: 'vetement',
      score: 60,
      color: '#C9C073',
      lastbought: '3 mars 2023',
      lastshown: '3 mars 2023',
      lastclick: '3 mars 2023',
    },
    {
      title: 'vetement',
      identification: 'pants',
      photo:
        'https://www.cherwood.fr/4614-thickbox_default/mariniere-homme-cherbourgeois-bien-ancre.jpg',
      id: '00001',
      price: 15.9,
      desc: 'pantalon',
      score: 60,
      color: '#C9C073',
      lastbought: '3 mars 2023',
      lastshown: '3 mars 2023',
      lastclick: '3 mars 2023',
    },
    {
      title: 'vetement',
      identification: 'tops',
      photo:
        'https://www.cherwood.fr/4614-thickbox_default/mariniere-homme-cherbourgeois-bien-ancre.jpg',
      id: '00002',
      price: 12.9,
      desc: 'tshirt',
      score: 60,
      color: '#C9C073',
      lastbought: '3 mars 2023',
      lastshown: '3 mars 2023',
      lastclick: '3 mars 2023',
    },
  ]);
  const [filter, setFilter] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (delItemId.length > 0) {
      const newItemList = items.filter((item) => item.id !== delItemId);
      setItems(newItemList);
      setDelItemId('');
    }
  }, [delItemId]);

  return (
    <>
      <Navbar show={false} />
      <HStack>
        <Sidebar setFilter={setFilter} setSearchInput={setSearchInput} searchInput={searchInput} />
        <div>
          <Text fontSize={'5xl'}>{searchInput}</Text>
          <Divider />
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            marginBottom={'10px'}
            marginTop={'10px'}
          >
            <a href="/addArticle">
              <Button leftIcon={<AddIcon />} fontSize="lg" bgColor="green.200" color={'white'}>
                Ajouter un article
              </Button>
            </a>
          </Box>
          {items.map((item) => (
            <ItemCard
              filter={filter}
              key={item.id}
              title={item.title}
              identification={item.identification}
              photo={item.photo}
              id={item.id}
              price={item.price}
              desc={item.desc}
              score={item.score}
              color={item.color}
              lastbought={item.lastbought}
              lastshown={item.lastshown}
              lastclick={item.lastclick}
              setItems={setItems}
              setDelItemId={setDelItemId}
              searchInput={searchInput}
            />
          ))}
        </div>
      </HStack>
    </>
  );
}

//implement input functions (filter according to input presence in object values)

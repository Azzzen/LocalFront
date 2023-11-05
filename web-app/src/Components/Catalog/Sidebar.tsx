import { Box, Button, Divider, Text, VStack } from '@chakra-ui/react';
import LogoBanner from 'Components/LogoBanner';
import { Dispatcher } from './ItemCard';
import SearchBar from './Searchbar';
export default function Sidebar({ setFilter, setSearchInput, searchInput }: Props) {
  return (
    <Box backgroundColor={'white.300'} width={window.innerWidth / 4} height={window.innerHeight}>
      {/* <LogoBanner /> */}
      <VStack flexDir={'column'} justifyContent={'center'} width={'85%'} margin={'auto'}>
        <SearchBar SetsearchInput={setSearchInput} searchInput={searchInput} />
      </VStack>
      <VStack flexDir={'column'} justifyContent={'center'} width={'50%'} margin={'auto'}>
        <Text fontSize={'xl'}>Mes catégories</Text>
        <Divider />
        <Button
          width={'50%'}
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('tops')}
          w="100%"
        >
          Les Hauts
        </Button>
        <Button
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('pants')}
          w="100%"
        >
          Les pantalons
        </Button>
        <Button
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('dresses')}
          w="100%"
        >
          Les Robes
        </Button>
        <Button
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('skirt')}
          w="100%"
        >
          Les jupes
        </Button>
        <Button
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('sweatShirt')}
          w="100%"
        >
          Les Sweatshirts
        </Button>
        <Button
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('underwear')}
          w="100%"
        >
          Les sous-vetements
        </Button>
        <Button
          backgroundColor={'green.200'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('accessories')}
          w="100%"
        >
          Les accessoires
        </Button>
        <Button
          backgroundColor={'green.100'}
          color={'white'}
          marginTop={18}
          marginBottom={18}
          onClick={() => setFilter('')}
          w="100%"
        >
          Tous les Articles
        </Button>
      </VStack>
    </Box>
  );
}

type Props = {
  setFilter: Dispatcher<string>;
  searchInput: string;
  setSearchInput: Dispatcher<string>;
};

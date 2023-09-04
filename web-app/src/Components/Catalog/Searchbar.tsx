import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Dispatcher } from './ItemCard';

export default function SearchBar({ SetsearchInput, searchInput }: Props) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="tel"
        placeholder="Rechercher un article..."
        backgroundColor={'white'}
        borderRadius={'10'}
        width={'85'}
        onChange={(e) => {
          SetsearchInput(e.target.value.toLowerCase());
        }}
      />
    </InputGroup>
  );
}

type Props = {
  searchInput: string;
  SetsearchInput: Dispatcher<string>;
};

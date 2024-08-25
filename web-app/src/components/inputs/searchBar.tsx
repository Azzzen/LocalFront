import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import React, { useState, ChangeEvent } from 'react';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "#504D4D"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


interface SearchbarProps {
  onSearchChange: (value: string) => void;
}

export const Searchbar = ({ onSearchChange }: SearchbarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Recherche d'un article..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </Search>
  );
};
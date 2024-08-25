import React from 'react';
import { Box, Button } from '@mui/material';
import whiteLogo from './../../assets/white_logo.svg';
import { Searchbar } from '../../components/inputs/searchBar';
import dressIcon from './../../assets/icons/dress.svg';
import skirtIcon from './../../assets/icons/skirt.svg';
import coatIcon from './../../assets/icons/coat.svg';
import accessoriesIcon from './../../assets/icons/accessories.svg';
import pantalonIcon from './../../assets/icons/pantalons.svg';
import tshirtIcon from './../../assets/icons/tshirt.svg';
import Typography from '@mui/material/Typography';



interface LeftPanelProps {
  onSearchChange: (value: string) => void;
  onButtonClick: (category: string) => void;
}

const LeftPanel = ({ onSearchChange, onButtonClick }: LeftPanelProps) => {
  const handleButtonClick = (category: string) => {
    onButtonClick(category);
  };


  return (
    <>
      <Box
        sx={{
          width: 350,
          display: 'flex',
          position: 'fixed',
          left: 0,
          top: 0,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#AFBEA6',
          height: '100vh',
        }}
      >
        <Box sx={{ marginTop: '130px' }}>
          <Searchbar onSearchChange={onSearchChange} />
        </Box>
        <Box sx={{ mt: '100px', }}>
          <Button
            sx={{ ml: '65px', mb: '30px', fontSize: '20px', textTransform: 'none', color: 'white' }}
            startIcon={<img src={tshirtIcon} alt="Tshirt Icon" />}
            onClick={() => handleButtonClick('top')}
          >
            <Typography color={'white.light'} variant="h2">Les Hauts</Typography>
          </Button>

          <Button
            sx={{ ml: '65px', mb: '30px', fontSize: '20px', textTransform: 'none', color: 'white' }}
            startIcon={<img src={pantalonIcon} alt="Pantalon Icon" />}
            onClick={() => handleButtonClick('pantalon')}
          >
            <Typography color={'white.light'} variant="h2">Les Pantalons</Typography>

          </Button>

          <Button
            sx={{ ml: '65px', mb: '30px', fontSize: '20px', textTransform: 'none', color: 'white' }}
            startIcon={<img src={dressIcon} alt="Dress Icon" />}
            onClick={() => handleButtonClick('robe')}
          >
            <Typography color={'white.light'} variant="h2">Les Robes</Typography>

          </Button>

          <Button
            sx={{ ml: '65px', mb: '30px', fontSize: '20px', textTransform: 'none', color: 'white' }}
            startIcon={<img src={skirtIcon} alt="Skirt Icon" />}
            onClick={() => handleButtonClick('jupe')}
          >
            <Typography color={'white.light'} variant="h2">Les Jupes</Typography>

          </Button>

          <Button
            sx={{ ml: '65px', mb: '30px', fontSize: '20px', textTransform: 'none', color: 'white' }}
            startIcon={<img src={coatIcon} alt="Coat Icon" />}
            onClick={() => handleButtonClick('manteau')}
          >
            <Typography color={'white.light'} variant="h2">Les Manteaux</Typography>

          </Button>

          <Button
            sx={{ ml: '65px', mb: '30px', fontSize: '20px', textTransform: 'none', color: 'white' }}
            startIcon={<img src={accessoriesIcon} alt="Accessories Icon" />}
            onClick={() => handleButtonClick('accessoire')}
          >
            <Typography color={'white.light'} variant="h2">Les Accessoires</Typography>

          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LeftPanel;

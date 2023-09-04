import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  fonts: {
    body: `'poppins', sans-serif`,
    heading: `'poppins', sans-serif`,
  },
  fontSizes: {
    xs: '13px',
    sm: '15px',
    md: '18px',
    lg: '20px',
    xl: '25px',
    '2xl': '28px',
    '3xl': '30px',
    '4xl': '48px',
    '5xl': '50px',
    '6xl': '64px',
  },
  colors: {
    white: {
      100: '#FFFFFF',
      200: '#F6F6F6',
      300: '#EFEFEF',
      400: '#C2C2C2',
    },
    grey: {
      100: '#EDEDED',
      200: '#C8C8C8',
      300: '#828282',
      600: '#504D4D',
    },
    green: {
      100: '#94C973',
      200: '#99AF8C',
    },
    red: {
      100: '#B6655F',
    },
  },
});
export default theme;

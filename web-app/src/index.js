import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/poppins';
import reportWebVitals from './reportWebVitals';
import AddArticle from './Components/AddArticlePage/AddArticle';
import MonCompte from './Components/MonComptePage/MonCompte';
import MotDePasse from './Components/ChangePassword/MotDePasse';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from 'Components/navbar/navbar';
import { ProductPage } from 'Components/ProductPage';
import ConnexionPage from 'Components/Connexion/ConnexionPage';
import Register from 'Components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConnexionPage />,
  },
  {
    path: '/mon-compte',
    element: <MonCompte />,
  },
  {
    path: '/password',
    element: <MotDePasse />,
  },
  {
    path: '/nav',
    element: <Navbar />,
  },
  {
    path: '/productPage',
    element: <ProductPage />,
  },
  {
    path: '/addArticle',
    element: <AddArticle />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

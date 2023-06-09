import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import Shape from '../assets/Shape';
import WhiteLogo from '../assets/WhiteLogo';
import { CardPanel } from './CardPanel';
import { Flex } from '@chakra-ui/react';

interface CardData {
  articleName: string;
  brand: string;
  picture: string;
  price: string;
  score: number;
  logo: string;
  environnementScore: number;
  ethicalScore: number;
  environnementDescription: string;
  ethicalDescription: string;
  brandDescription: string;
}

export function ProductPage() {
  //this is for the demo
  const picAdress =
    'https://cdn.shopify.com/s/files/1/0618/2082/9939/products/cinto_homme_gardenia_bleu_01_34e9e118-8483-4e77-80c5-a647b519ed55_1680x.jpg?v=1681471182';
  const picAdress2 =
    'https://n.nordstrommedia.com/id/sr3/8cc04dc2-833f-4fda-aea1-ef6654e58d6a.jpeg?h=365&w=240&dpr=2';
  const picAdress3 =
    'https://cdn.shopify.com/s/files/1/0470/0389/3911/products/43_29d4bd10-1137-427b-8e1b-9769782b64b4_1024x1024.jpg?v=1671789816';
  const logo = 'https://planetgrimpe.com/wp-content/uploads/2018/08/logo-1024x369.png';
  const logo2 = 'https://logo-marque.com/wp-content/uploads/2022/01/Nordstrom-Logo.png';
  const logo3 =
    'https://media.licdn.com/dms/image/C560BAQHwJ58QaxTVOA/company-logo_200_200/0/1610543448100?e=2147483647&v=beta&t=DzykBXbe-hm96ywU1KJlQjLR8ADBLhEcU81-ZuTsPRw';

  const cardData: CardData[] = [
    {
      articleName: 'CINTO',
      brand: 'Looking for wild',
      picture: picAdress,
      price: '37.50€',
      score: 75,
      logo: logo,
      environnementScore: 80,
      ethicalScore: 70,
      environnementDescription: 'Nos textiles sont 100% bretons et bio',
      ethicalDescription: 'Looking for wild est une marque Francaise',
      brandDescription: 'Des vêtements sport et tendance !',
    },
    {
      articleName: 'Le blanc classique',
      brand: 'NORDSTORM',
      picture: picAdress2,
      price: '22.99€',
      score: 60,
      logo: logo2,
      environnementScore: 40,
      ethicalScore: 80,
      environnementDescription: 'Nos vêtements sont entièrement assemblé en France',
      ethicalDescription: '100% de nos employés travaille sur le territoire Francais',
      brandDescription: 'La mode classique revisité',
    },
    {
      articleName: "L'indémodable",
      brand: 'Tranquille Emile',
      picture: picAdress3,
      price: '17.00€',
      score: 30,
      logo: logo3,
      environnementScore: 40,
      ethicalScore: 20,
      environnementDescription: 'Une attention est porté sur le choix du textile',
      ethicalDescription: 'Pas de geste notable pour le moment',
      brandDescription: "Etre stylé et cool, c'est notre but!",
    },
  ];
  //

  const [openedCardData, setOpenedCardData] = useState<CardData | null>(cardData[0]);
  const [openedCardIndex, setOpenedCardIndex] = useState<number | null>(0);

  const handleCardClick = (index: number) => {
    setOpenedCardData(cardData[index]);
    setOpenedCardIndex(index);
    console.log(index, openedCardIndex);
  };

  return (
    // <Flex justifyContent={'space-around'}>
    //   <Box
    //     width="800px"
    //     height="600px"
    //     borderWidth="3px"
    //     borderRadius="20px"
    //     overflow="hidden"
    //     bgColor="#F6F6F6"
    //     padding="2%"
    //   >
    <div className="page">
      <div className="shape-container">
        <Shape />
      </div>
      <div className="card-and-panel-container">
        <Flex>
          <div className="card-container">
            {cardData.map((card, index) => (
              <ProductCard
                key={index}
                articleName={card.articleName}
                brand={card.brand}
                picture={card.picture}
                price={card.price}
                score={card.score}
                logo={card.logo}
                isExpanded={index === openedCardIndex}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <div className="card-panel">
            {openedCardData && (
              <CardPanel
                environnementDescription={openedCardData.environnementDescription}
                environnementScore={openedCardData.environnementScore}
                ethicalDescription={openedCardData.ethicalDescription}
                ethicalScore={openedCardData.ethicalScore}
                brandDescription={openedCardData.brandDescription}
              />
            )}
          </div>
        </Flex>
      </div>
      <div className="title-container">
        <h1 className="title">LocalShirt</h1>
        <div className="white-logo">
          <WhiteLogo />
        </div>
      </div>
    </div>
    //   </Box>
    // </Flex>
  );
}

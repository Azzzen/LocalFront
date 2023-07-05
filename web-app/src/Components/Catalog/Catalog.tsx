import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import React, { Dispatch, SetStateAction } from 'react';
import DeleteModal from './DeleteModal';
import { Dispatcher } from './ItemCard';
export type Items = {
  title: string;
  photo: string;
  id: string;
  price: number;
  desc: string;
  score: number;
  color: string;
  lastbought: string;
  lastshown: string;
  lastclick: string;
};

export default function Catalog() {
  const [delItemId, setDelItemId] = useState('');

  const [items, setItems] = useState<Items[]>([
    {
      title: 'vetement',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
      id: '00000',
      price: 12.9,
      desc: 'vetement',
      score: 50,
      color: 'yellow',
      lastbought: '010223',
      lastshown: '010223',
      lastclick: '010223',
    },
    {
      title: 'vetement',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
      id: '00001',
      price: 15.9,
      desc: 'pantalon',
      score: 50,
      color: 'yellow',
      lastbought: '010223',
      lastshown: '010223',
      lastclick: '010223',
    },
    {
      title: 'vetement',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
      id: '00002',
      price: 12.9,
      desc: 'tshirt',
      score: 50,
      color: 'yellow',
      lastbought: '010223',
      lastshown: '010223',
      lastclick: '010223',
    },
  ]);

  useEffect(() => {
    if (delItemId.length > 0) {
      const newItemList = items.filter((item) => item.id !== delItemId);
      setItems(newItemList);
      setDelItemId('');
    }
  }, [delItemId]);
  return (
    <>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
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
        />
      ))}
    </>
  );
}

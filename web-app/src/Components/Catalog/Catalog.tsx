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
      title: 'marinière homme',
      photo:
        'https://www.cherwood.fr/4614-thickbox_default/mariniere-homme-cherbourgeois-bien-ancre.jpg',
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

import React from 'react';

import HeroList from './HeroesList';

function Heroes() {
  const heroesList = [
    {
      id: 10,
      name: 'Ella',
      lastName: 'Papa',
      description: 'fashionista',
    },
    {
      id: 20,
      name: 'Madelyn',
      lastName: 'Papa',
      description: 'the cat whisperer',
    }
  ]
  return <HeroList heroes={heroesList}/>;
}

export default Heroes;
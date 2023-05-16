import React, { useState } from 'react';

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
  ];
  const [selectedHero, setSelectedHero] = useState(null);
  
  function handleSelectHero(hero) {
    setSelectedHero(hero);
  }
  
  return (
    <div>
      <HeroList
        heroes={heroesList}
        handleSelectHero={handleSelectHero}
      />
      { selectedHero && ((<div>Hero Selected: {selectedHero.name}</div>))}
    </div>
  );
}

export default Heroes;
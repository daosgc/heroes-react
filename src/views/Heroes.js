import React, { useState } from 'react';

import HeroList from './HeroesList';
import HeroDetail from './HeroDetail';

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
  const [heroes, setHeroes] = useState(heroesList);
  
  function handleSelectHero(hero) {
    setSelectedHero(hero);
  }

  function handleSaveHero(hero) {
    updateHero(hero);
    handleCancelHero();
  }

  function handleDeleteHero(hero) {
    deleteHero(hero);
    handleCancelHero();
  }

  function handleCancelHero() {
    setSelectedHero(null);
  }

  function updateHero(hero) {
    const newHeroes= heroes.map((h) => {
      if (h.id === hero.id) {
        return { ...h, ...hero};
      }
      return h;
    });
    setHeroes(newHeroes)
  }

  function deleteHero(hero) {
    const newHeroes= heroes.filter((h) => h.id !== hero.id);
    setHeroes(newHeroes)
  }
  
  return (
    <div>
      <HeroList
        heroes={heroes}
        handleSelectHero={handleSelectHero}
        handleDeleteHero={handleDeleteHero}
      />
      { selectedHero && (
        <HeroDetail
          hero={selectedHero}
          handleCancelHero={handleCancelHero}
          handleSaveHero={handleSaveHero}
        />)
      }
    </div>
  );
}

export default Heroes;
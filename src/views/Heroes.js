import React, { useEffect, useState } from 'react';

import HeroList from './HeroesList';
import HeroDetail from './HeroDetail';
import { loadHeroesApi } from '../data/hero.api';

function Heroes() {
  const [selectedHero, setSelectedHero] = useState(null);
  const [heroes, setHeroes] = useState([]);
  
  function handleSelectHero(hero) {
    setSelectedHero(hero);
  }

  function handleSaveHero(hero) {
    updateHero(hero);
    handleCancelHero();
  }

  useEffect(() => {
    const getHeroes = async () => {
      const heroes = await loadHeroesApi();
      setHeroes(heroes);
    };
    getHeroes();
  }, []);

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
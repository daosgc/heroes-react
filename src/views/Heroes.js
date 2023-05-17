import React, { useEffect, useState } from 'react';

import HeroList from './HeroesList';
import HeroDetail from './HeroDetail';
import { loadHeroesApi } from '../data/hero.api';
import { Switch, Route } from 'react-router-dom';

function Heroes({ history }) {
  const [selectedHero, setSelectedHero] = useState(null);
  const [heroes, setHeroes] = useState([]);
  
  function handleSelectHero(hero) {
    setSelectedHero(hero);
    history.push(`/heroes/${hero.id}`);
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
    history.push('/');
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
    <div className="columns is-multiline is-variable">
      <div className="column is-8">
        <Switch>
          <Route
            exact
            path="/heroes"
            component={() => (
              <HeroList
                heroes={heroes}
                selectedHero={selectedHero}
                handleSelectHero={handleSelectHero}
                handleDeleteHero={handleDeleteHero}
              />
            )}
          />
          <Route
            exact
            path="/heroes/:id"
            component={() => {
              return (
                <HeroDetail
                  hero={selectedHero}
                  handleCancelHero={handleCancelHero}
                  handleSaveHero={handleSaveHero}
                />
              );
            }}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Heroes;
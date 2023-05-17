import React, { useEffect, useState } from 'react';

import HeroList from './HeroesList';
import HeroDetail from './HeroDetail';
import { loadHeroesApi } from '../data/hero.api';
import { Switch, Route } from 'react-router-dom';
import { updateHeroApi, deleteHeroApi } from '../data/hero.api';

function Heroes({ history }) {
  const [heroes, setHeroes] = useState([]);
  
  function handleSelectHero(hero) {
    history.push(`/heroes/${hero.id}`);
  }

  async function handleSaveHero(hero) {
    const updatedHero = await updateHeroApi(hero);
    updateHero(updatedHero);
    handleCancelHero();
  }

  useEffect(() => {
    const getHeroes = async () => {
      const heroes = await loadHeroesApi();
      setHeroes(heroes);
    };
    getHeroes();
  }, []);

  async function handleDeleteHero(hero) {
    const deletedHero = await deleteHeroApi(hero);
    deleteHero(deletedHero);
    handleCancelHero();
  }

  function handleCancelHero() {
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
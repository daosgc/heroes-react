import React, { useState } from 'react';

import { ButtonFooter, InputDetail } from '../components';

function HeroDetail({
  hero: initHero,
  handleCancelHero,
  handleSaveHero,
}) {
  const [hero, setHero] = useState(Object.assign({}, initHero));

  function handleSave() {
    const chgHero = { ...hero, id: hero.id || null };
    handleSaveHero(chgHero);
  }

  function handleNameChange(e) {
    setHero({ ...hero, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setHero({ ...hero, description: e.target.value });
  }

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {hero.name}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {hero.id && <InputDetail name="id" value={hero.id} readOnly="true" />}
          <InputDetail
            name="name"
            value={hero.name}
            placeholder="e.g Colleen"
            onChange={handleNameChange}
          />
          <InputDetail
            name="description"
            value={hero.description}
            placeholder="e.g dance fight!"
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <footer className="card-footer">
        <ButtonFooter
          className="cancel-button"
          onClick={handleCancelHero}
          label="Cancel"
        />
        <ButtonFooter
          className="save-button"
          onClick={handleSave}
          label="Save"
        />
      </footer>
    </div>
  );
}

export default HeroDetail;

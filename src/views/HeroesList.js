import React from 'react';

import { ButtonFooter, HeroeCard } from '../components';

function HeroList({ heroes }) {
  return (
    <ul className="list">
      {heroes.map((hero, index) => (
        <li key={hero.id} role="presentation">
          <div className="card">
            <HeroeCard name={hero.name} description={hero.description} />
            <footer className="card-footer">
              <ButtonFooter
                className="delete-item"
                label="Delete"
                dataIndex={index}
                dataId={hero.id}
              />
              <ButtonFooter
                className="edit-item"
                label="Edit"
                dataIndex={index}
                dataId={hero.id}
              />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HeroList;

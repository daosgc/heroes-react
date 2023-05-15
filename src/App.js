import React from 'react';

import NavBar from './components/NavBar';

import './styles/index.scss';

function App() {
  return (
    <div className="section columns">
      <NavBar />
      <main className="column">
        Routing Views.!
      </main>
    </div>
  );
}

export default App;

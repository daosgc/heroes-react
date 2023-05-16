import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import NavBar from './components/NavBar';

import About from './views/About';
import NotFound from './views/NotFound';

import './styles/index.scss';

// Lazy loading
const Heroes = withRouter(
  lazy(() => import(/* webpackChunkName: "heroes" */ './views/Heroes'))
);

function App() {
  return (
    <div className="section columns">
      <NavBar />
      <main className="column">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect from="/" exact to="/heroes" />
            <Route path="/heroes" component={Heroes} />
            <Route path="/about" component={About} />
            <Route exact path="**" component={NotFound} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import { GalaxisCard } from 'galaxis-components';
import { useEffect, useState } from 'react';
import { getFilteredCards } from './ApiTester';
import { DustPools } from 'galaxis-components';
import { HashRouter, Route, Switch} from 'react-router-dom';
import routes from './Routes';


function App() {
  
  return (
    <>
      <HashRouter>
        <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;

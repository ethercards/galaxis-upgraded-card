import './App.css';
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

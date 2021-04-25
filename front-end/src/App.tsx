import { FC } from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Info from './components/Info';
import Navigation from "./components/shared/Navigation";

const defaultQuery = 'bleach';

const App: FC = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');
  useEffect(() => {
    setCurrentQuery(defaultQuery);
  }, [])
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route 
          path='/register'>

        </Route>
        <Route 
          path='/likes'>
          
        </Route>
        <Route 
          path='/account'>
          
        </Route>
        <Route 
          path='/info/:mal_id'>
          <Info/>
        </Route>
        <Route 
          path='/'>
          <Home 
            query={query}
            setQuery={setQuery}
            defaultQuery={defaultQuery} 
            currentQuery={currentQuery}
            setCurrentQuery={setCurrentQuery}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

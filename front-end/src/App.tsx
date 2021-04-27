import { FC } from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Info from './components/Info';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from "./components/shared/Navigation";

const defaultQuery = 'bleach';

const App: FC = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false); 
  useEffect(() => {
    setCurrentQuery(defaultQuery);
  }, [])
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route 
          path='/login'>
          {
            userLoggedIn?
            <Redirect to="/account"/>:
            <Login setUserLoggedIn={setUserLoggedIn}/>
          }
        </Route>
        <Route 
          path='/register'>
          {
            userLoggedIn?
            <Redirect to="/account"/>:
            <Register setUserLoggedIn={setUserLoggedIn}/>
          }
        </Route>
        <Route 
          path='/account'>
          {
            userLoggedIn?
            <Account setUserLoggedIn={setUserLoggedIn}/>:
            <Redirect to="/login"/>
          }
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

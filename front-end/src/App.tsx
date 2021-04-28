import { FC, useState, useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Info from './components/Info';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from "./components/shared/Navigation";
import { QueryContextInterface } from "./interfaces/QueryContextInterface";
import { queryInitialState } from "./modules/reducers/queryInitialState";
import { queryReducer } from "./modules/reducers/queryReducer";
import { useEffect } from "react";

export const QueryContext = createContext<QueryContextInterface>({ queryState: queryInitialState, queryDispatch: () => queryInitialState });

const App: FC = (): JSX.Element => {
  const [queryState, queryDispatch] = useReducer(queryReducer, queryInitialState);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false); 
  useEffect(() => {
    if(sessionStorage.getItem('jwtToken'))
      setUserLoggedIn(true);
  }, [])
  return (
    <Router>
      <QueryContext.Provider value={{ queryState, queryDispatch }}>
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
            <Home/>
          </Route>
        </Switch>
      </QueryContext.Provider>
    </Router>
  );
}

export default App;

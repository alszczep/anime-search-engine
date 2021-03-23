import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

const DEFAULT_QUERY = 'bleach';

const App = () => {
  const [url, setUrl] = useState(`https://api.jikan.moe/v3/search/anime?q=${DEFAULT_QUERY}`);
  const [data, setData] = useState();
  const [query, setQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');
  const getData = useCallback(async() => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }, [url]) 
  useEffect(() => {
    getData()
  }, [url, getData]);
  useEffect(() => {
    setCurrentQuery(DEFAULT_QUERY);
  }, [])
  return (<Router>
    <Header/>
    <Switch>
      <Route path='/info/:mal_id'>
        <Info/>
      </Route>
      <Route path='/'>
        <SearchBar setUrl={setUrl} query={query} setQuery={setQuery} setCurrentQuery={setCurrentQuery}/>
        <Results data={data} currentQuery={currentQuery}/>
      </Route>
    </Switch>
  </Router>);
}

export default App;

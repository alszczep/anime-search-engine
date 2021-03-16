import { useState } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [data, setData] = useState([]);
  return (<>
      <SearchBar/>
      <Results data={data}/>
  </>);
}

export default App;

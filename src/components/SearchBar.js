import { useRef, useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const searchBarElement = useRef(null);
    const onQueryChange = () => {
        setQuery(searchBarElement.current.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        console.log(query);
    };
    return (<div className='searchBar'>
        <form>
            <input type='text' value={query} ref={searchBarElement} onChange={onQueryChange}/>
            <input type='submit' onClick={submitSearch}/>
        </form>
    </div>);
};

export default SearchBar;
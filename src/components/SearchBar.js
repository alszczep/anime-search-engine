import { useRef, useState } from "react";

const SearchBar = ({ setUrl, query, setQuery, setCurrentQuery }) => {
    const searchBarElement = useRef(null);
    const onQueryChange = () => {
        setQuery(searchBarElement.current.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        setUrl(`https://api.jikan.moe/v3/search/anime?q=${query}`);
        setCurrentQuery(query);
    };
    return (<section className='searchBar'>
        <form>
            <input type='text' value={query} ref={searchBarElement} onChange={onQueryChange}/>
            <input type='submit' value='search' onClick={submitSearch}/>
        </form>
    </section>);
};

export default SearchBar;
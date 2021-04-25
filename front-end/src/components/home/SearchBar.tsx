import { FC } from "react";
import { useRef } from "react";
import { onQueryChange } from "../../modules/home/on-query-change";
import { onSearchSubmit } from "../../modules/home/on-search-submit";
import searchIcon from './../../images/search_icon.svg';

const SearchBar: FC<any> = ({ setUrl, query, setQuery, currentQuery, setCurrentQuery, setSearchData }): JSX.Element => {
    const searchBarRef = useRef<HTMLInputElement>(null);
    return (
        <section className='search-bar'>
            <form
                className='search-bar__form'>
                <input 
                    className='search-bar__input search-bar__input--text'
                    type='text' 
                    value={query} 
                    ref={searchBarRef} 
                    onChange={() => {onQueryChange(searchBarRef, setQuery)}}/>
                <input 
                    className='search-bar__input search-bar__input--submit'
                    type='image' 
                    src={searchIcon} 
                    alt='search' 
                    onClick={(event: any) => {onSearchSubmit(event, query, setUrl, currentQuery, setCurrentQuery, setSearchData)}}/>
            </form>
        </section>
    );
};

export default SearchBar;
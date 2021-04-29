import { useContext } from "react";
import { FC } from "react";
import { useRef } from "react";
import { QueryContext } from "../../App";
import { onQueryChange } from "../../modules/home/on-query-change";
import { onSearchSubmit } from "../../modules/home/on-search-submit";
import searchIcon from './../../images/search_icon.svg';

const SearchBar: FC<{setSearchData: React.Dispatch<any>}> = ({ setSearchData }): JSX.Element => {
    const { queryState, queryDispatch } = useContext(QueryContext);
    const searchBarRef = useRef<HTMLInputElement>(null);
    return (
        <section className='search-bar'>
            <form
                className='search-bar__form'>
                <input 
                    className='search-bar__input search-bar__input--text'
                    type='text' 
                    value={queryState.query} 
                    ref={searchBarRef} 
                    onChange={() => { onQueryChange(searchBarRef, queryDispatch) }}/>
                <input 
                    className='search-bar__input search-bar__input--submit'
                    type='image' 
                    src={searchIcon} 
                    alt='search' 
                    onClick={(event: any) => { onSearchSubmit(event, queryState, queryDispatch, setSearchData) }}/>
            </form>
        </section>
    );
};

export default SearchBar;
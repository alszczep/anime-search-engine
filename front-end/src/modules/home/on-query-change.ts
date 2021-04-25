export const onQueryChange = (searchBarRef: React.RefObject<HTMLInputElement>, setQuery: React.Dispatch<React.SetStateAction<string>>) => {
    if(searchBarRef && searchBarRef.current)
        setQuery(searchBarRef.current.value);
};
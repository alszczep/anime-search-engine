export const onSearchSubmit = (event: any, query: string, setUrl: React.Dispatch<React.SetStateAction<string>>, currentQuery: string, setCurrentQuery: React.Dispatch<React.SetStateAction<string>>, setSearchData: React.Dispatch<any>) => {
    event.preventDefault();
    if(query.length >= 3){
        if(query !== currentQuery){
            setUrl(`https://api.jikan.moe/v3/search/anime?q=${query}`);
            setCurrentQuery(query);
            setSearchData(undefined);
        }
    }else{
        alert('Query has to be at least 3 characters long');
    }
};
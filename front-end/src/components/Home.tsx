import { FC, useCallback, useEffect, useState } from "react";
import ResultCard from './home/ResultCard';
import Loading from './shared/Loading';
import Error from './shared/Error';
import SearchBar from "./home/SearchBar";
import Filters from "./home/Filters";
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from "../modules/fetch-data";

const Home: FC<any> = ({ query, setQuery, defaultQuery, currentQuery, setCurrentQuery }): JSX.Element => {
    const [url, setUrl] = useState<string>(`https://api.jikan.moe/v3/search/anime?q=${currentQuery? currentQuery: defaultQuery}`);
    const [data, setData] = useState<any>();
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET'));
    }, [url]) 
    useEffect(() => {
        getData()
    }, [url, getData]);
    if(data && data.results && data.results.length > 0)
        return ( 
            <section className='home'>
                <SearchBar
                    setUrl={setUrl}
                    query={query} 
                    setQuery={setQuery} 
                    currentQuery={currentQuery}
                    setCurrentQuery={setCurrentQuery}
                    setSearchData={setData}/>
                <Filters/>
                <h1
                    className='home__query'>
                    results for: '{currentQuery}'
                </h1>
                {
                    data.results.map((item: any) => {
                        return (
                            <ResultCard 
                                data={item}
                                key={uuidv4()}/>
                        )
                    })
                }
            </section>
        )
    if(data === undefined)
        return (
            <Loading 
                elementClass={'home'}
                children={<SearchBar/>}/>
        )
    if(data === null)
        return (
            <Error 
                elementClass={'home'}
                children={<SearchBar/>}/>
        )
    return (
        <Error 
            elementClass={'home'}
            error={'There is no data matching the query.'}
            children={<SearchBar/>}/>
    )
};

export default Home;
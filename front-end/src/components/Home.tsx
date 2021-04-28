import { FC, useCallback, useEffect, useState } from "react";
import ResultCard from './home/ResultCard';
import Loading from './shared/Loading';
import Error from './shared/Error';
import SearchBar from "./home/SearchBar";
import Filters from "./home/Filters";
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from "../modules/fetch-data";
import { useContext } from "react";
import { QueryContext } from "../App";

const url = 'http://localhost:5000/api/anime/search'

const Home: FC<any> = (): JSX.Element => {
    const { currentQuery } = useContext(QueryContext).queryState;
    const [data, setData] = useState<any>();
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'POST', { query: currentQuery }));
    }, [currentQuery]) 
    useEffect(() => {
        getData()
    }, [getData]);
    if(data && data.length > 0)
        return ( 
            <>
                <SearchBar
                    setSearchData={setData}/>
                <Filters/>
                <section className='home'>
                    <h1
                        className='home__query'>
                        results for: '{currentQuery}'
                    </h1>
                    {
                        data.map((item: any) => {
                            return (
                                <ResultCard 
                                    data={item}
                                    key={uuidv4()}/>
                            )
                        })
                    }
                </section>
            </>
        )
    if(data === undefined)
        return (
            <Loading 
                elementClass={'main'}/>
        )
    if(data === null)
        return (
            <Error 
                elementClass={'main'}/>
        )
    return (
        <Error 
            elementClass={'main'}
            error={'There is no data matching the query.'}/>
    )
};

export default Home;
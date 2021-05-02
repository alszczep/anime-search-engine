import { FC, useCallback, useEffect, useState } from "react";
import ResultCard from './home/ResultCard';
import Loading from './shared/Loading';
import Error from './shared/Error';
import SearchBar from "./home/SearchBar";
import Modal from './shared/Modal';
import Filters from "./home/Filters";
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from "../modules/fetch-data";
import { useContext } from "react";
import { QueryContext } from "../App";

const url = '/api/anime/search';

const Home: FC<any> = (): JSX.Element => {
    const { currentQuery } = useContext(QueryContext).queryState;
    const [data, setData] = useState<any>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [adultContent, setAdultContent] = useState<boolean>(false);
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'POST', { query: currentQuery, adult_content: adultContent }));
    }, [currentQuery, adultContent]) 
    useEffect(() => {
        getData()
    }, [getData]);
    return ( 
        <>
            <SearchBar
                setSearchData={setData}/>
            <section 
                className='filters-home'>
                <button
                    className='filters-home__button'
                    onClick={() => { setIsModalOpen(true) }}>
                    Filters
                </button>
                <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                header={'Filters'}
                content={
                    <Filters
                        adultContent={adultContent}
                        setAdultContent={setAdultContent}
                        setData={setData}/>
                }/>
            </section>
            <section className='home'>
                <h1
                    className='home__query'>
                    results for: '{currentQuery}'
                </h1>
                {   
                    (data && data.length > 0)?
                    (
                        data.map((item: any) => {
                            return (
                                <ResultCard 
                                    data={item}
                                    key={uuidv4()}/>
                            )
                        })
                    ):
                    (data === null)?
                    (
                        <Error 
                            elementClass={''}/>
                    ):
                    (data === undefined)?
                    (
                        <Loading 
                            elementClass={''}/>
                    ):
                    (
                        <Error 
                            elementClass={''}
                            error={'There is no data matching the query.'}/>
                    )

                }
            </section>
        </>
    )
};

export default Home;
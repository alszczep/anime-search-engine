import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import DropDownList from "./info/DropDownList";
import EpisodesDropDownList from "./info/EpisodesDropDownList";
import Error from "./shared/Error";
import Loading from "./shared/Loading";
import TitleBox from "./info/TitleBox";
import Description from "./info/Description";
import Ranks from "./info/Ranks";
import { fetchData } from "../modules/fetch-data";
import { changeEpisodesPage } from "../modules/info/change-episodes-page";
import { createContext } from "react";

export const InfoContext: any = createContext({});

const Info: FC<any> = (): JSX.Element => {
    const { mal_id } = useParams<any>();
    const [url] = useState<string>(`https://api.jikan.moe/v3/anime/${mal_id}`);
    const [data, setData] = useState<any>();
    const [episodesPage, setEpisodesPage] = useState<number>(1);
    const [episodes, setEpisodes] = useState<any>([]);
    const refs = {
        openings: {
            ref: useRef<HTMLUListElement>(null),
            imageRef: useRef<HTMLHeadingElement>(null)
        },
        endings: {
            ref: useRef<HTMLUListElement>(null),
            imageRef: useRef<HTMLHeadingElement>(null)
        },
        episodes: {
            ref: useRef<HTMLUListElement>(null),
            imageRef: useRef<HTMLHeadingElement>(null),
            pageRef: useRef<HTMLSelectElement>(null)
        },
    }

    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET'));
    }, [url]);
    useEffect(() => {
        getData();
    }, [url, getData]);
    const getEpisodes = useCallback(async() => {
        setEpisodes(await fetchData(`https://api.jikan.moe/v3/anime/${mal_id}/episodes/${episodesPage}`, 'GET'));
    }, [episodesPage, mal_id]);
    useEffect(() => {
        getEpisodes();
    }, [episodesPage, getEpisodes]);
    if(data && data.title && episodes && episodes.episodes)  
        return (
            <InfoContext.Provider value={{infoState: {}, infoDispatch: {}, refs}}>
                <section 
                    className='info main'>
                    <TitleBox 
                        data={data}/>
                    <article
                        className='info__main-box'>
                        <Description synopsis={data.synopsis}/>
                        <Ranks
                            score={data.score}
                            rank={data.rank}/>
                        <DropDownList 
                            headerText={'Openings'}
                            data={data.opening_themes}/>
                        <DropDownList 
                            headerText={'Endings'}
                            data={data.ending_themes}/>
                        <DropDownList 
                            headerText={'Episodes'}
                            data={episodes.episodes}
                            children={
                                <EpisodesDropDownList 
                                    episodes={episodes}
                                    episodesPage={episodesPage}
                                    changeEpisodesPage={() => {changeEpisodesPage(setEpisodesPage, refs.episodes.pageRef)}}/>
                            }/>
                    </article>
                </section>
            </InfoContext.Provider>
        );
    if(data === null)
        return (
            <Error elementClass={'info'}/>
        );            
    return (
        <Loading elementClass={'info'}/>
    );
};

export default Info;
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
import { toggleElement } from "../modules/info/toggle-element";
import { changeEpisodesPage } from "../modules/info/change-episodes-page";

const Info: FC<any> = () => {
    const { mal_id } = useParams<any>();
    const [url] = useState<string>(`https://api.jikan.moe/v3/anime/${mal_id}`);
    const [data, setData] = useState<any>();
    const [episodesPage, setEpisodesPage] = useState<number>(1);
    const [episodesUrl, setEpisodesUrl] = useState<string>(`https://api.jikan.moe/v3/anime/${mal_id}/episodes/${episodesPage}`);
    const [episodes, setEpisodes] = useState<any>([]);
    const openingsRef = useRef<HTMLUListElement>(null);
    const endingsRef = useRef<HTMLUListElement>(null);
    const episodesRef = useRef<HTMLUListElement>(null);
    const openingsImageRef = useRef<HTMLHeadingElement>(null);
    const endingsImageRef = useRef<HTMLHeadingElement>(null);
    const episodesImageRef = useRef<HTMLHeadingElement>(null);
    const episodesPageRef = useRef<HTMLSelectElement>(null);
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET'));
    }, [url]);
    useEffect(() => {
        getData();
    }, [url, getData]);
    useEffect(() => {
        setEpisodesUrl(`https://api.jikan.moe/v3/anime/${mal_id}/episodes/${episodesPage}`);
    }, [episodesPage, mal_id])
    const getEpisodes = useCallback(async() => {
        setEpisodes(await fetchData(episodesUrl, 'GET'));
    }, [episodesUrl]);
    useEffect(() => {
        getEpisodes();
    }, [episodesUrl, getEpisodes]);
    if(data && data.title && episodes && episodes.episodes)  
        return (
            <section 
                className='info'>
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
                        data={data.opening_themes}
                        toggleElement={toggleElement}
                        elementRef={openingsRef}
                        imageRef={openingsImageRef}
                        episodesPageRef={episodesPageRef}/>
                    <DropDownList 
                        headerText={'Endings'}
                        data={data.ending_themes}
                        toggleElement={toggleElement}
                        elementRef={endingsRef}
                        imageRef={endingsImageRef}
                        episodesPageRef={episodesPageRef}/>
                    <DropDownList 
                        headerText={'Episodes'}
                        data={episodes.episodes}
                        toggleElement={toggleElement}
                        elementRef={episodesRef}
                        imageRef={episodesImageRef}
                        episodesPageRef={episodesPageRef}
                        children={
                            <EpisodesDropDownList 
                                episodesPage={episodesPage}
                                episodesPageRef={episodesPageRef}
                                changeEpisodesPage={() => {changeEpisodesPage(mal_id, setEpisodesPage, episodesPageRef)}}
                                episodes={episodes}/>
                        }/>
                </article>
            </section>
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
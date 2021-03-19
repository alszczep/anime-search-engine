import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import arrowIcon from "./../arrow_icon.svg";


const Info = () => {
    const { mal_id } = useParams();
    const [url, setUrl] = useState(`https://api.jikan.moe/v3/anime/${mal_id}`);
    const [data, setData] = useState();
    const [episodesPage, setEpisodesPage] = useState(1);
    const [episodesUrl, setEpisodesUrl] = useState(`https://api.jikan.moe/v3/anime/${mal_id}/episodes/${episodesPage}`);
    const [episodes, setEpisodes] = useState([]);
    const openingsRef = useRef(null);
    const endingsRef = useRef(null);
    const episodesRef = useRef(null);
    const openingsImageRef = useRef(null);
    const endingsImageRef = useRef(null);
    const episodesImageRef = useRef(null);
    const episodesPageRef = useRef(null);
    const getData = useCallback(async() => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }, [url]);
    useEffect(() => {
        getData();
    }, [url, getData]);
    const getEpisodes = useCallback(async() => {
        const response = await fetch(episodesUrl);
        const result = await response.json();
        setEpisodes(result);
    }, [episodesUrl]);
    useEffect(() => {
        getEpisodes();
        if(episodesPageRef.current)
            setEpisodesPage(episodesPageRef.current.value);
    }, [episodesUrl, getEpisodes]);
    const changeEpisodesPage = () => {
        setEpisodesUrl(`https://api.jikan.moe/v3/anime/${mal_id}/episodes/${episodesPageRef.current.value}`);
    };
    const toggleElement = (elementRef, imageRef) => {
        return () => {
            if(elementRef.current.style.display === 'none' || !elementRef.current.style.display){
                elementRef.current.style.display = 'block';
                imageRef.current.classList.add('fliped');
            }
            else{
                elementRef.current.style.display = 'none';
                imageRef.current.classList.remove('fliped');
            }
            if(elementRef.current.classList.contains('episodes'))
                episodesPageRef.current.style.display = elementRef.current.style.display;
        }
    };
    if(data && data.title && episodes && episodes.episodes)  
        return (<section className='info'>
            <aside className='titleBox'>
                <h1>{data.title}</h1>
                <img src={data.image_url} alt={data.title}/>
                <h4>Status: {data.airing ? 'Airing' : 'Finished Airing'}</h4>
                <h4>Aired: {data.aired.string}</h4>
                <h4>Broadcast: {data.broadcast}</h4>
                <h4>Duration: {data.duration}</h4>
                <h4 className='tags'>
                    Tags:
                    {data.genres.map((item) => {
                       return (<p key={item.mal_id}>{item.name}</p>);
                    })}
                </h4>
            </aside>
            <article>
                <section>
                    <h3>Description</h3>
                    <p>{data.synopsis}</p>
                </section>
                <section>
                    <h3 onClick={toggleElement(openingsRef, openingsImageRef)}><img ref={openingsImageRef} className='arrowIcon' src={arrowIcon} alt='arrow'/>Openings</h3>
                    <ul ref={openingsRef}>
                        {data.opening_themes.map((item, index) => {
                                return <li key={1000 + index}>{item}</li>;
                        })}
                    </ul>
                </section>
                <section>
                    <h3 onClick={toggleElement(endingsRef, endingsImageRef)}><img ref={endingsImageRef} className='arrowIcon' src={arrowIcon} alt='arrow'/>Endings</h3>
                    <ul ref={endingsRef}>
                        {data.ending_themes.map((item, index) => {
                                return <li key={2000 + index}>{item}</li>;
                        })}
                    </ul>
                </section>
                <section>
                    <section className='episodesHeader'>
                        <h3 onClick={toggleElement(episodesRef, episodesImageRef)}><img ref={episodesImageRef} className='arrowIcon' src={arrowIcon} alt='arrow'/>Episodes</h3>
                        <select ref={episodesPageRef} onChange={changeEpisodesPage}>
                            {Array.apply(null, {length: episodes.episodes_last_page}).map((item, index) => {
                                return <option key={3000 + index} value={index+1}>{index+1}</option>;
                            })}
                        </select>
                    </section>
                    <ul ref={episodesRef} className='episodes'>
                        {episodes.episodes.map((item) => {
                                return <li key={item.episode_id}>{item.episode_id}. {item.title}</li>;
                        })}
                    </ul>
                </section>
            </article>
        </section>);
    return (<section className='info'>
        <h1>Loading</h1>
    </section>);
};

export default Info;
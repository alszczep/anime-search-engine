import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";


const Info = () => {
    const { mal_id } = useParams();
    const [url, setUrl] = useState(`https://api.jikan.moe/v3/anime/${mal_id}`);
    const [data, setData] = useState();
    const getData = useCallback(async() => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }, [url]) 
    useEffect(() => {
        getData();
    }, [url, getData]);
    console.log(data);
    if(data && data.title)  
        return (<section className='info'>
            <aside className='titleBox'>
                <h1>{data.title}</h1>
                <img src={data.image_url} alt={data.title}/>
                <h4>Status: {data.airing ? 'Airing' : 'Finished Airing'}</h4>
                <h4>Aired: {data.aired.string}</h4>
            </aside>
        </section>);
    return (<section className='info'>
        <h1>Loading</h1>
    </section>);
};

export default Info;
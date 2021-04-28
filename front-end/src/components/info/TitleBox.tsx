import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

const TitleBox: FC<any> = ({ data }): JSX.Element => {
    return (
        <aside 
            className='info__title-box'>
            <h1
                className='info__title'>
                {data.title}
            </h1>
            <img 
                className='info__image'
                src={data.image_url} 
                alt={data.title}/>
            <h4
                className='info__header info__header--status'>
                Status: {data.airing ? 'Airing' : 'Finished Airing'}
            </h4>
            <h4
                className='info__header info__header--aired'>
                Aired: {data.aired}
            </h4>
            <h4
                className='info__header info__header--broadcast'>
                Broadcast: {data.broadcast? data.broadcast: 'none'}
            </h4>
            <h4
                className='info__header info__header--duration'>
                Duration: {data.duration}
            </h4>
            <section
                className='info__tags'>
                <h4 
                    className='info__tags-header'>
                    Tags:
                </h4>
                {
                    data.genres.map((item: string) => {
                        return (
                            <p 
                                className='info__tag'
                                key={uuidv4()}>
                                {item}
                            </p>
                        );
                    })
                }
            </section>
            <h4 
                className='info__mal-link-wrapper'>
                <a 
                    className='info__mal-link'
                    href={data.mal_url}
                    target='_blank'
                    rel='noreferrer'>
                    MyAnimeList
                </a>
            </h4>
        </aside>
    )
};

export default TitleBox;
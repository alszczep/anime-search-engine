import { Link } from "react-router-dom";
import { FC } from 'react';

const ResultCard: FC<any> = ({ data }) => {
    return (
        <section 
            className='result-card'>
            <Link 
                className='result-card__link'
                to={{pathname: `/info/${data.mal_id}`}}>
                <h2
                    className='result-card__header'>
                    {data.title}
                </h2>
                <img 
                    className='result-card__image'
                    src={data.image_url} 
                    alt={data.mal_id}/>
            </Link>
        </section>
    );
};
export default ResultCard;
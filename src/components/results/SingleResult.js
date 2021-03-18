import { Link } from "react-router-dom";
const SingleResult = ({ data }) => {
    return (<section className='singleResult'>
        <Link to={{pathname: `/info/${data.mal_id}`}} className='link'>
            <h2>{data.title}</h2>
            <img src={data.image_url} alt={data.mal_id}/>
        </Link>
    </section>);
};
export default SingleResult;
import SingleResult from "./results/SingleResult";

const Results = ({ data, currentQuery }) => {
    return (<section className='results'>
        <h1>results for: {currentQuery}</h1>
        {data? data.results.map((item) => {
            return <SingleResult key={item.mal_id} data={item}/>
        }): 'LOADING'}
    </section>);
};

export default Results;
import { FC } from "react";

const Ranks: FC<any> = ({ score, rank }): JSX.Element => {
    return (
        <section 
            className='info__ranks'>
            <section 
                className='info__score'>
                <p 
                    className='info__score-number info__score-number--score'>
                    {score}
                </p>
                <p 
                    className='info__score-desc info__score-desc--score'>
                    score
                </p>
            </section>
            <section 
                className='info__rank'>
                <p 
                    className='info__score-number info__score-number--rank'>
                    #{rank}
                </p>
                <p 
                    className='info__score-desc info__score-desc--rank'>
                    rank
                </p>
            </section>
        </section>
    )
};

export default Ranks;
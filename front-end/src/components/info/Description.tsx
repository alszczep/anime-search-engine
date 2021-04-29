import { FC } from "react";

const Description: FC<{synopsis: string}> = ({ synopsis }): JSX.Element => {
    return (
        <section 
            className='info__description'>
            <h3
                className='info__description-header'>
                Description
            </h3>
            <p
                className='info__description-content'>
                {synopsis}
            </p>
        </section>
    )
};

export default Description;
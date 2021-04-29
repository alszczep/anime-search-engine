import { FC } from 'react';
import { FiltersPropsInterface } from '../../interfaces/props/FiltersPropsInterface';

const Filters: FC<FiltersPropsInterface> = ({ adultContent, setAdultContent, setData }): JSX.Element => {
    return (
        <section
            className='filters'>
            <label
                className='filters__label'>
                <input
                    className='filters__checkbox'
                    type='checkbox'
                    checked={adultContent}
                    onChange={() => { setAdultContent(!adultContent); setData(undefined) }}/>
                Adult content (R, R+, Rx)
            </label>
        </section>
    );
};
export default Filters;
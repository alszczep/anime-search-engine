import { FC } from 'react';

const Filters: FC<any> = ({ data }): JSX.Element => {
    return (
        <section 
            className='filters-wrapper'>
            <form
                className='filters'>
                    <section
                        className='filters__filter-wrapper'>
                    <input 
                        className='filters__filter'
                        type='checkbox'/>
                    <label
                        className='filters__label'>
                        make it into modal
                    </label>
                </section>
            </form>
        </section>
    );
};
export default Filters;
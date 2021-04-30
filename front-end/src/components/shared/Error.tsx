import { FC } from 'react';

const Error: FC<{elementClass: string, error?: string, children?: any}> = ({ elementClass, error, children }): JSX.Element => {
    return (
        <section className={`error ${elementClass}`}>
            {children}
            <h1
                className='error__header'>
                {
                    error || 'An error occured, please try reloading the website and check your internet connection. If problem still occurs contact an administrator.'
                }        
            </h1>
        </section>
    )
}

export default Error;
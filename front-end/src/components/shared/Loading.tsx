import { FC } from 'react';

const Loading: FC<{elementClass: string, children?: any}> = ({ elementClass, children }): JSX.Element => {
    return (
        <section className={`loading ${elementClass}`}>
            {children}
            <h1
                className='loading__header'>
                Loading...
            </h1>
        </section>
    )
}

export default Loading;
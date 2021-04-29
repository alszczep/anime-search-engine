import { FC, useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchData } from "../../modules/fetch-data";
import { v4 as uuidv4 } from 'uuid';
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const url = 'http://localhost:5000/api/user/list';

const YourList: FC<any> = (): JSX.Element => {
    const [data, setData] = useState<any>(undefined);
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET', undefined, (sessionStorage.getItem('jwtToken')? { jwtToken: sessionStorage.getItem('jwtToken')}: undefined)));
    }, []);
    useEffect(() => {
        getData();
    }, [getData]);
    if(data && data.items){
        if(data.items.length > 0)
            return (
                <>
                    {
                        data.items.map((item: { title: string, mal_id: number }) => {
                            return (
                            <Link
                                className='account__content-list-item'
                                key={uuidv4()}
                                to={`/info/${item.mal_id}`}>
                                {item.title}
                            </Link>
                            )
                        })
                    }
                </>
            );
        return (
            <section
                className='account__content-list-empty'>
                List empty
            </section>
        );
    }
    if(data === null)
        return (
            <Error elementClass={''}/>
        );            
    return (
        <Loading elementClass={''}/>
    );
};

export default YourList;
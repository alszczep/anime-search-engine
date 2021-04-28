import { FC, useCallback, useEffect, useState } from "react";
import { fetchData } from "../../modules/fetch-data";
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
    if(data && data.titles){
        if(data.titles.length > 0)
            return (
                <>
                    {
                        data.titles.map((item: string) => {
                            return <p>{item}</p>;
                        })
                    }
                </>
            );
        return (
            <>list empty</>
        );
    }
    if(data === null)
        return (
            <Error elementClass={'main'}/>
        );            
    return (
        <Loading elementClass={'main'}/>
    );
};

export default YourList;
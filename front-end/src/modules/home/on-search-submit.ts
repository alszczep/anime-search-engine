import { QueryStateInterface } from './../../interfaces/QueryStateInterface';
import { ReducerActionInterface } from "../../interfaces/ReducerActionInterface";

export const onSearchSubmit = (event: any, queryState: QueryStateInterface, queryDispatch: React.Dispatch<ReducerActionInterface>, setSearchData: React.Dispatch<any>) => {
    event.preventDefault();
    const { query, currentQuery } = queryState;
    if(query.length >= 3){
        if(query !== currentQuery){
            queryDispatch({ type: 'SET_CURRENT_QUERY', payload: query })
            setSearchData(undefined);
        }
    }else
        alert('Query has to be at least 3 characters long');
};
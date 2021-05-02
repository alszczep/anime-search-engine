import { QueryStateInterface } from './../../interfaces/QueryStateInterface';
import { ReducerActionInterface } from "../../interfaces/ReducerActionInterface";

export const onSearchSubmit = (event: any, queryState: QueryStateInterface, queryDispatch: React.Dispatch<ReducerActionInterface>, setSearchData: React.Dispatch<any>, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    event.preventDefault();
    const { query, currentQuery } = queryState;
    if(query.length >= 3){
        if(query !== currentQuery){
            queryDispatch({ type: 'SET_CURRENT_QUERY', payload: query })
            setSearchData(undefined);
        }
    }else
        setIsModalOpen(true);
};
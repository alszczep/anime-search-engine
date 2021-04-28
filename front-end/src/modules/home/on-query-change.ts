import { ReducerActionInterface } from './../../interfaces/ReducerActionInterface';
export const onQueryChange = (searchBarRef: React.RefObject<HTMLInputElement>, queryDispatch: React.Dispatch<ReducerActionInterface>) => {
    if(searchBarRef && searchBarRef.current)
        queryDispatch({ type: 'SET_QUERY', payload: searchBarRef.current.value });
};
import { ReducerActionInterface } from '../../interfaces/ReducerActionInterface';
import { QueryStateInterface } from './../../interfaces/QueryStateInterface';

export const queryReducer = (state: QueryStateInterface, action: ReducerActionInterface) => {
    switch(action.type){
        case 'SET_QUERY': 
            return {...state, query: action?.payload}
        case 'SET_CURRENT_QUERY': 
            return {...state, currentQuery: action?.payload}
    }
    return state;
}
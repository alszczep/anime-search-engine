import { QueryStateInterface } from './QueryStateInterface';
import { ReducerActionInterface } from "./ReducerActionInterface";

export interface QueryContextInterface{
    queryState: QueryStateInterface;
    queryDispatch: React.Dispatch<ReducerActionInterface>;
}
import { ENABLE_COMPA } from '../actionTypes/task1';
import { ENABLE_COMPB } from '../actionTypes/task1';
import { COUNTER } from '../actionTypes/task1';

export default function task1Reducer(prevState = {view_compA: false, view_compB: false, count: 0}, action) {
    switch (action.type) {
        case ENABLE_COMPA: 
            return {...prevState, view_compA: !prevState.view_compA, count: prevState.count + 1};
        case ENABLE_COMPB: 
            return {...prevState, view_compB: !prevState.view_compB};
        case COUNTER: 
            return {...prevState, count: prevState.count + 1};
        default:
            return prevState;
    }
}
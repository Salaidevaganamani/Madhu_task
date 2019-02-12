import { ENABLE_COMPA } from '../actionTypes/task1';
import { ENABLE_COMPB } from '../actionTypes/task1';
import { COUNTER } from '../actionTypes/task1';

export function enable_compA(view_compA, count) {
    return {
        type: ENABLE_COMPA,
        view_compA,
        count
    };
}

export function enable_compB(view_compB) {
    return {
        type: ENABLE_COMPB,
        view_compB
    };
}
export function counter(count) {
    return {
        type: COUNTER,
        count
    };
}
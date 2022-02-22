import {INCREASE, DECREASE} from './actionTypes';

export const countUp = () => {
    return {
        type: INCREASE
    }
}

export const countDown = () => {
    return {
        type: DECREASE
    }
}
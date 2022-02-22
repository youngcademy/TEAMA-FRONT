import { ActionProps, CounterState } from '../types/state';
import {INCREASE, DECREASE} from '../actions/actionTypes';

const initialState: CounterState = { value: 0 };

export default (state = initialState, action: ActionProps) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, value: state.value += 1 }
        case DECREASE:
            return { ...state, value: state.value -= 1 }
        default:
            return state;
    }
}
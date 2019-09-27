import { ACTION_TYPES } from '../actions/actionTypes';
import calculate from '../../utils/calculate';

export const setOperation = (input, store = {}) => (dispatch, getState) => {
    const newOperationExp = getState().calculator.operationExp + input;
    return dispatch({
        type: ACTION_TYPES.SET_OPERATION,
        operation: newOperationExp,
    });
};

export const clearOperation = () => dispatch => {
    return dispatch({
        type: ACTION_TYPES.CLEAR_OPERATION,
    });
};

export const execOperation = () => (dispatch, getState) => {
    const operationExp = getState().calculator.operationExp;
    return dispatch({
        type: ACTION_TYPES.EXEC_OPERATION,
        result: calculate(operationExp),
    });
};

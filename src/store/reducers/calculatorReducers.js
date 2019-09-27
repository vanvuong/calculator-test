import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
    operationExp: '',
    result: 0,
    execed: false
};

export default function (state = initialState, action = { type: '' }) {
    switch (action.type) {
        case ACTION_TYPES.SET_OPERATION: {
            return {
                ...state,
                operationExp: action.operation,
                execed: false,
            }
        }
        case ACTION_TYPES.CLEAR_OPERATION: {
            return {
                ...state,
                operationExp: '',
                result: 0,
                execed: false,
            }
        }
        case ACTION_TYPES.EXEC_OPERATION: {
            return {
                ...state,
                operationExp: '',
                result: action.result,
                execed: true,
            }
        }
        default: {
            return state;
        }
    }
}

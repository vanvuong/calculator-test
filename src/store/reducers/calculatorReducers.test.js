import calculatorReducer from './calculatorReducers';
import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
    operationExp: '',
    result: 0,
    execed: false
}

describe('Calculator Reducer', () => {
    it('should create an operation', () => {
        const expected = {
            operationExp: '4*5',
            result: 0,
            execed: false
        }
        const action = {
            type: ACTION_TYPES.SET_OPERATION,
            operation: '4*5',
        }
        expect(calculatorReducer(initialState, action)).toEqual(expected)
    })

    it('should calculate an operation', () => {
        const currentState = {
            operationExp: '4*5',
            result: 0,
            execed: false
        }

        const expected = {
            operationExp: '',
            result: 20,
            execed: true
        }
        const action = {
            type: ACTION_TYPES.EXEC_OPERATION,
            result: 20,
        }
        expect(calculatorReducer(currentState, action)).toEqual(expected)
    })

    it('should reset screen calculator', () => {
        const currentState = {
            operationExp: '4*5',
            result: 20,
            execed: true
        }
        const action = {
            type: ACTION_TYPES.CLEAR_OPERATION
        }
        expect(calculatorReducer(currentState, action)).toEqual(initialState)
    })
})
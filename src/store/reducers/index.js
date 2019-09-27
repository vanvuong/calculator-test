import { combineReducers } from 'redux';

import calculator from './calculatorReducers';

const rootReducer = combineReducers({
    calculator,
});

export default rootReducer;

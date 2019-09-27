import React from 'react';
import { connect } from 'react-redux';

import Screen from '../../components/Screen';
import Keyboard from '../../components/Keyboard';

import * as calculatorActions from '../../store/actions/calculatorActions';

class Calculator extends React.Component {
    handleOnClick(key) {
        switch (key) {
            case '=':
                this.props.dispatch(calculatorActions.execOperation());
                break;
            case 'clear':
                this.props.dispatch(calculatorActions.clearOperation());
                break;
            default:
                this.props.dispatch(calculatorActions.setOperation(key));
        }
    }

    render() {
        const { operationExp, result, execed = false } = this.props;
        const expText = execed ? result : operationExp;

        return (
            <div className="calculator" >
                <Screen expText={expText} />
                <Keyboard handleOnClick={this.handleOnClick.bind(this)} />
            </div>
        )
    }
}

export default connect(state => ({ ...state.calculator }))(
    Calculator,
);

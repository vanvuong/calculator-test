import React from 'react';
import { Provider } from 'react-redux';

import Calculator from './containers/Calculator';

import createStore from './store';
import './styles/index.scss';

const STORE = createStore();

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={STORE}>
          <Calculator />
        </Provider>
      </div>
    );
  }
}

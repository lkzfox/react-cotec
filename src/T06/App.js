import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import Lista from './Lista';
import Detalhes from './Detalhes';
import Adicionar from './Adicionar';

const estadoGeral = combineReducers(reducers);

export class App extends Component {
    render() {
        return (
            <Provider store={createStore(estadoGeral)}>
                <Adicionar />
                <Lista />
                <Detalhes />
            </Provider>
        );
    }
}

export default App;

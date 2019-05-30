import React, {Component} from 'react';
import { Provider } from 'react-redux'
import './App.css';

import ResultComponent from './components/ResultComponent'
import { store } from './redux/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ResultComponent />
            </Provider>
        );
    }
}

export default App;

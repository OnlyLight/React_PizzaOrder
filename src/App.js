import React, {Component} from 'react';
import { Provider } from 'react-redux';

import ResultComponent from './components/ResultComponent';
import { configureStore } from './redux/store';

const store = configureStore();

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

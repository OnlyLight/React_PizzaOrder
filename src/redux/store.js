import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { pizzaApp } from './reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export function configureStore(initialState) {
    return createStoreWithMiddleware(pizzaApp, initialState);
}


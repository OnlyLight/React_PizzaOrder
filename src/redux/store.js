import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import { pizzaApp } from './reducers'

const logger = createLogger();

export const store = createStore(
    pizzaApp,
    applyMiddleware(logger)
);


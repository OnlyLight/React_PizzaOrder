import { combineReducers } from 'redux'

import eventClick from './initReducers/eventClick'
import titles from './initReducers/titles'

export const pizzaApp = combineReducers({
    titles,
    itemsSelected: eventClick
});
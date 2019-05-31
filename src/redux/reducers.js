import { combineReducers } from 'redux'

import { CLICK_SUB, CLICK_ADD,
    CLICK_RESET, CLICK_CHECKOUT } from './action'

function eventClick(state = [], action) {
    switch (action.type) {
        case CLICK_SUB: {
            let idx = state.findIndex(selected => selected.id === action.item.id);
            if (action.item.count > 0) {
                if (idx >= 0) {
                    return [
                        ...state.slice(0, idx),
                        {id: action.item.id, count: action.item.count - 1},
                        ...state.slice(idx+1)
                    ]
                }
            } else {
                return state;
            }
        }

        case CLICK_ADD: {
            let idx = state.findIndex(selected => selected.id === action.item.id);
            if (idx >= 0) {
                return [
                    ...state.slice(0, idx),
                    {id: action.item.id, count: action.item.count + 1},
                    ...state.slice(idx+1)
                ]
            } else {
                return [
                    ...state,
                    {id: action.item.id, count: 1}
                ]
            }
        }

        case CLICK_RESET:
            return [];

        case CLICK_CHECKOUT: {
            if (window.confirm(`Do you want checkout ? Your bill are: ${action.total}$`)) {
                return [];
            }
            return state
        }

        default:
            return state;
    }
}

export const click = combineReducers({itemsSelected: eventClick});
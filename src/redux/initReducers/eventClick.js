import {CLICK_ADD, CLICK_CHECKOUT, CLICK_RESET, CLICK_SUB} from "../initActions/types";

export default function (state = [], action) {
    switch (action.type) {
        case CLICK_SUB: {
            return clickSub(state, action);
        }

        case CLICK_ADD: {
            return clickAdd(state, action);
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

function clickSub(state, action) {
    let idx = state.findIndex(selected => selected.id === action.item.id);
    if (action.item.count > 0) {
        if (idx >= 0) {
            return [
                ...state.slice(0, idx),
                {id: action.item.id, count: action.item.count - 1},
                ...state.slice(idx+1)
            ]
        }
    }
    return state;
}

function clickAdd(state, action) {
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
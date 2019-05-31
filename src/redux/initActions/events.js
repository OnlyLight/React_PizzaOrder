import {CLICK_ADD, CLICK_CHECKOUT, CLICK_RESET, CLICK_SUB} from "./types";

export function clickSub(item) {
    return { type: CLICK_SUB, item }
}

export function clickAdd(item) {
    return { type: CLICK_ADD, item }
}

export function clickReset() {
    return { type: CLICK_RESET }
}

export function clickCheckout(total) {
    return { type: CLICK_CHECKOUT, total }
}
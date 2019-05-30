export const CLICK_SUB = 'CLICK_SUB';
export const CLICK_ADD = 'CLICK_ADD';
export const CLICK_CHECKOUT = 'CLICK_CHECKOUT';
export const CLICK_RESET = 'CLICK_RESET';

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
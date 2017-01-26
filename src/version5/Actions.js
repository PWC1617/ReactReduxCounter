import * as actionType from './constants'

export function onIncrement() {
    return {
        type: actionType.INCREMENT
    }
}

export function onDecrement() {
    return {
        type: actionType.DECREMENT
    }
}

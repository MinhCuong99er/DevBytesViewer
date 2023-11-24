const evt = {}

export const addEvent = (key, callBack) => {
    evt[key] = callBack
}

export const emitPubsub = (key, data) => {
    evt[key](data)
}
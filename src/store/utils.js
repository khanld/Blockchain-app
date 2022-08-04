export const updatedState = (oldState, updatedFields) => {
    return {
        ...oldState,
        ...updatedFields
    }
}

export const dispatchedAction = (type, payload) => {
    return {
        type,
        ...payload
    }
}
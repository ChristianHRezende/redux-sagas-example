//IP
export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}
export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}
export const loadDataError = () => {
    return {
        type: 'LOAD_DATA_ERROR'
    }
}

//UA
export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}
export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data
    }
}
export const loadUAError = () => {
    return {
        type: 'LOAD_UA_ERROR'
    }
}
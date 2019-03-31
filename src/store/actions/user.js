import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

//function to create an action (arrow function)
export const login = user => {
    return {
        type: USER_LOGGED_IN, //type is required
        payload: user         //payload is a name optional ex:(user or data)
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}
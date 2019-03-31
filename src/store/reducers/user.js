import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null
}

const reducer = (state = initialState, action) => { //state never change... another state is created with the changes
    switch (action.type) { //case for states
        case USER_LOGGED_IN:
            return {
                ...state, //spread to take all 
                name: action.payload.name,   //Updating/rewrite name
                email: action.payload.email //Updating/rewrite email
            }
        case USER_LOGGED_OUT:
            return {
                ...state, // get all atributes from atual state. (spread)
                name: null,
                email: null
            }
        default:
            return state //don't create a clone.
    }
}

export default reducer
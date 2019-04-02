import { ADD_POST } from './actionTypes'

export const addPost = post => {
    return { //return object (representation of action)
        type: ADD_POST,
        payload: post
    }
}
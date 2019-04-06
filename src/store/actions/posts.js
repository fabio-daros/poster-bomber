import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => { //return object (representation of action)
        axios.post('/posts.json', { ...post }) //database from firebase
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
    // type: ADD_POST,
    // payload: post
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}
import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Raphael Willow',
        email: 'raphaelwll@hotmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'John Ray Sheldon',
            comment: 'Stuning!'
        }, {
            nickname: 'Ann Arrow',
            comment: 'Beautiful image!'
        }]
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => { //map function... create a new array
                    if (post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                })
            }
        default:
            return state
    }
}

export default reducer
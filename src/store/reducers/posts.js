import { ADD_POST } from '../actions/actionTypes'

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
    }, {
        id: Math.random(),
        nickname: 'Franz Lima',
        email: 'flima@gmail.com',
        image: require('../../../assets/imgs/gate.jpg'),
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
        default:
            return state
    }
}

export default reducer
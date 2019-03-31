import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user' //user.js is exported "reducer" but, is possible alter the name.

const reducers = combineReducers({ //result of all reducers, create a new object with all reducers.
    user: userReducer //global key with the all states...
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
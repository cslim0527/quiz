import { createStore, combineReducers } from 'redux'
import user from './modules/user'
import question from './modules/question'

const rootReducer = combineReducers({user, question})

const store = createStore(rootReducer)

export default store
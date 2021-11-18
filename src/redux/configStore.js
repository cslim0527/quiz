import { createStore, combineReducers } from 'redux'
import user from './modules/user'
import question from './modules/question'
import rank from './modules/rank'

const rootReducer = combineReducers({user, question, rank})

const store = createStore(rootReducer)

export default store
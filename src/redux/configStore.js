import { createStore, combineReducers, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'

import user from './modules/user'
import question from './modules/question'
import rank from './modules/rank'

const middlewares = [thunk]
const enhancer = applyMiddleware(...middlewares)
const rootReducer = combineReducers({user, question, rank})

const store = createStore(rootReducer, enhancer)

export default store
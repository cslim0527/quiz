// question.js
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

// Actions
const LOAD = 'question/LOAD';

const initialState = {
  list: []
}

// Action Creators
export function loadQuestion(question) {
  return { type: LOAD, question };
}

// Middlewares
export const loadQuestionFB = () => {
  return async (dispatch) => {
      const questionData = await getDocs(collection(db, 'question'))
      const qArr = []
      
      questionData.forEach(doc => {
        qArr.push(doc.data())
      })
      
      qArr.sort((a, b) => a.num - b.num)
      dispatch(loadQuestion(qArr))
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'question/LOAD':
      return {
        list: [
          ...action.question
        ]
      }

    default: return state;
  }
}

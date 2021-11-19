// user.js

// Actions
const CREATE = 'user/CREATE';
const UPDATE_LIST = 'user/list/UPDATE';
const ADD_SCORE = 'user/score/ADD'

const initialState = {
  name: '',
  jump: true,
  answer: []
}

// Action Creators
export function createUserName(name, jump) {
  return { type: CREATE, user: {name, jump} };
}

export function updateUserAnswer(answer) {
  return { type: UPDATE_LIST, answerData: answer };
}

export function addUserScore(score) {
  return { type: ADD_SCORE, score };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'user/CREATE':
      return {
        name: action.user.name,
        jump: action.user.jump,
        answer: []
      }

    case 'user/list/UPDATE':
      let newAnswer = null
      let idx = Number(action.answerData.index) - 1

      // 이미 풀었던 문제일 경우
      if (state.answer[idx] !== undefined) {
        state.answer[idx] = action.answerData.answer
        newAnswer = state.answer
      } else {
        newAnswer = [
          ...state.answer,
          action.answerData.answer
        ]
      }

      return {
        name: state.name,
        answer: newAnswer
      }

    case 'user/score/ADD':
      console.log('[ADD]', state, action)
      return {
        ...state,
        score: action.score
      }

    default: return state;
  }
}

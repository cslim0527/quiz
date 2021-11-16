// user.js

// Actions
const CREATE = 'user/CREATE';
const UPDATE_LIST = 'user/list/UPDATE';

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
  return { type: UPDATE_LIST, answer };
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
      return {
        name: state.name,
        answer: [
          ...state.answer,
          action.answer
        ]
      }

    default: return state;
  }
}

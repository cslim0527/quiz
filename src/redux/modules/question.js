// question.js

// Actions
const READ = 'question/READ';

const initialState = {
  list: [
    {
      question: '1번 문제 입니다.',
      answer: false,
      score: 10
    },
    {
      question: '2번 문제 입니다.',
      answer: true,
      score: 10
    },
    {
      question: '3번 문제 입니다.',
      answer: false,
      score: 10
    },
    {
      question: '4번 문제 입니다.',
      answer: true,
      score: 10
    },
    {
      question: '5번 문제 입니다.',
      answer: true,
      score: 10
    },
    {
      question: '6번 문제 입니다.',
      answer: false,
      score: 10
    },
    {
      question: '7번 문제 입니다.',
      answer: true,
      score: 10
    },
    {
      question: '8번 문제 입니다.',
      answer: false,
      score: 10
    },
    {
      question: '9번 문제 입니다.',
      answer: true,
      score: 10
    },
    {
      question: '10번 문제 입니다.',
      answer: false,
      score: 10
    }
  ]
}

// Action Creators [사용안함]
export function createQuestion(name) {
  return { type: READ, name };
}

// Reducer [사용안함]
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'question/READ':
      return {}

    default: return state;
  }
}

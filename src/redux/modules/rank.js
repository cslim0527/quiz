// rank.js
import { db } from '../../firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

// Actions
const LOAD = 'rank/LOAD';
const ADD = 'rank/ADD';

const initialState = {
  list: []
}

// Action Creators
export function loadRank(rank) {
  return { type: LOAD, rank };
}

export function addRank(newRank) {
  return { type: ADD, newRank };
}

// Middlewares
export const loadRankFB = () => {
  return async (dispatch) => {
    const questionData = await getDocs(collection(db, 'rank'))
    const rankArr = []
    
    questionData.forEach(doc => {
      rankArr.push(doc.data())
    })
    
    dispatch(loadRank(rankArr))
  }
}

export const addRankFB = (rankData) => {
  return (dispatch) => {
    addDoc(collection(db, 'rank'),  rankData)
    dispatch(addRank(rankData))
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'rank/LOAD':
      let loadRank = action.rank.sort((a, b) => b.score - a.score)
      loadRank = loadRank.map((data, idx) => {
        return {
          ...data,
          rank: idx + 1
        }
      })

      return {
        list: loadRank
      }

    case 'rank/ADD':
      let newRank = [
        ...state.list,
        action.newRank
      ]

      newRank.sort((a, b) => b.score - a.score)
      newRank = newRank.map((data, idx) => {
        return {
          ...data,
          rank: idx + 1
        }
      })

      return {
        list: newRank
      }

    default: return state;
  }
}

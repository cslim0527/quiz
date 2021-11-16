import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserAnswer } from '../redux/modules/user'

const Quiz = () => {
  const { index } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const isJump = useSelector(state => state.user.jump)
  const quizList = useSelector(state => state.question.list)
  const currQuiz = quizList[index-1].question

  // 문제 중간 난입 시 첫 페이지로 이동
  useEffect(() => {
    if (isJump) {
      alert('처음부터 시작해주세요! :)')
      history.push('/')
    }
  })

  // O 버튼 동작
  const handleClickRightBtn = () => {
    dispatch(updateUserAnswer(true))
    moveNext()
  }

  // X 버튼 동작
  const handleClickWrongBtn = () => {
    dispatch(updateUserAnswer(false))
    moveNext()
  }

  // 다음 문제로 이동
  const moveNext = () => {
    const stage = Number(index)
    if (stage > 9) {
      history.push(`/result`)
    } else {
      history.push(`/quiz/${stage + 1}`)
    }
  }

  return (
    <QuizBox>
      <div className="q-header">
        <span>{index}번 문제</span>
      </div>
      <div className="q-content">{currQuiz}</div>
      <div className="q-footer">
        <RrightBtn onClick={handleClickRightBtn} type="button">O</RrightBtn>
        <WrongBtn onClick={handleClickWrongBtn} type="button">X</WrongBtn>
      </div>
    </QuizBox>
  );
}

const QuizBox = styled.article`
  text-align: center;

  .q-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    span {
      padding: 10px 12px 6px 12px;
      font-size: 20px;
      border: 3px solid #333;
      border-radius: 40px;
    }
  }

  .q-content {
    font-size: 26px;
    word-break: break-word;
    margin-bottom: 40px;
    max-height: 400px;
    overflow: auto;
  }

  .q-footer {
    display: flex;
    justify-content: center;
  }
` 

const RrightBtn = styled.button`
  flex: 1;
  font-size: 24px;
  max-width: 125px;
  height: 45px;
  line-height: 42px;
  border-radius: 30px;
  color: #2f2f2f;
  background-color: #99dde4;
  margin-right: 20px;

  &:hover {
    line-height: 36px;
    border: 4px solid #99dde4;
    background-color: #beeff4
  }
` 

const WrongBtn = styled.button`
  flex: 1;
  font-size: 24px;
  max-width: 125px;
  height: 45px;
  line-height: 42px;
  border-radius: 30px;
  color: #2f2f2f;
  background-color: #f3b7b7;

  &:hover {
    line-height: 36px;
    border: 4px solid #f3b7b7;
    background-color: #ffe1e1
  }
` 

export default Quiz;

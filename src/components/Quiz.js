import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserAnswer } from '../redux/modules/user'
import ProgressBar from './ProgressBar'

const Quiz = () => {
  const { index } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const isJump = useSelector(state => state.user.jump)
  const quizList = useSelector(state => state.question.list)
  const currQuiz = quizList[index-1].question
  
  const progressData = {
    current: index,
    total: quizList.length,
    progress: index / quizList.length * 100
  }

  // 문제 중간 난입 시 첫 페이지로 이동
  useEffect(() => {
    if (isJump) {
      alert('처음부터 시작해주세요! :)')
      history.push('/')
    }
  })

  // O 버튼 동작
  const handleClickRightBtn = () => {
    dispatch(updateUserAnswer({ answer: true, index }))
    moveNext()
  }

  // X 버튼 동작
  const handleClickWrongBtn = () => {
    dispatch(updateUserAnswer({ answer: false, index }))
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
    <QuizBox className="container">
      <div className="q-header">
        <ProgressBar progressData={progressData}/>
        <div># {index}번 문제 #</div>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    span {
      padding: 10px 12px 6px 12px;
      font-size: 24px;
      border: 3px solid #333;
      border-radius: 40px;
    }
  }

  .q-content {
    padding: 40px 16px;
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

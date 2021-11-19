import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

const Result = () => {
  const history = useHistory()
  const { user, question } = useSelector(state => state)
  console.log(user)
  
  // 맞은 점수 구하기
  const getScore = () => {
    const userSheet = user.answer
    const quizSheet = question.list

    return userSheet.reduce((total, answer, idx) => {
      const rightAnswer = quizSheet[idx].answer
      const score = quizSheet[idx].score
      if (answer === rightAnswer) {
        // console.log('맞았다! 유저: ',answer, '정답: ', rightAnswer)
        return total += score
      } else {
        // console.log('틀렸다! 유저: ',answer, '정답: ', rightAnswer)
        return total
      }
    }, 0)
  }

  const totalScore = getScore()

  const handleClickGoMain = () => {
    history.push('/')
  }

  const handleClickCommentBtn = () => {
    history.push('/comment')
  }
  

  return (
    <ResultArea>
      <div className="result-title">
        <span>퀴즈퀴즈</span>에 대한 { user.name }님 점수는?
      </div>
      <div className="result-score">
        <div className="score-txt">
          <strong className="score">{ totalScore }</strong> 점
        </div>
        <p className="comment">
          아주 좋아요! :)
        </p>
      </div>
      <nav className="result-btns">
        <button onClick={handleClickCommentBtn} type="button">한마디 남기기</button>
        <button onClick={handleClickGoMain} type="button">처음으로</button>
      </nav>
    </ResultArea>
  );
}

const ResultArea = styled.section`
  text-align: center;

  .result-title {
    font-size: 24px;
    margin-bottom: 40px;

    span {
      border-radius: 40px;
      background-color: #ffe1e1;
      padding: 10px 12px 6px 12px;
      margin-right: 5px;
    }
  }

  .result-score {
    margin-bottom: 40px;

    .score-txt {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .score {
      border-radius: 40px;
      display: inline-block;
      background-color: #ffe1e1;
      padding: 10px 12px 6px 12px;
    }

    .comment {
      font-size: 18px;
    }
  }

  .result-btns {
    display: flex;
    flex-direction: column;

    button {
      border-radius: 40px;
      margin-bottom: 10px;
      border: 3px solid #333;

      &:first-child {
        background-color: #99dde4;
      }

      &:last-child {
        margin-bottom: 0;
        background-color: #f3b7b7;
      }
    }
  }

`

export default Result;

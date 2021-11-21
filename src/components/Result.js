import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addUserScore } from '../redux/modules/user'
import goodImg from '../img/good.gif'
import sosoImg from '../img/soso.gif'
import badImg from '../img/bad.gif'

const Result = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { user, question } = useSelector(state => state)
  
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

  const resultImgSource = () => {
    if (totalScore >= 80) {
      return {
        src: goodImg,
        txt: '이렇게 관심을 갖고있으셨다니! :)'
      }
    } else if (totalScore >= 40 && totalScore < 80) {
      return {
        src: sosoImg,
        txt: '앞으로 서로 더 알아가도록 해요 :)'
      }
    } else {
      return {
        src: badImg,
        txt: '...그..그럴수 있어요 @_@'
      }
    }
  }

  const handleClickGoMain = () => {
    history.push('/')
  }

  const handleClickCommentBtn = () => {
    dispatch(addUserScore(totalScore))
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
        <img className="result-img" src={ resultImgSource().src } alt="" />
        <p className="comment">{ resultImgSource().txt }</p>
      </div>
      <nav className="result-btns">
        <button onClick={handleClickGoMain} type="button">처음으로</button>
        <button onClick={handleClickCommentBtn} type="button">한마디 남기기</button>
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

  .result-img {
    width: 75%;
    margin-bottom: 20px;
  }

  .result-btns {
    display: flex;
    flex-direction: column;

    button {
      border-radius: 40px;
      margin-bottom: 10px;
      border: 3px solid #333;

      &:first-child {
        background-color: #f3b7b7;
      }

      &:last-child {
        margin-bottom: 0;
        background-color: #99dde4;
      }
    }
  }

`

export default Result;

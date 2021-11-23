import { useSelector } from 'react-redux'
import styled from 'styled-components'

import CloseIcon from '@material-ui/icons/Close';

const AnswerPaper = ({ showState, showToggle }) => {
  const { question, user } = useSelector(state => state)

  const handleClickClosePaper = () => {
    showToggle(false)
  }

  return (
    <Paper className={showState && 'show'}>
      <div className="paper-content">
        <CloseIcon onClick={handleClickClosePaper} className="close-btn" />
        <div className="title">내가 푼 문제 확인하기</div>

        <ul className="answer-list">
        {
          question.list.map((item, idx) => {
            return (
              <li key={idx} className={item.answer === user.answer[idx] ? 'answer-item right' : 'answer-item wrong'}>
                <p className="question">
                  [{idx + 1}번] {item.question}
                </p>

                <div className="info">
                  배점: {item.score}점
                </div>

                <div className="info">
                  정답: {item.answer ? 'O' : 'X'}
                </div>

                <div className="info">
                  내 풀이: {user.answer[idx] ? 'O' : 'X'}
                </div>
              </li>
            )
          })
        }
          
        </ul>

      </div>
    </Paper>
  )
}

const Paper = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9999;
  display: none;

  &.show {
    display: block;
  }

  .paper-content {
    position: relative;
    width: 80%;
    height: 80vh;
    background: rgb(255,249,232);
    background: radial-gradient(circle, rgba(255,249,232,1) 0%, rgba(247,237,210,1) 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 448px;
    border: 4px solid #2f2f2f;
    border-radius: 12px;
    padding: 16px 24px;
    padding-top: 40px;

    .close-btn {
      cursor: pointer;
      position: absolute;
      top: -15px;
      right: -15px;
      border: 4px solid #2f2f2f;
      background-color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }

    .right {
      &::after {
        content: 'O';
        position: absolute;
        top: 0;
        left: 0;
        font-size: 44px;
        color: #8bc34a;  
        text-shadow: 4px 4px 0 rgba(255, 255, 255, .5);
        transform: translate(-30%, -30%);
      }
    } 

    .wrong {
      &::after {
        content: 'X';
        position: absolute;
        top: 0;
        left: 0;
        font-size: 44px;
        color: #f44336;  
        text-shadow: 4px 4px 0 rgba(255, 255, 255, .5);
        transform: translate(-30%, -30%);
      }
    }

    .answer-list {
      padding: 20px;
      height: 90%;
      overflow-y: auto;
    }

    .answer-item {
      position: relative;
      padding: 16px;
      border-radius: 12px;
      background-color: #fff;
      margin-bottom: 20px;

      &::last-child {
        margin-bottom: 0;
      }

      .question {
        text-indent: 18px;
        word-break: break-word;
        margin-bottom: 15px;
      }

      .info {
        margin-bottom: 5px;

        &::last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`

export default AnswerPaper
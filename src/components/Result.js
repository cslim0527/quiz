import React from 'react'
import styled from 'styled-components'

const Result = () => {
  return (
    <ResultArea>
      <div className="result-title">
        <span>퀴즈퀴즈</span>에 대한 내 점수는?
      </div>
      <div className="result-score">
        <div className="score-txt">
          <strong className="score">100</strong> 점
        </div>
        <p className="comment">
          아주 좋아요! :)
        </p>
      </div>
      <div className="result-btns">
        <button type="button">점수보기</button>
        <button type="button">랭킹보기</button>
        <button type="button">처음으로</button>
      </div>
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

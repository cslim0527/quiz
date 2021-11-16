import React from 'react'
import styled from 'styled-components'

const Quiz = () => {
  return (
    <QuizBox>
      <div className="q-header">
        <span>5번 문제</span>
      </div>
      <div className="q-content">
        르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다2살이다2살이다2살이다2살이다2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.르탄이는 2살이다.
      </div>
      <div className="q-footer">
        <RrightBtn type="button">O</RrightBtn>
        <WrongBtn type="button">X</WrongBtn>
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

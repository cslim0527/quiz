import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';

const NotFound = () => {
  const history = useHistory()

  const handleClickGoMain = () => {
    history.push('/')
  }

  return (
    <NotFoundArea>
      <h1>찾을 수 없는 페이지 입니다! :(</h1>
      <button onClick={handleClickGoMain} type="button">뒤로가기</button>
    </NotFoundArea>
  );
}

const NotFoundArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-size: 26px;

  h1 {
    font-size: inherit;
    margin-bottom: 20px;
  }

  button {
    padding: 4px 18px;
    border: 3px solid #2f2f2f;

    &:hover {
      color: #fff;
      background-color: #2f2f2f;
    }
  }
`

export default NotFound;

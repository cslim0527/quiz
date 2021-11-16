import React, { useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import logo from '../img/logo.jpg'

const Main = () => {
  const history = useHistory()
  const nameInput = useRef('')
  const handleClickNextBtn = () => {
    const name = nameInput.current.value
    if (!name) {
      alert('이름을 입력해주세요!')
      nameInput.current.focus()
      return
    }

    history.push('/quiz/1')
  }

  return (
    <header>
      <Logo src={logo} alt="퀴즈퀴즈"/>

      <StartBox>
        <input ref={nameInput} type="text" placeholder="이름을 입력하세요" />
        <button type="button" onClick={handleClickNextBtn}>시작하기</button>
      </StartBox>
    </header>
  );
}

const StartBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;

  input {
    margin-bottom: 10px;
  }

  button {
    color: #fff;
    background-color: #f62f5f;
  }
`

const Logo = styled.img`
  display: block;
  max-width: 220px;
  margin: 0 auto;
`

export default Main;

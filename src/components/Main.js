import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUserName } from "../redux/modules/user";

import logo from '../img/logo.jpg'

const Main = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const nameInput = useRef('')
  const users = useSelector(state => state.rank.list)
  console.log(users)

  useEffect(() => {
    nameInput.current.focus()
  })

  const checkExistName = () => {
    return users.some(user => user.name === nameInput.current.value)
  }
  
  // 이름 입력 여부 확인 후 퀴즈 시작
  const quizStart = () => {
    const name = nameInput.current.value
    if (!name) {
      alert('이름을 입력해주세요!')
      nameInput.current.focus()
      return
    }

    if (checkExistName()) {
      alert('이미 사용된 이름이에요! 다른 이름을 입력해주세요 :)')
      nameInput.current.focus()
      return
    }

    dispatch(createUserName(name, false))
    history.push('/quiz/1')
  }

  // 시작 버튼 클릭 동작
  const handleClickNextBtn = () => {
    quizStart()
  }

  // 엔터 입력 시 동작
  const handleHitEnter = (e) => {
    if (e.key === 'Enter') {
      quizStart()
    }
  }

  return (
    <header>
      <Logo src={logo} alt="퀴즈퀴즈"/>

      <StartBox>
        <input ref={nameInput} onKeyUp={handleHitEnter} type="text" placeholder="이름을 입력하세요" />
        <button type="button" onClick={handleClickNextBtn}>시작하기</button>
      </StartBox>
    </header>
  );
}

const StartBox = styled.div`
  display: flex;
  flex-direction: column;
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

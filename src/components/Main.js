import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUserName } from "../redux/modules/user";
import logo from '../img/logo.png'

const Main = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const nameInput = useRef('')
  const users = useSelector(state => state.rank.list)

  useEffect(() => {
    nameInput.current.focus()
  }, [])

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

      <Explain>
        안녕하세요! 항해99 4기에 참여하게된 <b>임찬수</b> 입니다.<br/>
        간단한 <b>O/X 퀴즈</b>를 통해서 저를 소개하는 페이지입니다.<br/>
        문제를 풀어보시고 <b>한마디를 남기면 랭킹을 등록</b> 할 수있어요!
      </Explain>

      <StartBox>
        <input ref={nameInput} onKeyUp={handleHitEnter} type="text" placeholder="참여자 이름을 입력하세요" />
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
    text-align: center;
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
  margin-bottom: 20px;
`

const Explain = styled.p`
  font-family: 'sans-serif';
  font-size: 11px;
  line-height: 1.72;
  text-align: center;
  padding: 16px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;

  b {
    font-size: 12px;
  }
`

export default Main;

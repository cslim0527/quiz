import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import profile from '../img/logo.jpg'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

const Comment = () => {
  const history = useHistory()
  const isJump = useSelector(state => state.user.jump)
  const userData = useSelector(state => state.user)
  console.log(userData)
  const taRef = useRef()

  // 문제 중간 난입 시 첫 페이지로 이동
  useEffect(() => {
    if (isJump) {
      alert('잘못된 접근입니다! :(')
      history.push('/')
    }

    taRef.current.focus()
  })

  const handleClickBackBtn = () => {
    history.goBack()
  }

  const handleClickRankBtn = () => {
    history.push('/rank')
  }

  return (
    <CommentArea>
      <div className="comment-header">
        <div className="container">
          <KeyboardArrowLeftIcon onClick={handleClickBackBtn} className="back-btn" />
        </div>
      </div>

      <div className="comment-body">
        <div className="profile-image">
          <img src={profile} alt="찬수" />
        </div>

        <div className="explain">
          <span>찬수</span>에게 남기는 한마디
        </div>

        <textarea ref={taRef} placeholder="한마디를 남겨주세요.."></textarea>

        <button className="rank-btn" onClick={handleClickRankBtn}>랭킹보기</button>
      </div>

    </CommentArea>
  )
}

const CommentArea = styled.section`
  padding-top: 40px;

  .comment-header {
    position: absolute;
    top: 0;
    padding: 16px;

    .back-btn {
      color: #666;
      font-size: 30px;
      cursor: pointer;
    }
  }

  .comment-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile-image {
      width: 140px;
      height: 140px;
      margin-bottom: 40px;

      img {
        width: 100%;
      }
    }

    .explain {
      margin-bottom: 20px;

      span {
        display: inline-block;
        padding: 2px 4px;
        border-radius: 6px;
        background-color: #99dde4;
        margin-right: 5px;
        text-shadow: 1px 1px 0 #fff;
      }
    }

    textarea {
      width: 80%;
      height: 140px;
      outline: none;
      padding: 10px;
      resize: none;
      border-radius: 6px;
      border: 3px solid #eaeaea;
      margin-bottom: 40px;

      &:focus {
        border-color: #2f2f2f;
      }
    }
  }

  .rank-btn {
    width: 120px;
    line-height: 28px;
    border-radius: 40px;
    margin-bottom: 10px;
    border: 3px solid #333;
    background-color: #f3b7b7;

    &:hover {
      background-color: #fcd4d4;
    }
  }
`

export default Comment
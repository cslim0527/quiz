import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import User from './User'
import AnswerPaper from './AnswerPaper'
import Spinner from './Spinner'
import NoData from './NoData'

import GitHubIcon from '@material-ui/icons/GitHub';

const Rank = () => {
  const history = useHistory()
  const isJump = useSelector(state => state.user.jump)
  const userName = useSelector(state => state.user.name)
  const rankData = useSelector(state => state.rank.list)
  const [loadingFlag, setLoadingFlag] = useState(false)
  const [ paperShowState, setPaperShowState] = useState(false)

  setTimeout(() => {
    setLoadingFlag(true)
  }, 2000)

  const handleClickHomeBtn = () => {
    history.push('/')
  }

  const handleClickShowPaper = () => {
    paperShowState ? setPaperShowState(false) : setPaperShowState(true)
  }

  const handleClickFindMe = () => {
    const step = rankData.findIndex(data => data.name == userName)
    window.scrollTo({top: 150 * step, left: 0, behavior: 'smooth'})
  }

  const handleClickGithubBtn = () => {
    window.open('https://github.com/cslim0527/quiz')
  }

  return (
    <RankArea isJump={isJump}>
      <div className="container">

        {
          // 문제 풀이없이 접근 할 경우 상단바를 노출하지 않음
          !isJump && 
          <button className="report" onClick={handleClickFindMe}>
            <span>100</span>명의 사람중 당신은?
          </button>
        }
        <ul className="rank-list">
        { 
          !loadingFlag
            ? <Spinner />
            : !rankData.length 
              ? <NoData /> 
              : rankData.map((data, idx) => {
                return <User key={idx} data={data}/>
              })
        }
        </ul>
      </div>

      <div className="btn-group">
        <GitHubIcon className="github-btn" onClick={handleClickGithubBtn}/>
        <button className="home-btn" onClick={handleClickHomeBtn}>처음으로</button>

        {
          // 문제 풀이없이 접근 할 경우 정답보기를 노출하지 않음
          !isJump && <button className="answer-paper-btn" onClick={handleClickShowPaper}>정답보기</button>
        }
        
      </div>

      <AnswerPaper showState={paperShowState} showToggle={setPaperShowState} />
    </RankArea>
  )
}

const RankArea = styled.section`
  padding-top: ${props => props.isJump ? 0 : '40px'};

  .report {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    font-size: 16px;
    width: 100%;
    color: #ddd;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    
    &:hover {
      color: #2f2f2f;
      
      span {
        color: inherit;
      }
    }

    span {
      display: inline-block;
      padding: 8px 8px 5px 8px;
      margin-right: 5px;
      color: #fff;
      border-radius: 20px;
      background-color: #beeff4;
    }
  }

  .rank-list {
    li {
      overflow: visible;
      color: #4c4c4e;
      display: flex;
      align-items: center;
      padding: 16px;
      padding-top: 25px;
      margin-bottom: 20px;
      position: relative;
      height: 130px;
      background-color: #f9f9f9; 

      &.gold {
        .icon-rank,
        .rank-num {
          color: #f0ca00 !important;
        }
      }

      &.silver {
        .icon-rank,
        .rank-num {
          color: silver !important;
        }
      }

      &.brown {
        .icon-rank,
        .rank-num {
          color: brown !important;
        }
      }

      &.my-rank {
        border: 3px solid #2f2f2f;

        &:after {
          content: '나';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border: 3px solid #2f2f2f;
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          border-radius: 50%;
          background-color: #2196f3;
          margin-left: -10px;
          margin-top: -5px;
          transform: rotate(-25deg);
        }
      }
    }

    .icon-rank {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 26px;
    }

    .rank-num {
      font-size: 38px;
      margin-right: 10px;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      small {
        font-size: 24px;
        display: inline-block;
        margin-left: 5px;
      }
    }

    .rank-info {
      flex: 1; 

      .info-top {
        display: flex;
        align-items: center;
        justify-content: space-space-between;
        margin-bottom: 5px;
        padding-right: 40px;
      }

      .name {
        font-size: 22px;
      }

      .score {
        font-size: 14px;
        color: #f44336;
        margin-left: auto;
        font-style: italic;
      }

      .comment {
        font-size: 13px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.4;
        height: 5.2;
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
      }
    }
  }
  
  .btn-group{
    position: fixed;
    bottom: 40px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      flex-shrink: 0;
    }
  }

  .home-btn,
  .answer-paper-btn {
      border-radius: 40px;
      border: 3px solid #333;
      background-color: #99dde4;
      line-height: 28px;
      padding-left: 10px;
      padding-right: 10px;
      margin-left: 10px;
      opacity: 0.8;

      &:hover {
        background-color: #74dae5;
        opacity: 1;
      }
  }

  .answer-paper-btn {
    background-color: #f3b7b7;

    &:hover {
        background-color: #ff9595;
        opacity: 1;
      }
  }

  .github-btn {
    cursor: pointer;
    border-radius: 40px;
    border: 3px solid #333;
    width: 60px;
    height: 42px;
    padding: 4px;
    opacity: 0.8;

    &:hover {
        opacity: 1;
      }
  }

  @media screen and (max-width: 425px) {
    .rank-list {
      
      li {
        display: block;
        padding: 10px;
      }

      .rank-num {
        width: auto;
        display: block;
        font-size: 24px;
      }

      .icon-rank {
        top: 8px;
      }

      .rank-info {
        .name {
          font-size: 18px;
        }

        .info-top {
          padding-right: 0;
          margin-top: 10px;
        }
      }
    }
  }
`

export default Rank
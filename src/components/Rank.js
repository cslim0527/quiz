import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

import User from './User'

const Rank = () => {
  const history = useHistory()
  const isJump = useSelector(state => state.user.jump)
  const userName = useSelector(state => state.user.name)
  const rankData = useSelector(state => state.rank.list)
  const data = useSelector(state => state)

  const handleClickHomeBtn = () => {
    history.push('/')
  }

  const handleClickFindMe = () => {
    const step = rankData.findIndex(data => data.name == userName)
    window.scrollTo({top: 150 * step, left: 0, behavior: 'smooth'})
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
          !rankData.length 
            ? '랭킹 데이터가 없습니다.'
            : rankData.map((data, idx) => {
                return <User key={idx} data={data}/>
            })
        }
        </ul>
      </div>

      <button className="home-btn" onClick={handleClickHomeBtn}>처음으로</button>
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
          color: #f0ca00;
        }
      }

      &.silver {
        .icon-rank,
        .rank-num {
          color: silver;
        }
      }

      &.brown {
        .icon-rank,
        .rank-num {
          color: brown;
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
  
  .home-btn {
      border-radius: 40px;
      margin-bottom: 10px;
      border: 3px solid #333;
      background-color: #99dde4;
      line-height: 28px;
      padding-left: 10px;
      padding-right: 10px;
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.8;

      &:hover {
        background-color: #74dae5;
        opacity: 1;
      }
  }
`

export default Rank
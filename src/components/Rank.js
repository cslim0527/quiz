import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'

const Rank = () => {
  return (
    <RankArea>
      <div className="container">
        <button className="report">
          <span>100</span>명의 사람중 당신은?
        </button>

        <ul className="rank-list">
          <Card className="gold my-rank" component="li">
            <EmojiEventsIcon className="icon-rank" />
            <div className="rank-num">
              1<small>등</small>
            </div>
            <div className="rank-info">
              <div className="name">임찬수</div>
              <p className="comment">
                aksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkasaksdjlaksdjaslkdjaslkdjasldkjasldkasjdlkasjdlkas
              </p>
            </div>
          </Card>
        </ul>
      </div>

      <button className="home-btn">처음으로</button>
    </RankArea>
  )
}

const RankArea = styled.section`
  padding-top: 40px;

  .report {
    position: absolute;
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
      color: #4c4c4e;
      display: flex;
      padding: 16px;
      padding-top: 25px;
      margin-bottom: 20px;
      position: relative;

      &.gold {
        border: 2px solid #f0ca00;

        .icon-rank,
        .rank-num {
          color: #f0ca00;
        }
      }

      &.silver {
        border: 2px solid silver;

        .icon-rank,
        .rank-num {
          color: silver;
        }
      }

      &.brown {
        border: 2px solid brown;

        .icon-rank,
        .rank-num {
          color: brown;
        }
      }

      &.my-rank {
        background-color: #fff6da;
      }
    }

    .icon-rank {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 26px;
    }

    .rank-num {
      font-size: 42px;
      margin-right: 10px;
      padding: 20px 20px 15px 20px;

      small {
        font-size: 24px;
        display: inline-block;
        margin-left: 5px;
      }
    }

    .rank-info {
      flex: 1; 

      .name {
        font-size: 22px;
        margin-bottom: 10px;
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
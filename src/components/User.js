import Card from '@material-ui/core/Card'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

const User = ({ data }) => {
  const userName = useSelector(state => state.user.name)

  const setCardClass = () => {
    let cardClass = ''

    if (data.rank === 1) {
      cardClass = 'gold '
    } else if (data.rank === 2) {
      cardClass = 'silver '
    } else if (data.rank === 3) {
      cardClass = 'brown '
    }

    if (userName == data.name) {
      cardClass += 'my-rank'
    }

    return cardClass
  }

  return (
    <Card className={ setCardClass() } component="li">

      {
        data.rank <= 3 && <EmojiEventsIcon className="icon-rank" />
      }

      <div className="rank-num">
        { data.rank }<small>등</small>
      </div>

      <div className="rank-info">
        <div className="info-top">
          <span className="name">{ data.name }</span>
          <span className="score">{ data.score }점</span>
        </div>
        <p className="comment">{ data.comment }</p>
      </div>

    </Card>
  )
}

export default User
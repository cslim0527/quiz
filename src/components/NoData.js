import styled from 'styled-components'
import emptyImg from '../img/empty.gif'

const NoData = () => {
  return (
    <EmptyWrap>
      <img src={emptyImg} alt="" />
      등록된 정보가 없어요 :(
    </EmptyWrap>
  )
}

const EmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 240px;
    margin-bottom: 20px;
  }
`

export default NoData
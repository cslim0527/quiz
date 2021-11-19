import styled from 'styled-components'
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  return (
    <SpinnerWrap>
      <HashLoader color="#74dae5" />
    </SpinnerWrap>
  )
}

const SpinnerWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Spinner
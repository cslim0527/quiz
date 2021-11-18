import styled  from 'styled-components'

const ProgressBar = (data) => {
  const { current, total, progress } = data.progressData
  
  const setProgressText = () => {
    return current == total ? '마지막 문제!' : `${current} / ${total}`
  }

  return (
    <Progress width={ progress }>
      <small className="progress-info">{ setProgressText() }</small>
      <div className="progress-bar"></div>
    </Progress>
  )
}

const Progress = styled.article`
  margin-bottom: 40px;
  border: 4px solid #2f2f2f;
  border-radius: 30px;
  max-width: 300px;
  width: 100%;
  height: 32px;
  line-height: 29px;
  color: #fff;
  background-color: #ddcfcf;
  position: relative;
  overflow: hidden;

  .progress-info {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .progress-bar {
    width: ${props => props.width }%;
    height: 100%;
    background-color: #00bcd4;
    transition: width 0.3s ease-in-out;
  }
`

export default ProgressBar
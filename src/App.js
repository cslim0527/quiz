import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './Global'
import { Route } from 'react-router-dom'

import Main from './components/Main'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  return (
    <Wrap>
      <GlobalStyles />
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/quiz/:index" exact>
        <Quiz />
      </Route>
      <Route path="/result" exact>
        <Result />
      </Route>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 16px;
`

export default App;

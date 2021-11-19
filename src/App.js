import React, { useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyles from './Global'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadQuestionFB } from './redux/modules/question'
import { loadRankFB } from './redux/modules/rank'

import Main from './components/Main'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Rank from './components/Rank'
import Comment from './components/Comment'
import NotFound from './components/NotFound'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadQuestionFB())
    dispatch(loadRankFB())
  }, [])

  return (
    <Wrap className="container">
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/quiz/:index" exact>
          <Quiz />
        </Route>
        <Route path="/result" exact>
          <Result />
        </Route>
        <Route path="/rank" exact>
          <Rank />
        </Route>
        <Route path="/comment" exact>
          <Comment />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0 auto;
  padding: 16px;
`

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import ChatbotApp from './App';
import * as serviceWorker from './serviceWorker';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const AppWithRouter = () => (
    <BrowserRouter>
      <Container>
        <Main />
      </Container>
    </BrowserRouter>
  )

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();

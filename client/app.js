<<<<<<< HEAD
import React from 'react'
import ReactDom from'react-dom'
import App from './App.jsx'
ReactDOM.render(<App />,document.body)
=======
import ReactDOM from 'react-dom';
import React from 'react'
import App from './App.jsx'
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}
render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default //eslint-disable-line
    render(NextApp)
  })
}
>>>>>>> react+webpack+server

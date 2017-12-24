import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

import { counter } from './reducers/counter'

import App from './components/App.jsx'

const store = createStore(combineReducers({counter, form: formReducer}))

store.subscribe((a) => { console.log(store.getState(), a) })
store.dispatch({ type: 'DECREMENT' })


render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)
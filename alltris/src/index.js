/* eslint-disable react/jsx-filename-extension */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from './store'
import Alltris from './Alltris'

/**
 *  index.js - Entry point for app. Also provides access to redux store
 */

ReactDOM.render((
  <Provider store={store}>
    <Alltris />
  </Provider>
), document.getElementById('root'))

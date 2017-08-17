import { combineReducers, createStore } from 'redux'
import gameStateReducer from './gameStateDuck'
import matrixReducer from './matrixDuck'

const initialState = {
  gameState: {},
  matrix: {},
}

const rootReducer = combineReducers({
  gameState: gameStateReducer,
  matrix: matrixReducer,
})

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store

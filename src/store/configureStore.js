import { createStore, combineReducers } from 'redux'
import language from '../reducers/language'

export default () => {
  const store = createStore(
    combineReducers({
      language,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}

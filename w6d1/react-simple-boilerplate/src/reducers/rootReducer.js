import { combineReducers } from 'redux'
import user from './userReducer'
import messages from './messageReducer'

export default combineReducers({
  user,
  messages
})

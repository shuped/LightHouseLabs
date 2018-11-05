const messageState = {
  messages: [],
  userCount: 0
}

const messageReducer = (state = messageState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
    return {
      ...state,
      messages: [ ...state.messages, action.payload ]
    };

    case 'USER_COUNT':
    return {
      ...state,
      userCount: action.payload.userCount
    }

    default:
      return state;
  }
}
export default messageReducer;
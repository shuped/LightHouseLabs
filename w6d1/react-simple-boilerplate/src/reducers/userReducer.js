const userState = {
  username: 'anon',
  color: '000000'
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload.username
      };

    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload.color
      };
    
    default:
      return state;
  }
};
export default userReducer;
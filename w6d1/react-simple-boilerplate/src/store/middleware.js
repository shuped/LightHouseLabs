const middleware = {};
// fork the library, make changes, update package.json to point at my fork
// changes: dist actions 
middleware.websocketMessage = store => next => action => {
  if (action.type === 'WEBSOCKET:MESSAGE') {
    const nextAction = JSON.parse(action.payload);

    switch (nextAction.type) {
      case 'ADD_MESSAGE':
        return store.dispatch(nextAction);
      default:
        return next(nextAction);
    }
    
  }
  return next(action);
};

export default middleware;

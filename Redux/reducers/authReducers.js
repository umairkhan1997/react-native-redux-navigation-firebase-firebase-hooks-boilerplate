const initial_state = {
    user: 'user one'
  };
  
  const reducer = (state = initial_state, action) => {
    switch (action.type) {
      case "UPDATE_USER": {
        console.log(action.payload)
        return { ...state, user:action.payload};
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
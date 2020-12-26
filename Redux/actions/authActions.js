

const updateUser = (user) => {
  return function(dispatch) {
    //  // console.log(id)
  return dispatch({
      type: "UPDATE_USER",
      payload:user
    });
  }}


  export { updateUser };
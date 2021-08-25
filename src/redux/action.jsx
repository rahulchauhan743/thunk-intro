export const fetchCreator = () => {
    return {
      type: "FETCH_USERS",
    };
  };
  
  export const successCreator = (users) => {
    return {
      type: "SUCCESS_USERS",
      payload: users,
    };
  };
  
  export const failureCreator = (err) => {
    return {
      type: "FAILURE_USERS",
      payload: err,
    };
  };

  export const fetchUsers = () =>{
     return (dispatch) =>{
         
        fetchCreator(dispatch);

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
           return res.json();
        })
        .then((json) => {
            dispatch(successCreator(json))
        })
        .catch((err) => {
            dispatch(failureCreator(err));
        })


     }

  }
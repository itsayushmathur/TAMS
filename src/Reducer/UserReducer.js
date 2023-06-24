const initialState = {
  authenticated: true,
  usertype: null,
  userDetails: null
};

export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userDetails: action.payload,
        authenticated: true,
        usertype: action.usertype
      };

    case "LOGOUT":
      return {
        ...state,
        userDetails: null,
        authenticated: false,
        usertype: null
      };

    default:
      return state;
  }
};

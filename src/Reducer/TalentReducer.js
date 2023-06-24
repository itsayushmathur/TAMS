const initialState = {
  authenticated: true,
  usertype: "",
  talentDetails: {
    department: {},
    designation: {},
  },
};

export const TalentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        talentDetails: action.payload,
        authenticated: true,
        usertype: action.usertype,
      };

    case "LOGOUT":
      return {
        ...state,
        talentDetails: false,
        authenticated: false,
        usertype: null,
      };

    default:
      return state;
  }
};

import types from "../types";

const initialState = {
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return { ...state, user: action.payload };
    case types.SUCCESS_MESSAGE:
      return { ...state, message: "user created successfull" };
    case types.CLEAR_MESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};

export default userReducer;

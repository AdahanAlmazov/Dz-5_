import axios from "axios";
import types from "./types";

export const createUserSuccessAction = (message) => ({
  type: types.CREATE_USER,
  payload: message,
});
export const successMessageAction = () => ({ type: types.SUCCESS_MESSAGE });
export const clearMesaageAction = () => ({ type: types.CLEAR_MESSAGE });

export const createUser = (user) => async (dispatch) => {
  try {
    await axios.post("https://jsonplaceholder.typicode.com/users", user);
    dispatch(createUserSuccessAction("user created successfull"));
    dispatch(successMessageAction());
    setTimeout(() => {
      dispatch(clearMesaageAction());
    }, 6000);
  } catch (error) {
    console.error(error);
  }
};

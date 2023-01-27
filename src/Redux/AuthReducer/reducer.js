import { getLocalData, saveLocalData } from "../../Utils/localStorage";
import * as types from "./actionTypes";

const initState = {
  name: getLocalData("name") || "",
  email: getLocalData("email") || "",
  avatar: getLocalData("avatar") || "",
  token: getLocalData("token") || "",
  isAuth: getLocalData("token") ? true : false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER:
      saveLocalData("name", payload.name);
      saveLocalData("email", payload.email);
      saveLocalData("avatar", payload.avatar);
      saveLocalData("token", payload.token);
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        avatar: payload.avatar,
        token: payload.token,
        isAuth: true,
      };

    case types.LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        name: "",
        email: "",
        avatar: "",
        isAuth: false,
        token: "",
      };

    default:
      return state;
  }
};

import { getLocalData, saveLocalData } from "../../Utils/localStorage";
import * as types from "./actionTypes";

const initState = {
  name: getLocalData("username") || "",
  email: getLocalData("email") || "",
  avatar: getLocalData("avatar") || "",
  token: getLocalData("token") || "",
  isAuth: getLocalData("token") ? true : false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER:
      saveLocalData("username", payload.username);
      saveLocalData("email", payload.email);
      saveLocalData("avatar", payload.avatar);
      saveLocalData("token", payload.token);
      return {
        name: payload.name,
        email: payload.email,
        avatar: payload.avatar,
      };

    default:
      return state;
  }
};

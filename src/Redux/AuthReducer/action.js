import * as types from "./actionTypes";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase";

export const loginUser = () => (dispatch) => {
  return signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: types.LOGIN_USER,
        payload: {
          name: res.user.displayName,
          email: res.user.email,
          avatar: res.user.photoURL,
          token: res.user.accessToken,
        },
      });
    })
    .catch((err) => console.log(err.message));
};

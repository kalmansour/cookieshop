import instance from "./instance";
import decode from "jwt-decode";
import { SET_USER } from "./types";

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signup", userData);
      dispatch({
        type: SET_USER,
        payload: decode(response.data.token),
      });
      history.replaceState("/");
    } catch (error) {
      console.log("authStore -> signup -> error", error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signin", userData);
      console.log(decode(response.data.token));
      dispatch({
        type: SET_USER,
        payload: decode(response.data.token),
      });
      history.replaceState("/");
    } catch (error) {
      console.log("authStore -> signup -> error", error);
    }
  };
};

export const signout = () => {
  return (dispatch) => {
    // Shouldn't it be asyncronous
    dispatch({
      type: SET_USER,
      payload: null,
    });
  };
};

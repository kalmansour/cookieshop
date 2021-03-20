import instance from "./instance";
import decode from "jwt-decode";
import { SET_USER } from "./types";

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: SET_USER,
    payload: decode(token),
  };
};

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signup", userData);
      localStorage.setItem("myToken", response.data.token);
      dispatch(setUser(response.data.token));
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
      localStorage.setItem("myToken", response.data.token);
      dispatch(setUser(response.data.token));
      history.replaceState("/");
    } catch (error) {
      console.log("authStore -> signup -> error", error);
    }
  };
};

export const signout = () => {
  return (dispatch) => {
    localStorage.removeItem("myToken");
    dispatch({
      type: SET_USER,
      payload: null,
    });
  };
};

export const checkForToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        dispatch(setUser(token));
      } else {
        dispatch(signout());
      }
    }
  };
};

import instance from "../instance";

// ACTION TYPES
import {
  FETCH_COOKIES,
  CREATE_COOKIE,
  DELETE_COOKIE,
  UPDATE_COOKIE,
} from "./types";

// Create Cookie Action
export const createCookie = (newCookie) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newCookie) formData.append(key, newCookie[key]);
    const response = await instance.post("/cookies", formData);
    this.cookies.push(response.data);
    dispatch({
      type: CREATE_COOKIE,
      payload: { newCookie: response.data },
    });
  } catch (error) {
    console.log("createCookie -> error", error);
  }
};

// Delete Cookie Action
export const deleteCookie = (cookieId) => async (dispatch) => {
  try {
    await instance.delete(`/cookies/${cookieId}`);
    dispatch({
      type: DELETE_COOKIE,
      payload: { cookieId },
    });
  } catch (error) {
    console.log("deleteCookie -> error", error);
  }
};

// Update Cookie Action
export const updateCookie = (updatedCookie) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedCookie) formData.append(key, updatedCookie[key]);
    await instance.put(`/cookies/${updatedCookie.id}`, formData);
    const cookie = this.cookies.find(
      (cookie) => cookie.id === updatedCookie.id
    );
    for (const key in updatedCookie) cookie[key] = updatedCookie[key];
    cookie.image = URL.createObjectURL(updatedCookie.image);
    dispatch({
      type: UPDATE_COOKIE,
      payload: { updatedCookie },
    });
  } catch (error) {
    console.log("updateCookie -> error", error);
  }
};

export const fetchCookies = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/cookies");
      dispatch({
        type: FETCH_COOKIES,
        payload: response.data,
      });
    } catch (error) {
      console.log("fetchCookies -> error", error);
    }
  };
};

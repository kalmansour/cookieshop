import axios from "axios";

// ACTION TYPES
const DELETE_COOKIE = "DELETE_COOKIE";

// Delete Cookie Action
export const deleteCookie = (cookieId) => {
  return {
    type: DELETE_COOKIE,
    payload: { cookieId }, // similiar to {cookieId: cookieId}
  };
};

export const fetchCookies = () => {
  console.log("Lets fetch some cookies");
  return {
    type: FETCH_COOKIES,
  };
};

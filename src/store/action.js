// import axios from "axios";

// ACTION TYPES
const CREATE_COOKIE = "CREATE_COOKIE";
const DELETE_COOKIE = "DELETE_COOKIE";
const UPDATE_COOKIE = "UPDATE_COOKIE";

// Create Cookie Action
export const createCookie = (newCookie) => {
  console.log("createCookie -> newCookie", newCookie);
  return {
    type: CREATE_COOKIE,
    payload: { newCookie },
  };
};

// Delete Cookie Action
export const deleteCookie = (cookieId) => {
  return {
    type: DELETE_COOKIE,
    payload: { cookieId }, // similiar to {cookieId: cookieId}
  };
};

// Update Cookie Action
export const updateCookie = (updatedCookie) => {
  console.log("updateCookie -> updatedCookie", updatedCookie);
  return {
    type: UPDATE_COOKIE,
    payload: { updatedCookie },
  };
};

export const fetchCookies = () => {
  console.log("Lets fetch some cookies");
  return {
    type: FETCH_COOKIES,
  };
};

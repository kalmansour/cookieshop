import cookiesData from "../cookies";
import slugify from "react-slugify";

const initialState = {
  cookies: cookiesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COOKIE":
      const { newCookie } = action.payload;
      newCookie.id = state.cookies[state.cookies.length - 1].id + 1;
      newCookie.slug = slugify(newCookie.name);
      return {
        ...state,
        cookies: [...state.cookies, action.payload.newCookie],
      };
    case "DELETE_COOKIE":
      return {
        ...state,
        cookies: state.cookies.filter(
          (cookie) => cookie.id !== action.payload.cookieId
        ),
      };
    case "UPDATE_COOKIE":
      const { updatedCookie } = action.payload;
      updatedCookie.slug = slugify(updatedCookie.name);
      return {
        ...state,
        cookies: state.cookies.map((cookie) => {
          if (cookie.id === updatedCookie.id) return updatedCookie;
          return cookie;
        }),
      };
  }
};

export default reducer;

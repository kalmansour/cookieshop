import slugify from "react-slugify";

const initialState = {
  cookies: [],
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COOKIES":
      return {
        ...state,
        cookies: action.payload,
      };
    case "CREATE_COOKIE":
      const { newCookie } = action.payload;
      newCookie.id = state.cookies[state.cookies.length - 1].id + 1;
      newCookie.slug = slugify(newCookie.name);
      return {
        ...state,
        cookies: [...state.cookies, newCookie],
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

export default cookieReducer;

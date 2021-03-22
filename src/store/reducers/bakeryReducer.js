import slugify from "react-slugify";

const initialState = {
  bakeries: [],
};

const bakeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BAKERIES":
      return {
        ...state,
        bakeries: action.payload,
      };
    case "CREATE_BAKERY":
      const { newBakery } = action.payload;
      newBakery.id = state.bakeries[state.bakeries.length - 1].id + 1;
      newBakery.slug = slugify(newBakery.name);
      return {
        ...state,
        bakeries: [...state.bakeries, action.payload.newBakery],
      };
    default:
      return state;
  }
};

export default bakeryReducer;

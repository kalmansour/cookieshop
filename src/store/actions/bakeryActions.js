import instance from "../instance";

// ACTION TYPES
import { FETCH_BAKERIES, CREATE_BAKERY } from "./types";

// Create Bakery Action
export const createBakery = (newBakery) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newBakery) formData.append(key, newBakery[key]);
    const response = await instance.post("/bakeries", formData);
    this.bakeries.push(response.data);
    dispatch({
      type: CREATE_BAKERY,
      payload: { newBakery: response.data },
    });
  } catch (error) {
    console.log("createBakery -> error", error);
  }
};

export const fetchBakeries = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/bakeries");
      dispatch({
        type: FETCH_BAKERIES,
        payload: response.data,
      });
    } catch (error) {
      console.log("fetchBakeries -> error", error);
    }
  };
};

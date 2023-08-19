import { GET_ALL_REVIEWS_REQUEST, GET_ALL_REVIEWS_SUCCESS, GET_ALL_REVIEWS_FAILURE } from "../actionTypes";

const initialState = {
    loading: false,
    data: {},
    error: "",
  };
  
  const getAllReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_REVIEWS_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: "",
        };
      case GET_ALL_REVIEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          data: action.payload,
        };
      case GET_ALL_REVIEWS_FAILURE:
        return {
          ...state,
          loading: false,
          data: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export { getAllReviewsReducer };
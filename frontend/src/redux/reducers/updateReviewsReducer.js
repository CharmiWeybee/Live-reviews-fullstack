import { UPDATE_REVIEWS_REQUEST, UPDATE_REVIEWS_SUCCESS, UPDATE_REVIEWS_FAILURE } from "../actionTypes";


const initialState = {
    loading: false,
    data: {},
    error: "",
  };
  
  const updateReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_REVIEWS_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: "",
        };
      case UPDATE_REVIEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          data: action.payload,
        };
      case UPDATE_REVIEWS_FAILURE:
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
  
  export { updateReviewsReducer };
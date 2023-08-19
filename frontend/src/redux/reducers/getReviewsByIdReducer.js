import { GET_REVIEWS_BY_ID_REQUEST, GET_REVIEWS_BY_ID_SUCCESS, GET_REVIEWS_BY_ID_FAILURE } from "../actionTypes";

const initialState = {
    loading: false,
    data: {},
    error: "",
  };
  
  const getReviewsByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REVIEWS_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: "",
        };
      case GET_REVIEWS_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          data: action.payload,
        };
      case GET_REVIEWS_BY_ID_FAILURE:
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
  
  export { getReviewsByIdReducer };
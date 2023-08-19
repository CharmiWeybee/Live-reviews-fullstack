import { DELETE_REVIEWS_REQUEST, DELETE_REVIEWS_SUCCESS, DELETE_REVIEWS_FAILURE} from "../actionTypes";


const initialState = {
    loading: false,
    data: {},
    error: "",
  };
  
  const deleteReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_REVIEWS_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: "",
        };
      case DELETE_REVIEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          data: action.payload,
        };
      case DELETE_REVIEWS_FAILURE:
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
  
  export { deleteReviewsReducer };
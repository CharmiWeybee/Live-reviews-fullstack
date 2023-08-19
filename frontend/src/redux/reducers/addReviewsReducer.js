import { ADD_REVIEWS_REQUEST, ADD_REVIEWS_SUCCESS, ADD_REVIEWS_FAILURE} from "../actionTypes";


const initialState = {
    loading: false,
    data: {},
    error: "",
  };
  
  const addReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_REVIEWS_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: "",
        };
      case ADD_REVIEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          data: action.payload,
        };
      case ADD_REVIEWS_FAILURE:
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
  
  export { addReviewsReducer };
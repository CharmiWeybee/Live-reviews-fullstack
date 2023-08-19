import { combineReducers } from "redux";
import {getAllReviewsReducer} from "./getAllReviewsReducer";
import {getReviewsByIdReducer} from "./getReviewsByIdReducer";
import {addReviewsReducer} from "./addReviewsReducer";
import {updateReviewsReducer} from "./updateReviewsReducer";
import {deleteReviewsReducer} from "./deleteReviewsReducer";

export const rootReducer = combineReducers({
    getAllReviewsReducer,
getReviewsByIdReducer,
addReviewsReducer,
updateReviewsReducer,
deleteReviewsReducer

});
import { ADD_REVIEWS_FAILURE, ADD_REVIEWS_REQUEST, ADD_REVIEWS_SUCCESS, DELETE_REVIEWS_FAILURE, DELETE_REVIEWS_REQUEST, DELETE_REVIEWS_SUCCESS, GET_ALL_REVIEWS_FAILURE, GET_ALL_REVIEWS_REQUEST, GET_ALL_REVIEWS_SUCCESS, GET_REVIEWS_BY_ID_FAILURE, GET_REVIEWS_BY_ID_REQUEST, GET_REVIEWS_BY_ID_SUCCESS, UPDATE_REVIEWS_FAILURE, UPDATE_REVIEWS_REQUEST, UPDATE_REVIEWS_SUCCESS } from "./actionTypes";
import { addReviewService, deleteReviewService, getAllreviewsService, getReviewsByIdService, updateReviewService } from "./service";

const request = (type) => {
	return {
		type,
	};
};
const success = (type, data) => {
	return {
		type,
		payload: data,
	};
};
const failure = (type, error) => {
	return {
		type,
		payload: error,
	};
};


export const fetchAllReviews = () => {
	console.log("dgbj")
	return async (dispatch) => {
		dispatch(request(GET_ALL_REVIEWS_REQUEST));
		await getAllreviewsService().then(
			(result) =>
				dispatch(success(GET_ALL_REVIEWS_SUCCESS, result.data)),
			(error) =>
				dispatch(failure(GET_ALL_REVIEWS_FAILURE, error.message))
		);
	};
};

export const fetchReviewsById = (id) => {
	return async (dispatch) => {
		dispatch(request(GET_REVIEWS_BY_ID_REQUEST));

		await getReviewsByIdService(id).then(
			(result) =>
				dispatch(success(GET_REVIEWS_BY_ID_SUCCESS, result.data)),
			(error) =>
				dispatch(failure(GET_REVIEWS_BY_ID_FAILURE, error.message))
		);
	};
};

export const addReview = (formData, callback) => {
	return async (dispatch) => {
		dispatch(request(ADD_REVIEWS_REQUEST));

		await addReviewService(formData).then(
			(result) => {
				dispatch(success(ADD_REVIEWS_SUCCESS, result));
				callback();
			},
			(error) => {
				dispatch(failure(ADD_REVIEWS_FAILURE, error.message));
			}
		);
	};
};



export const updateReviews = (
	fromData,
	id,
	callback
) => {
	return async (dispatch) => {
		dispatch(request(UPDATE_REVIEWS_REQUEST));

		await updateReviewService(fromData, id).then(
			(result) => {
				dispatch(success(UPDATE_REVIEWS_SUCCESS, result));
				callback()
			},
			(error) => {
				dispatch(failure(UPDATE_REVIEWS_FAILURE, error.message));
			}
		);
	};
};

export const deleteReviews = (
	id, callback
) => {
	return async (dispatch) => {
		dispatch(request(DELETE_REVIEWS_REQUEST));

		await deleteReviewService(id).then(
			(result) => {
				dispatch(success(DELETE_REVIEWS_SUCCESS, result));
				callback()
			},
			(error) => {
				dispatch(failure(DELETE_REVIEWS_FAILURE, error.message));
			}
		);
	};
};
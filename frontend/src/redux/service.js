import { axiosInstance } from "../helpers/apiRequests";

const REVIEW = "reviews"

export const getAllreviewsService = async () => {
    const res = await axiosInstance.get(`${REVIEW}`);
	return res;
};

export const getReviewsByIdService = async (id) => {
	const res = await axiosInstance.get(`${REVIEW}/${id}`);
	return res;
};

export const addReviewService = async (formData) => {
	return axiosInstance({
		method: 'post',
		url: REVIEW,
		data: formData,
		headers: { 'Content-Type': 'application/json' },
	});
};

export const updateReviewService = async (formData, id) => {
	return axiosInstance({
		method: 'put',
		url: `${REVIEW}/${id}`,
		data: formData,
		headers: { 'Content-Type': 'application/json'},
	});
};

export const deleteReviewService = async (id) => {
	return axiosInstance({
		method: 'delete',
		url: `${REVIEW}/${id}`,
		headers: { 'Content-Type': 'application/json'},
	});
};
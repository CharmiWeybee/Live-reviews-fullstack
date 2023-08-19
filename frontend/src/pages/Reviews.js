import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteReviews, fetchAllReviews } from '../redux/actions';
import "../style.css";
import TableComponent from '../components/TableComponent'

const Reviews = ({fetchreviews, dataRes, deleteReviews}) => {
const navigate = useNavigate()

useEffect(()=>{
  fetchreviews()
}, [])

  
  const handleEdit = (rowData) => {
    navigate(rowData._id)
  };

  const handleDelete = (id) => {
    deleteReviews(id, () => {
		fetchreviews()
	})
  };


  return (
	<div>
	{dataRes && dataRes.length > 0 &&
		<TableComponent data={dataRes} onEdit={handleEdit} onDelete={handleDelete} />}
	</div>
  )
}



const mapStateToProps = (state) => {
	return {
		dataRes: state.getAllReviewsReducer.data || [],
		dataLoading: state.getAllReviewsReducer.loading,
		dataErr: state.getAllReviewsReducer.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchreviews: () =>
			dispatch(fetchAllReviews()),
		deleteReviews: (id, callback) =>
			dispatch(deleteReviews(id, callback)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
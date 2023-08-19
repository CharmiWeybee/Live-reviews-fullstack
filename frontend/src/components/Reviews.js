import React, { useEffect } from 'react'
import { deleteReviews, fetchAllReviews } from '../redux/actions';
import { connect } from 'react-redux';
import "../style.css";
import TableComponent from './TableComponent';
import { useNavigate } from 'react-router-dom';

const Reviews = ({fetchreviews, dataRes, deleteReviews}) => {
const navigate = useNavigate()

useEffect(()=>{
  fetchreviews()
}, [])

  
  const handleEdit = (rowData) => {
    // Here you can handle the edit functionality, e.g., open a modal with the row data
    navigate(rowData._id)
  };

  const handleDelete = (id) => {
    // Remove the item from the data array
    // const updatedData = data.filter(item => item.id !== id);
    deleteReviews(id, () => {
		fetchreviews()
	})
    // setData(updatedData);
  };

console.log(dataRes)

  return (
	<div>
	<button onClick={() => navigate("/new")}>New</button>
	{dataRes && dataRes.length > 0 &&
		<TableComponent data={dataRes} onEdit={handleEdit} onDelete={handleDelete} />}
	</div>
  )
}



const mapStateToProps = (state) => {
  console.log(state)
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
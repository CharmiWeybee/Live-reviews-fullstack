import React, { useEffect, useState } from 'react'
import { addReview, fetchReviewsById, updateReviews } from '../redux/actions'
import { connect } from 'react-redux'
import "../style.css"
import { useNavigate, useParams } from 'react-router-dom'

const ReviewForm = ({getReviewsById, addReviews, updateReviews, dataRes} ) => {
  const navigate = useNavigate()
  const params = useParams();

  const [data, setData] = useState({
    title: "", content: ""
  })

  useEffect(()=>{
    if(params.id) {
      getReviewsById(params.id)
    }
  }, [params])

  useEffect(() => {
    if(dataRes) {
      setData({title: dataRes.title, content: dataRes.content })
    }
  }, [dataRes])

  const handleChange = (type, value) => {
    setData({...data, [type]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id) {
      updateReviews(data, params.id, () => {
        navigate("/")
      });
    } else {
      addReviews(data, () => {
        navigate("/")
      });
    }

  }

  return (
    <div>
        <div className="container">
<h2>Add Review</h2>
  <form>
    <div className="row">
      <div className="col-25">
        <label >Title</label>
      </div>
      <div className="col-75">
        <input type="text" name="title" placeholder="Enter Title.." value={data.title} onChange={(e) => handleChange("title", e.target.value)} />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>Content</label>
      </div>
      <div className="col-75">
        <textarea id="content" name="content" placeholder="Write something" value={data.content} onChange={(e) => handleChange("content", e.target.value)}></textarea>
      </div>
    </div>
    <div className="row">
<button type='button' onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  </form>
</div>
    </div>
  )
}

const mapStateToProps = (state) => {
	return {
		dataRes: state.getReviewsByIdReducer.data,
		dataLoading: state.getReviewsByIdReducer.loading,
		dataErr: state.getReviewsByIdReducer.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getReviewsById: (id) =>
			dispatch(fetchReviewsById(id)),
		addReviews: (formdata, callback) =>
			dispatch(addReview(formdata, callback)),
		updateReviews: (formdata, id, callback) =>
			dispatch(updateReviews(formdata, id, callback)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
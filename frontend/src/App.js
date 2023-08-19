import { Route, Routes } from 'react-router-dom';
import {  connect } from "react-redux";
import io from 'socket.io-client';

import './App.css';
import { useEffect } from 'react';
import { fetchAllReviews } from './redux/actions';
import Reviews from './pages/Reviews';
import ReviewForm from './pages/ReviewForm';

const socket = io('http://localhost:5001/');
function App({fetchreviews}) {
   useEffect(() => {
    socket.on('reviewAdded', (newReview) => {
      fetchreviews()
    });

    socket.on('reviewUpdated', (updatedReview) => {
      fetchreviews()
    });

    socket.on('reviewDeleted', (reviewId) => {
      fetchreviews()
    });

    return () => {
      socket.off('reviewAdded');
      socket.off('reviewUpdated');
      socket.off('reviewDeleted');
    };
  }, []);

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={ <Reviews/> } />
        <Route path="new" element={ <ReviewForm/> } />
        <Route path="/:id" element={ <ReviewForm/> } />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchreviews: () =>
			dispatch(fetchAllReviews())
	};
};

export default connect(null, mapDispatchToProps)(App);

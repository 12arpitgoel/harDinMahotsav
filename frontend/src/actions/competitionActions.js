import axios from "axios";

import {
  COMPETITION_DETAILS_REQUEST,
  COMPETITION_DETAILS_SUCCESS,
  COMPETITION_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/competitionConstants";



// Get Events Details
export const getCompetitionDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMPETITION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/competition/${id}`);
  
    dispatch({
      type: COMPETITION_DETAILS_SUCCESS,
      payload: data.competition,
    });
  } catch (error) {
    console.log(error); 
    dispatch({
      type: COMPETITION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // NEW REVIEW
// export const newReview = (reviewData) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_REVIEW_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(`/api/v1/review`, reviewData, config);

//     dispatch({
//       type: NEW_REVIEW_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEW_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get All Reviews of a Event
// export const getAllReviews = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_REVIEW_REQUEST });

//     const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

//     dispatch({
//       type: ALL_REVIEW_SUCCESS,
//       payload: data.reviews,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete Review of a Event
// export const deleteReviews = (reviewId, eventId) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_REVIEW_REQUEST });

//     const { data } = await axios.delete(
//       `/api/v1/reviews?id=${reviewId}&eventId=${eventId}`
//     );

//     dispatch({
//       type: DELETE_REVIEW_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

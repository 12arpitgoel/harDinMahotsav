import {
    COMPETITION_DETAILS_REQUEST,
    COMPETITION_DETAILS_SUCCESS,
    COMPETITION_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/competitionConstants";
    
  export const competitionDetailsReducer = (state = { competition: {} }, action) => {
    switch (action.type) {
      case COMPETITION_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case COMPETITION_DETAILS_SUCCESS:
        return {
          loading: false,
          competition: action.payload,
        };
      case COMPETITION_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  // export const newReviewReducer = (state = {}, action) => {
  //   switch (action.type) {
  //     case NEW_REVIEW_REQUEST:
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  //     case NEW_REVIEW_SUCCESS:
  //       return {
  //         loading: false,
  //         success: action.payload,
  //       };
  //     case NEW_REVIEW_FAIL:
  //       return {
  //         ...state,
  //         loading: false,
  //         error: action.payload,
  //       };
  //     case NEW_REVIEW_RESET:
  //       return {
  //         ...state,
  //         success: false,
  //       };
  //     case CLEAR_ERRORS:
  //       return {
  //         ...state,
  //         error: null,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  
  // export const eventReviewsReducer = (state = { reviews: [] }, action) => {
  //   switch (action.type) {
  //     case ALL_REVIEW_REQUEST:
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  //     case ALL_REVIEW_SUCCESS:
  //       return {
  //         loading: false,
  //         reviews: action.payload,
  //       };
  //     case ALL_REVIEW_FAIL:
  //       return {
  //         ...state,
  //         loading: false,
  //         error: action.payload,
  //       };
  
  //     case CLEAR_ERRORS:
  //       return {
  //         ...state,
  //         error: null,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  
  // export const reviewReducer = (state = {}, action) => {
  //   switch (action.type) {
  //     case DELETE_REVIEW_REQUEST:
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  //     case DELETE_REVIEW_SUCCESS:
  //       return {
  //         ...state,
  //         loading: false,
  //         isDeleted: action.payload,
  //       };
  //     case DELETE_REVIEW_FAIL:
  //       return {
  //         ...state,
  //         loading: false,
  //         error: action.payload,
  //       };
  //     case DELETE_REVIEW_RESET:
  //       return {
  //         ...state,
  //         isDeleted: false,
  //       };
  //     case CLEAR_ERRORS:
  //       return {
  //         ...state,
  //         error: null,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  
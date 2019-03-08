import axios from 'axios';
import { FETCH_POST_SUCCESS, ADD_COMMENT_SUCCESS } from './constants.js';

export const fetchData = args => dispatch => {
  return axios.get('/items', { params: { ...args }})
    .then((res) => {
      dispatch(fetchDataSuccess(res.data));
    })
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_POST_SUCCESS,
    data
  }
}

export const addComment = args => dispatch => {
  return axios.put('/items', { ...args})
    .then((res) => {
      dispatch(addCommentSuccess(res.data));
    })
} 

function addCommentSuccess(data) {
  return {
    type: ADD_COMMENT_SUCCESS,
    data
  }
}
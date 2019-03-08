import axios from 'axios';
import { FETCH_DATA_SUCCESS } from './constants.js';

export const fetchData = () => dispatch => {
  return axios.get('/items')
    .then((res) => {
      dispatch(fetchDataSuccess(res.data));
    })
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  }
}

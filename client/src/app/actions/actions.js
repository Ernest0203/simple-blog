import axios from 'axios';
import { CREATE_ITEM_SUCCESS } from '../../pages/latestPosts/actions/constants.js';

export const createItem = args => dispatch => {
  return axios.post('/items', args)
    .then((res) => {
      dispatch(createItemSuccess(res.data));
    })
    .catch((err) => console.log(err.data))
}

function createItemSuccess(data) {
  return {
    type: CREATE_ITEM_SUCCESS,
    data
  }
}
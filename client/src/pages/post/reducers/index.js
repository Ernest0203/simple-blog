import { FETCH_POST_SUCCESS, ADD_COMMENT_SUCCESS } from '../actions/constants.js';

const initialState = {
  data: {},
};

const post = (state = initialState, action) => {
  switch(action.type) {

    case FETCH_POST_SUCCESS:
      return { 
        ...state,
        data: { ...action.data[0] },
      }

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        data: { ...action.data }
      }
    
    default:
      return state;
  }
}

export default post;
import { FETCH_DATA_SUCCESS, CREATE_ITEM_SUCCESS } from '../actions/constants.js';

const initialState = {
  data: [],
  firstLoad: true,
};

const listing = (state = initialState, action) => {
  switch(action.type) {

    case FETCH_DATA_SUCCESS:
      return { 
        ...state,
        data: [ ...action.data ],
        firstLoad: false,
      }

    case CREATE_ITEM_SUCCESS:
      const updatedData = state.data.slice(0);
      updatedData.unshift(action.data);
      return {
        ...state,
        data: updatedData,
      }
    
    default:
      return state;
  }
}

export default listing;
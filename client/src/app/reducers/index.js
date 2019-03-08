const initialState = {
  popupIsOpen: false
};

const general = (state = initialState, action) => {
  switch(action.type) {

    case 'POPUP_TOGGLE':
      return { ...state, popupIsOpen: !state.popupIsOpen }
    
    default:
      return state;
  }
}

export default general;
import { connect } from 'react-redux';

import ListingComponent from '../components/listingComponent.jsx';

import {
  fetchData
} from '../actions/listingActions.js';

const mapStateToProps = (state) => {
  const { data, firstLoad } = state.listing;
  return { data, firstLoad };
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);

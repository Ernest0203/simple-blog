import { connect } from 'react-redux';

import PostComponent from '../components/postComponent.jsx';

import {
  fetchData,
  addComment,
} from '../actions/actions.js';

const mapStateToProps = (state) => {
  const { data } = state.post;
  return { data };
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (args) => {
    dispatch(fetchData(args));
  },
  addComment: (args) => {
    dispatch(addComment(args));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);

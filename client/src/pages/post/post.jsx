import React from 'react';

import PostContainer from './containers/postContainer.js';

const Post = (props) => {
  return (
    <PostContainer _id={props.location.state._id}/>
  )
}

export default Post;
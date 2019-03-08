import React, { Component } from 'react';
import styles from './styles.module.scss';

import Feed from '../../../ui/elements/feed/Feed';

class PostComponent extends Component {
  componentDidMount() {
    this.props.fetchData({ _id: this.props._id });
  }

  render () {
    const { _id, title, body, author, formattedDate, comments } = this.props.data;
         
    return (
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.content}>{body}</div>
          <div className={styles.footer}>
            <div>{author}</div>
            <div>{formattedDate}</div>
          </div>
        </div>
        <Feed _id={_id} comments={comments} addComment={this.props.addComment}/>
      </div>
    )
  }
}

export default PostComponent;
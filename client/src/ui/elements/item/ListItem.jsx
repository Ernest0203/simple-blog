import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const ListItem = (props) => {
  let { _id, title, body, author, formattedDate } = props.data;

  return (
    <li className={styles.listItem}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{body}</div>
      <div className={styles.footer}>
        <div>{author}</div>
        <div><Link to={ { pathname: `/posts/${_id}`, state: { _id: props.data._id }} }>Read more</Link></div>
        <div>{formattedDate}</div>
      </div>
    </li>
  )
}

export default ListItem;
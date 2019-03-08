import React, { Component } from 'react';
import styles from './styles.module.scss';

import Input from '../form/Input';
import TextArea from '../form/Textarea';
import Button from '../button/Button';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
    }
  }

  setContent = (prop) => {
    this.setState({ [prop.target.name]: prop.target.value })
  }

  fieldValidation = () => {
    return Object.values(this.state).every((key) => {
      if (key !== '') {
        return true;
      } else return false;
    })
  }

  clearForm = (e) => {
    Object.keys(e.target.parentNode.parentNode.elements).forEach((key) => {
      e.target.parentNode.parentNode.elements[key].value = '';
    })
  }

  createItem = (e) => {
    e.preventDefault();
    if (!this.fieldValidation()) {
      alert('Fill all fields');
      return false;
    }
    this.props.addComment({query: { _id: this.props._id}, data: this.state});
    this.clearForm(e);
    this.setState(this.initialState);
  }

  render () {
    const { comments } = this.props;
   
    const list = (comments || []).length > 0
      ? comments.map((comment) => (
          <li className={styles.commentsItem}>
            <h3>{comment.name}:</h3>
            <div>{comment.text}</div>
          </li>
        ))
      : <li>Loading...</li>    
      
    return (
      <div className={styles.feed}>
        <h4 className={styles.title}>Comments:</h4> 
        <ul className={styles.commentsList}>
          {list}
        </ul> 
        <form>
          <Input name="name" type="text" placeholder="Name" onChange={this.setContent}/>
          <br/>
          <TextArea name="text" type="text" placeholder="Comment" onChange={this.setContent}/>
          <br/>
          <a href="" onClick={(e) => this.createItem(e)}><Button text="Post" /></a>
        </form>
      </div>
    )
  }
}

export default Feed;
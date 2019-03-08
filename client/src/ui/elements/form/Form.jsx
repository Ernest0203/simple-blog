import React, { Component } from 'react';

import Input from './Input';
import Textarea from './Textarea';
import Button from '../button/Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
    };
    this.initialState = { ...this.state };
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
    this.props.createItem(this.state);
    this.clearForm(e);
    this.setState(this.initialState);
  }

  render() {
    return (
      <form>
        <Input name="title" type="text" placeholder="Title" onChange={this.setContent}/>
        <br/>
        <Input name="author" type="text" placeholder="Author" onChange={this.setContent}/>
        <br/>
        <Textarea name="body" type="text" placeholder="Content" onChange={this.setContent}/>
        <br/>
        <a href="" onClick={(e) => this.createItem(e)}><Button text="Create post"></Button></a>
      </form>
    )
  }
}

export default Form;
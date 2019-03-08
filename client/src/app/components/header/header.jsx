import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import Button from '../../../ui/elements/button/Button';
import Popup from '../../../ui/elements/popup/Popup';
import Form from '../../../ui/elements/form/Form';

import { createItem } from '../../actions/actions.js';

class Header extends Component {
  popupOpen = (e) => {
    e.preventDefault();
    this.props.popupToggle();
  }

  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Simple blog</h1>
        <div className={styles.headerNavbar}>
          <Link to="/"><Button text="Home"/></Link>
          <a href="" onClick={(e) => this.popupOpen(e)}><Button text="Create post"/></a>
        </div>
        <Popup popupIsOpen={this.props.popupIsOpen} popupToggle={this.props.popupToggle}>
          <Form createItem={this.props.createItem} />
        </Popup>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { popupIsOpen } = state.general;
  return { popupIsOpen };
}

const mapDispatchToProps = (dispatch) => ({
  popupToggle: () => {
    dispatch({type: 'POPUP_TOGGLE'})
  },
  createItem: (data) => {
    dispatch(createItem(data))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


import React from 'react';

import styles from './styles.module.scss';

const Popup = (props) => {
  const { popupIsOpen } = props;
  const style = { display: popupIsOpen ? 'flex' : 'none' };

  const popupClose = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return false;
    window.document.body.style.overflow = 'visible';
    props.popupToggle();
  }

  return (
    <div className={styles.popup} style={style} onClick={(e) => popupClose(e)}>
      <div className={styles.popupContainer}>
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
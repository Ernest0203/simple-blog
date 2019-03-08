import React from 'react';
import styles from './styles.module.scss';

const Input = (props) => {
  const { name, type, placeholder, onChange } = props;
  return (
    <div>
      <input className={styles.input} name={name} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}></input>
    </div>
  );
}

export default Input;
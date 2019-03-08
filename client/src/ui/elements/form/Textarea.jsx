import React from 'react';
import styles from './styles.module.scss';

const Textarea = (props) => {
  const { name, type, placeholder, onChange } = props;
  return (
    <div>
      <textarea className={styles.textarea} name={name} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}></textarea>
    </div>
  );
}

export default Textarea;
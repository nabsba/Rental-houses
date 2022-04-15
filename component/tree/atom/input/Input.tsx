import React, { useState } from 'react';
import styles from './style.module.css';
import TInput from './type';

type Props = {
  data: TInput;
};

const Input: React.FC<Props> = ({ data: { type, value } }) => {
  const [valueIn, setValueIn] = useState('');
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={(event) => setValueIn(valueIn)}
    />
  );
};
export default Input;

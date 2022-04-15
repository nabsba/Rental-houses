import React from 'react';
import styles from './style.module.css';
import TLabel from './type';

type Props = {
  data: TLabel;
};

const Label: React.FC<Props> = ({ data: { htmlFor, id, value } }) => {
  return (
    <div className={styles.label}>
      <label htmlFor={htmlFor} id={id}>
        {value}
      </label>
    </div>
  );
};
export default Label;

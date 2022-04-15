import React from 'react';
import { Input, Label } from '../../atom';
import styles from './style.module.css';
import TInputLabel from './type';

type Props = {
  data: TInputLabel;
};

const InputLabel: React.FC<Props> = ({ data: { label, input } }) => {
  return (
    <div className={styles.input_label}>
      <Label data={label} />
      <Input data={input} />
    </div>
  );
};
export default InputLabel;

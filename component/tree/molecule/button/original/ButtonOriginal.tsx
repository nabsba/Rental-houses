import React, { useState } from 'react';
import styles from './style.module.css';
import TButtonOriginal from './type';
import Button from '@mui/material/Button';
import { Span } from '../../../atom';
type Props = {
  data: TButtonOriginal;
};

const ButtonOriginal: React.FC<Props> = ({ data: { value } }) => {
  const [click, setClick] = useState(false);
  return (
    <div onClick={() => setClick(!click)} className={styles.button_original}>
      <Button variant='outlined'>
        <Span data={value} />
      </Button>
    </div>
  );
};
export default ButtonOriginal;

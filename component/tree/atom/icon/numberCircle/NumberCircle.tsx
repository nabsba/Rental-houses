import { useTheme } from '@mui/styles';
import React from 'react';
import Span from '../../span/Span';
import styles from './style.module.css';
import TNumberCircle from './type';

type Props = {
  data: TNumberCircle;
};

const NumberCircle: React.FC<Props> = ({ data }) => {
  const theme: any = useTheme();
  return (
    <div
      className={styles.number_circle}
      style={{ backgroundColor: `${theme.palette.typography.main}` }}
    >
      <Span data={data} />
    </div>
  );
};
export default NumberCircle;

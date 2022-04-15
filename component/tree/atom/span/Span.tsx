import React from 'react';
import { TSpan } from './type';
import styles from './style.module.css';
import { useTheme } from '@mui/styles';

type TProps = {
  data: TSpan;
};
const Span: React.FC<TProps> = ({ data }) => {
  const theme: any = useTheme();
  const styleComponent = {
    color: theme.palette.typography.dark,
    fontFamily: theme.typography.fontFamily
  };
  return (
    <span className={styles.span} style={styleComponent}>
      {data}
    </span>
  );
};

export default Span;

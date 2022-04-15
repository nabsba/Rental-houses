import React from 'react';
import styles from './style.module.css';
import { TH2 } from './type';
import { useTheme } from '@mui/styles';

type Props = TH2;

const H2: React.FC<Props> = ({ title }) => {
  const theme: any = useTheme();

  const styleComponent = {
    color: theme.palette.typography.main,
    fontFamily: theme.typography.fontFamilyTitle
  };
  return (
    <h2 style={styleComponent} className={styles.title_h2}>
      {title}
    </h2>
  );
};
export default H2;

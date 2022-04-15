import React from 'react';
import { useTheme } from '@mui/styles';
import styles from './style.module.css';
import { TH1 } from './type';

type Props = TH1;

const H1: React.FC<Props> = ({ title }) => {
  const theme: any = useTheme();

  const styleComponent = {
    color: theme.palette.typography.main,
    fontFamily: theme.typography.fontFamilyTitle,
    marginBottom: theme.spacing(6)
  };
  return (
    <h1 style={styleComponent} className={styles.title_h1}>
      {title}
    </h1>
  );
};
export default H1;

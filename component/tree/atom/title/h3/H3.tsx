import React from 'react';
import styles from './style.module.css';
import TH3 from './type';
import { useTheme } from '@mui/styles';
type Props = {
  title: TH3;
};

const H3: React.FC<Props> = ({ title }) => {
  const theme: any = useTheme();
  const styleComponent = {
    color: theme.palette.typography.main,
    fontFamily: theme.typography.fontFamilyTitle
  };
  return (
    <h3 style={styleComponent} className={styles.title_h3}>
      {title}
    </h3>
  );
};
export default H3;

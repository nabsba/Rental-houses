import React from 'react';
import styles from './style.module.css';
import TSubText from './type';
import { useTheme } from '@mui/styles';

type Props = {
  data: TSubText;
};

const SubText: React.FC<Props> = ({ data }) => {
  const theme: any = useTheme();
  const styleComponent = {
    color: theme.palette.typography.light,
    fontFamily: theme.typography.fontFamily
  };
  return (
    <div className={styles.sub_text}>
      <p style={styleComponent}> {data}</p>
    </div>
  );
};
export default SubText;

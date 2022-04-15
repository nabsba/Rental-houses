import { useTheme } from '@mui/styles';
import React from 'react';
// import { useStyles } from '../../page/home/Home';
import styles from './style.module.css';
import { TParagraph } from './type';

type Props = {
  data: TParagraph;
};

const Paragraph: React.FC<Props> = ({ data }) => {
  const theme: any = useTheme();
  const styleComponent = {
    color: theme.palette.typography.light,
    fontFamily: theme.typography.fontFamily,
    lineHeight: theme.spacing(4)
  };
  return (
    <p className={styles.paragraph} style={styleComponent}>
      {data}
    </p>
  );
};
export default Paragraph;

import React from 'react';
import styles from './style.module.css';
import TButtonVariant from './type';
import Button from '@mui/material/Button';
import { Span } from '../../../atom';
import { useTheme } from '@mui/styles';

type Props = {
  data: TButtonVariant;
};

const ButtonVariant: React.FC<Props> = ({ data: { value, isItSelected } }) => {
  const theme: any = useTheme();

  return (
    <Button
      className={styles.button_variant}
      variant='contained'
      size='small'
      style={{
        backgroundColor: isItSelected
          ? theme.palette.neutral.dark
          : theme.palette.neutral.light,
        color: isItSelected
          ? theme.palette.neutral.light
          : theme.palette.neutral.dark
      }}
    >
      <Span data={value} />
    </Button>
  );
};
export default ButtonVariant;

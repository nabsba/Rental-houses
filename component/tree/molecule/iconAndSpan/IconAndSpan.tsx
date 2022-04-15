import { useTheme } from '@mui/styles';
import React from 'react';
import { getIcon } from '../../../factory';
import { Span } from '../../atom';
import styles from './style.module.css';
import TIconAndSpan from './type';

type Props = {
  data: TIconAndSpan;
};

const IconAndSpan: React.FC<Props> = ({ data: { icon, span } }) => {
  const theme: any = useTheme();
  const IconHTML = getIcon(icon);
  return (
    <div
      style={{ color: theme.palette.neutral.dark }}
      className={styles.icon_and_span}
    >
      {IconHTML}
      <div style={{ marginLeft: theme.spacing(1) }}>
        <Span data={span} />
      </div>
    </div>
  );
};

export default IconAndSpan;

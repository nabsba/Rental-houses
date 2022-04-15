import { useTheme } from '@mui/styles';
import Link from 'next/link';
import React from 'react';
import { Span } from '..';
import style from './style.module.css';
import TNavigationAsComponent from './type';

type Props = {
  data: TNavigationAsComponent;
};

const NavigationAsComponent: React.FC<Props> = ({
  data: { text, href, isComponent }
}) => {
  const theme: any = useTheme();
  return (
    <div className={style.navigation_as_component}>
      <Link href={href}>
        <a style={{ color: theme.palette.typography.main }}>
          {isComponent && isComponent}
          <Span data={text} />
        </a>
      </Link>
    </div>
  );
};
export default NavigationAsComponent;

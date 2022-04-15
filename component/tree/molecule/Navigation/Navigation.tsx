import { useTheme } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { THEME_VARIANT } from '../../../../service/Common/constant';
import { getIcon } from '../../../factory';
import { H3 } from '../../atom';
import NavigationAsComponent from '../../atom/navigation/NavigationAsComponent';
import TNavigationAsComponent from '../../atom/navigation/type';
import styles from './style.module.css';
import TNavigation from './type';

type Props = {
  data: TNavigation;
};

const Navigation: React.FC<Props> = ({ data }) => {
  const [burgerOnClick, setBurgerOnClick] = useState(false);
  const theme: any = useTheme();
  const { title, menus, icons } = data;
  const IconBurger = getIcon(icons[0]);
  const IconAccount = getIcon(icons[1]);
  const IconCross = getIcon(icons[2]);
  useEffect(() => {
    const bodySelected = document.getElementsByTagName('body')[0];
    bodySelected.style.overflow = burgerOnClick ? 'hidden' : 'visible';
  }, [burgerOnClick]);

  return (
    <div
      style={{
        marginBottom: theme.spacing(2 * THEME_VARIANT.SPACING.MARGIN_MAIN)
      }}
    >
      <div
        className={burgerOnClick ? styles.navigation_shadow_effect_screen : ''}
      ></div>
      <div
        className={styles.navigation}
        style={{
          backgroundColor: theme.palette.neutral.light,
          borderBottom: `1px solid ${theme.palette.border}`
        }}
      >
        <div
          data-testid='burger-test-id'
          style={{ backgroundColor: theme.palette.neutral.light }}
          className={`${styles.burger_on_click} ${
            burgerOnClick ? styles.burger_on_click_effect : ''
          }`}
        >
          <div
            className={styles.navigation_cross}
            onClick={() => setBurgerOnClick(!burgerOnClick)}
          >
            {IconCross}
          </div>
          {menus.map((menu: TNavigationAsComponent) => (
            <NavigationAsComponent key={menu.href} data={menu} />
          ))}
        </div>
        <div onClick={() => setBurgerOnClick(!burgerOnClick)}>{IconBurger}</div>
        <H3 title={title} />
        {IconAccount}
      </div>
    </div>
  );
};
export default Navigation;

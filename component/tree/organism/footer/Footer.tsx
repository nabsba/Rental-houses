import { useTheme } from '@mui/styles';
import React from 'react';
import { THEME_VARIANT } from '../../../../service/Common/constant';
import { footer } from '../../../../service/pages/Common/dataManagment/data_eng';
import { getIcon } from '../../../factory';
import { H2, Paragraph, Span, SubText } from '../../atom';
import NavigationAsComponent from '../../atom/navigation/NavigationAsComponent';
import styles from './style.module.css';
import TFooter from './type';

type Props = {
  data: TFooter;
};

const Footer: React.FC<Props> = ({ data }) => {
  const theme: any = useTheme();
  const GetIconHTML = (name: string) => getIcon(name);
  return (
    <div
      className={styles.footer}
      style={{
        backgroundColor: theme.palette.neutral.light,
        marginTop: theme.spacing(2 * THEME_VARIANT.SPACING.MARGIN_MAIN)
      }}
    >
      <div
        className={styles.footer_border}
        style={{ borderTop: `1px solid ${theme.palette.border}` }}
      ></div>
      <div
        style={{
          marginTop: theme.spacing(THEME_VARIANT.SPACING.MARGIN_MAIN),
          marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT)
        }}
        className={styles.footer_part_one}
      >
        <H2 title={footer.title} />
        <div
          style={{
            marginTop: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT),
            marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT)
          }}
        >
          <Paragraph data={footer.paragraph1} />
        </div>
        <div className={styles.footer_part_one_logos}>
          {footer.icons.map((icon: string) => (
            <div
              key={icon}
              className={styles.footer_svg_wrapper}
              style={{
                backgroundColor: `${theme.palette.typography.main}`,
                color: theme.palette.neutral.light
              }}
            >
              {GetIconHTML(icon)}{' '}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT)
        }}
        className={styles.footer_part_two}
      >
        {footer.informations.map(
          (information: {
            icon: string;
            name: string;
            information: string;
          }) => (
            <div
              key={information.name}
              className={styles.footer_part_two_sub}
              style={{
                marginBottom: theme.spacing(
                  THEME_VARIANT.SPACING.MARGIN_LIGHT / 2
                )
              }}
            >
              <div
                className={styles.footer_svg_wrapper}
                style={{
                  backgroundColor: `${theme.palette.typography.main}`,
                  color: theme.palette.neutral.light
                }}
              >
                {getIcon(information.icon)}
              </div>
              <div
                className={styles.footer_part_two_sub_information}
                style={{
                  color: theme.palette.typography.main
                }}
              >
                <Span data={information.name} />
                <Paragraph data={information.information} />
              </div>
            </div>
          )
        )}
      </div>
      <div className={styles.footer_part_three}>
        <div className={styles.footer_part_three_navigation}>
          {footer.routes.map((route: { name: string; href: string }) => (
            <NavigationAsComponent
              key={route.name}
              data={{
                text: route.name,
                href: route.href
              }}
            />
          ))}
        </div>
        <div
          className={styles.footer_part_three_copyright}
          style={{
            color: theme.palette.typography.main,
            marginTop: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT),
            marginBottom: theme.spacing(0.5)
          }}
        >
          {getIcon(footer.icon)}
          <SubText data={footer.subtext} />
        </div>
      </div>
    </div>
  );
};
export default Footer;

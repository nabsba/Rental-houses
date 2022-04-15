import { useTheme } from '@mui/styles';
import React from 'react';
import { DEVISE, THEME_VARIANT } from '../../../../service/Common/constant';
import { Span } from '../../atom';
import IconAndSpan from '../iconAndSpan/IconAndSpan';
import styles from './style.module.css';
import TBottomArticleHouse from './type';

type Props = {
  data: TBottomArticleHouse;
};

const BottomArticleHouse: React.FC<Props> = ({
  data: {
    property_type,
    per_month,
    agent_address,
    agent_postcode,
    num_bedrooms,
    num_bathrooms,
    num_recepts
  }
}) => {
  const theme: any = useTheme();

  return (
    <div
      className={`${styles.article_house_bottom} article_house_bottom_global`}
      style={{
        padding: theme.spacing(THEME_VARIANT.SPACING.PADDING_ARTICLE)
      }}
    >
      <div
        className={styles.article_part_one}
        style={{ marginBottom: theme.spacing(2) }}
      >
        <Span data={property_type} />
        <Span data={`${DEVISE.UK}${per_month}/month`} />
      </div>
      <div
        className={styles.article_part_two}
        style={{ marginBottom: theme.spacing(2) }}
      >
        <IconAndSpan
          data={{
            icon: 'Location',
            span: `${agent_address} ${agent_postcode}`
          }}
        />
      </div>
      <div
        className={styles.article_part_three}
        style={{ marginBottom: theme.spacing(2) }}
      >
        <IconAndSpan
          data={{
            icon: 'Bed',
            span: `${num_bedrooms} Beds`
          }}
        />
        <IconAndSpan
          data={{
            icon: 'Bath',
            span: `${num_bathrooms} Baths`
          }}
        />
      </div>
      <div>
        <IconAndSpan
          data={{
            icon: 'ReceptionRoom',
            span: `${num_recepts} Receptions`
          }}
        />
      </div>
    </div>
  );
};
export default BottomArticleHouse;

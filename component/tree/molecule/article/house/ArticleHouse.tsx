import { useTheme } from '@mui/styles';
import React from 'react';
import { Span } from '../../../atom';
import styles from './style.module.css';
import TArticleHouse from './type';
import BottomArticleHouse from '../../bottomArticleHouse/BottomArticleHouse';
import Image from 'next/image';
import {
  toBase64,
  shimmer
} from '../../../../../service/Common/logic/functions';
type Props = {
  data: TArticleHouse;
};

const ArticleHouse: React.FC<Props> = ({
  data: {
    devise,
    property_type,
    agent_address,
    agent_postcode,
    num_bedrooms,
    num_bathrooms,
    per_month,
    num_recepts,
    image
  }
}) => {
  const theme: any = useTheme();

  return (
    <div
      className={styles.article_house}
      style={{ marginBottom: theme.spacing(2) }}
    >
      <div className={styles.article_house_image}>
        <Image
          src={image.src}
          alt={image.alt}
          loading='lazy'
          layout={'fill'}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <BottomArticleHouse
        data={{
          property_type,
          devise,
          per_month,
          agent_address,
          agent_postcode,
          num_bedrooms,
          num_bathrooms,
          num_recepts
        }}
      />
    </div>
  );
};
export default ArticleHouse;

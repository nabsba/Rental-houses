import { useTheme } from '@mui/styles';
import React from 'react';
import { ROUTES } from '../../../../service/Common/constant';
import { DEFAULT_IMAGES } from '../../../../service/pages/houses/constant';
import NavigationAsComponent from '../../atom/navigation/NavigationAsComponent';
import ArticleHouse from '../../molecule/article/house/ArticleHouse';
import styles from './style.module.css';
import Thouses from './type';

type Props = {
  data: Thouses;
};

const HousesArticle: React.FC<Props> = ({ data: { list, devise, image } }) => {
  const theme: any = useTheme();
  return (
    <div className={styles.article_houses_group}>
      {list.map((house: any, index: number) => {
        const getSrcImage = () => {
          const original = house.images[0] && house.images[0].original;
          if (original) return house.images[0].original;
          const medium = image.size.medium.find(
            (value: string) => house.images[0] && house.images['0'][value]
          );
          if (medium) return house.images[0][medium];
          const small = image.size.small.find(
            (value: string) => house.images[0] && house.images[0][value]
          );

          if (small) return house.images[0][small];
          return DEFAULT_IMAGES.THUMBNAIL;
        };
        return (
          <div
            key={house.branch_id + index}
            className={styles.article_house_wrapper}
            style={{ marginBottom: theme.spacing(2) }}
          >
            <NavigationAsComponent
              data={{
                text: '',
                href: `${ROUTES.DETAILS}/${house.branch_id}`,
                isComponent: (
                  <ArticleHouse
                    data={{
                      devise: devise,
                      title: house.title,
                      property_type: house.property_type,
                      agent_address: house.agent_address,
                      agent_postcode: house.agent_postcode,
                      post_town: house.post_town,
                      num_bedrooms: house.num_bedrooms,
                      num_bathrooms: house.num_bathrooms,
                      per_month: house.rental_prices.per_month,
                      num_recepts: house.num_recepts,
                      image: {
                        src: getSrcImage(),
                        alt: house.title
                      }
                    }}
                  />
                )
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default HousesArticle;

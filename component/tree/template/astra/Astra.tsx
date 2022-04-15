import React from 'react';
import { ImageAndButton } from '../../organism';
import styles from './style.module.css';
import TAstra from './type';

type Props = {
  data: TAstra;
};

const Astra: React.FC<Props> = ({ data: { imageAndButton } }) => {
  return (
    <div className={styles.astra}>
      <section className={styles.astra_part_one}>
        <ImageAndButton data={imageAndButton} />
      </section>
    </div>
  );
};
export default Astra;

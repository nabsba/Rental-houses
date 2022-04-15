import React from 'react';
import NavigationAsComponent from '../../atom/navigation/NavigationAsComponent';
import styles from './style.module.css';
import TImageAndButton from './type';
import Image from 'next/image';
import { ButtonVariant } from '../../molecule';

type Props = {
  data: TImageAndButton;
};

const ImageAndButton: React.FC<Props> = ({
  data: { imageAsComponent, button, route }
}) => {
  return (
    <div className={styles.image_and_button}>
      <Image
        src={imageAsComponent.src}
        alt={imageAsComponent.alt}
        priority
        layout={imageAsComponent.layout}
      />
      <NavigationAsComponent
        data={{
          text: '',
          href: route,
          isComponent: (
            <ButtonVariant
              data={{
                value: button.value,
                isItSelected: false
              }}
            />
          )
        }}
      />
    </div>
  );
};
export default ImageAndButton;

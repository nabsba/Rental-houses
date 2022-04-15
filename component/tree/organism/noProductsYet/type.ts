import TImageNext from '../../../Common/types/next';

type TNoProductsYet = {
  lastHousesNews: {
    title: string;
    shortDescription: string;
    image: TImageNext;
    link: string;
  }[];
  title: string;
  linkText: string;
};
export default TNoProductsYet;

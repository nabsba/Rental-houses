import React, { ReactElement } from 'react';
import { CATEGORIES } from '../../service/pages/houses/constant';
import { TypeFilter, BedroomsFilter, RangeFilter } from '../tree/molecule';
import GoogleMaps from '../tree/molecule/autoAddressUI/AutoAddressUI';
import { TCategory } from '../tree/organism/filter/type';

// https://react-icons.github.io/react-icons/icons?name=fa

const getFragmentFilter = (category: TCategory): ReactElement => {
  switch (category.type) {
    case CATEGORIES.TYPE:
      return <TypeFilter data={category} />;
    case CATEGORIES.PRICE:
    case CATEGORIES.MILES:
      return <RangeFilter data={category} />;
    case CATEGORIES.BEDROOMS:
      return <BedroomsFilter data={category} />;
    case CATEGORIES.ADDRESS:
      return <GoogleMaps data={category} />;
    default:
      return <span> {category.type}</span>;
  }
};
export default getFragmentFilter;

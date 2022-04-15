import React, { ReactElement } from 'react';
import {
  Twitter,
  Bag,
  Facebook,
  Filter,
  Close,
  Medical,
  Arrow,
  Account,
  StarsEmpty,
  StarsFill,
  Heart,
  Location,
  Burger,
  IconWrapper,
  NumberCircle,
  Whatsapp,
  Instagram,
  Twitch,
  Phone,
  Mail,
  Copyright,
  Bed,
  Bath,
  ReceptionRoom
} from '../tree/atom/icon';

// https://react-icons.github.io/react-icons/icons?name=fa

const getIcon = (indice: string, value?: string | number): ReactElement => {
  switch (indice) {
    case 'Twitter':
      return <IconWrapper Icon={<Twitter />} />;
    case 'Bag':
      return <IconWrapper Icon={<Bag />} />;
    case 'Facebook':
      return <IconWrapper Icon={<Facebook />} />;
    case 'Filter':
      return <Filter />;
    case 'Close':
      return <Close />;
    case 'Medical':
      return <Medical />;
    case 'Arrow':
      return <Arrow />;
    case 'Account':
      return <Account />;
    case 'StarsEmpty':
      return <StarsEmpty />;
    case 'StarsFill':
      return <StarsFill />;
    case 'Heart':
      return <Heart />;
    case 'Location':
      return <Location />;
    case 'Burger':
      return <Burger />;
    case 'Whatsapp':
      return <Whatsapp />;
    case 'Instagram':
      return <Instagram />;
    case 'Twitch':
      return <Twitch />;
    case 'Phone':
      return <Phone />;
    case 'NumberCircle':
      if (value) return <NumberCircle data={value} />;
    case 'Mail':
      return <Mail />;
    case 'Copyright':
      return <Copyright />;
    case 'Bed':
      return <Bed />;
    case 'Bath':
      return <Bath />;
    case 'ReceptionRoom':
      return <ReceptionRoom />;
    default:
      return <span> {indice}</span>;
  }
};
export default getIcon;

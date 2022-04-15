type TImageNext = {
  src: string;
  alt: string;
  priority: boolean;
  layout:
    | 'fill'
    | 'fixed'
    | 'intrinsic'
    | 'responsive'
    | 'raw'
    | undefined
    | any;
  width?: string;
  height?: string;
};

export default TImageNext;

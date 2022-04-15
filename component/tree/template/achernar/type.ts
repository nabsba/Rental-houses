import {
  TFilterSelection,
  THousesData
} from '../../../../service/pages/houses/type';
import TFilter from '../../organism/filter/type';

type TAchernar = {
  filter: TFilter;
  houses: THousesData;
  context: string | null;
  devise: string;
  filterSelection: TFilterSelection;
  noProductAvailable: string;
};
export default TAchernar;

import { useTheme } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { TReducers } from '../../../../service/Common/type';
import { CATEGORIES } from '../../../../service/pages/houses/constant';
import { Span } from '../../atom';
import SelectionOriginal from '../selection/original/SelectionOriginal';
import styles from './style.module.css';
import TBedroomsFilter from './type';

type Props = {
  data: TBedroomsFilter;
};

const BedroomsFilter: React.FC<Props> = ({
  data: { values, functionToCall, type, propertyForQuery }
}) => {
  const theme: any = useTheme();
  const min = [CATEGORIES.NO_MIN, ...values];
  const max = [CATEGORIES.NO_MAX, ...values];
  const {
    dataHouses: { filterSelection }
  } = useSelector((state: TReducers) => state);
  const getValueFromFiltering = () => {
    const defaultsValue: any = [null, null];
    if (filterSelection[propertyForQuery[0]]) {
      defaultsValue[0] = filterSelection[propertyForQuery[0]];
    }
    if (filterSelection[propertyForQuery[1]]) {
      defaultsValue[1] = filterSelection[propertyForQuery[1]];
    }
    return defaultsValue;
  };
  return (
    <div className={styles.bedrooms_filter}>
      <div style={{ marginBottom: theme.spacing(2) }}>
        <Span data={type} />
      </div>
      <div
        className={styles.bedrooms_filter_number_wrapper}
        style={{ color: theme.palette.neutral.light }}
      >
        <div style={{ marginBottom: theme.spacing(1) }}>
          <SelectionOriginal
            data={{
              valueOptions: min,
              placeHolder: CATEGORIES.BEDROOMS_MIN,
              functionToCall,
              valueDefault: getValueFromFiltering()[0]
                ? getValueFromFiltering()[0]
                : min[1]
            }}
          />
        </div>
        <SelectionOriginal
          data={{
            valueOptions: max,
            placeHolder: CATEGORIES.BEDROOMS_MAX,
            functionToCall,
            valueDefault: getValueFromFiltering()[1]
              ? getValueFromFiltering()[1]
              : max[1]
          }}
        />
      </div>
    </div>
  );
};
export default BedroomsFilter;

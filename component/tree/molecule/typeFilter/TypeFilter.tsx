import React, { useState } from 'react';
import { Span } from '../../atom';
import styles from './style.module.css';
import TTypeFilter from './type';
import { useTheme } from '@mui/styles';
import SelectionOriginal from '../selection/original/SelectionOriginal';
import { useSelector } from 'react-redux';
import { TReducers } from '../../../../service/Common/type';

type Props = {
  data: TTypeFilter;
};

const TypeFilter: React.FC<Props> = ({
  data: { values, functionToCall, type, propertyForQuery }
}) => {
  const {
    dataHouses: { filterSelection }
  } = useSelector((state: TReducers) => state);

  const getValueFromFiltering = () => {
    let result: string[] = [];
    if (
      filterSelection[propertyForQuery[0]] &&
      filterSelection[propertyForQuery[0]].length > 0
    ) {
      result = values.filter(
        (value: any) => filterSelection[propertyForQuery].search(value) > -1
      );
    }
    return result;
  };
  const theme: any = useTheme();
  return (
    <div className={styles.type_filter}>
      <div style={{ marginBottom: theme.spacing(2) }}>
        <Span data={type} />
      </div>
      <div className={styles.type_filter_sub_wrapper}>
        <SelectionOriginal
          data={{
            valueOptions: values,
            placeHolder: type,
            functionToCall,
            multiple: true,
            valueDefault: getValueFromFiltering()
          }}
        />
      </div>
    </div>
  );
};
export default TypeFilter;

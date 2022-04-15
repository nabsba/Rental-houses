import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TSelectionOriginal from './type';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(
  valueOption: string,
  valueOptions: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      valueOptions.indexOf(valueOption) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
type Props = {
  data: TSelectionOriginal;
};
const SelectionOriginal: React.FC<Props> = ({
  data: { valueOptions, placeHolder, functionToCall, multiple, valueDefault }
}) => {
  const theme = useTheme();
  const [valueOption, setValueOption] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof valueOption>) => {
    const {
      target: { value }
    } = event;
    const valueToSave = typeof value === 'string' ? value.split(',') : value;
    setValueOption(valueToSave);
    functionToCall(placeHolder, valueToSave);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple={multiple}
          displayEmpty
          value={
            valueDefault && valueDefault.length > 0 ? valueDefault : valueOption
          }
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeHolder}</em>;
            }
            if (multiple) {
              return selected.join(', ');
            }
            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value=''>
            <em>{placeHolder}</em>
          </MenuItem>
          {valueOptions.map((valueOption) => (
            <MenuItem
              key={valueOption}
              value={valueOption}
              style={getStyles(valueOption, valueOptions, theme)}
            >
              {valueOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectionOriginal;

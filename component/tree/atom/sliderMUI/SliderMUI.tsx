import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TSliderMUI from './type';
import styles from './style.module.css';
import { useTheme } from '@mui/styles';
import { CATEGORIES } from '../../../../service/pages/houses/constant';

type Props = { data: TSliderMUI };

const RangeSlider: React.FC<Props> = ({
	data: { range, type, functionToCall, marks, defaultValue },
}) => {
	defaultValue = defaultValue
		? defaultValue
		: type === CATEGORIES.MILES
		? 0
		: [0, 0];
	const [value, setValue] = React.useState<number[] | number>(defaultValue);
	const theme: any = useTheme();
	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number[] | number);
		functionToCall(type, value);
	};
	const min = range[0];
	const max = range[1];

	return (
		<Box sx={{ width: 200 }}>
			{type === CATEGORIES.MILES ? (
				<Slider
					value={value}
					getAriaLabel={() => type}
					valueLabelDisplay="auto"
					onChange={handleChange}
					marks={marks}
					min={min}
					max={max}
					className={styles.sliderMUI}
					style={{ color: theme.palette.typography.main }}
				/>
			) : (
				<Slider
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					min={min}
					max={max}
					size="medium"
					marks={marks}
					className={styles.sliderMUI}
					style={{ color: theme.palette.typography.main }}
				/>
			)}
		</Box>
	);
};

export default RangeSlider;

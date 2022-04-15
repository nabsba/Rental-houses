import { useTheme } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { TReducers } from '../../../../service/Common/type';
import { CATEGORIES } from '../../../../service/pages/houses/constant';
import { RangeSlider, Span } from '../../atom';
import TRangeFilter from './type';

type Props = {
	data: TRangeFilter;
};

const RangeFilter: React.FC<Props> = ({
	data: { values, functionToCall, type, marks, propertyForQuery },
}) => {
	const theme: any = useTheme();
	const {
		dataHouses: { filterSelection },
	} = useSelector((state: TReducers) => state);
	const getValueFromFiltering = () => {
		const defaultsValue: any = [null, null];

		if (type === CATEGORIES.PRICE) {
			if (filterSelection[propertyForQuery[0]]) {
				defaultsValue[0] = parseInt(filterSelection[propertyForQuery[0]]);
			}
			if (filterSelection[propertyForQuery[1]]) {
				defaultsValue[1] = parseInt(filterSelection[propertyForQuery[1]]);
			}
			return defaultsValue;
		} else {
			if (filterSelection[propertyForQuery[0]]) {
				return [parseInt(filterSelection[propertyForQuery[0]])];
			}
		}
	};
	getValueFromFiltering();
	return (
		<div>
			<div style={{ marginBottom: theme.spacing(2) }}>
				<Span data={type} />
			</div>
			<RangeSlider
				data={{
					range: values,
					functionToCall,
					type,
					defaultValue: getValueFromFiltering(),
					marks,
				}}
			/>
		</div>
	);
};
export default RangeFilter;

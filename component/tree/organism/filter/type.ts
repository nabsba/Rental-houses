import { TFilterSelection } from '../../../../service/pages/houses/type';

export type TCategory = {
	type: string;
	propertyForQuery: string[];
	functionToCall: Function;
	values: number[] | string[];
	marks?: { value: number; label: string }[];
};

export type TFilterImage = {
	size: {
		small: string[];
		medium: string[];
		large: string[];
	};
};
type TFilter = {
	image: TFilterImage;
	button: {
		value: string;
		type: string;
	};
	filterPartOne: {
		title: string;
		icon: string;
	};
	categories: TCategory[];
	filterSelection: TFilterSelection;
	updateFilterSelection: Function;
	alertText: string;
	notificationDisplay: string[];
};
export default TFilter;

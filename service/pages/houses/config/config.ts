import { URL_ADDRESSES } from '../../../Common/constant';
import { END_POINT_API } from '../constant';
import { TFilterSelection } from '../type';

const getOptionsToFetchHouses = (filterSelection: TFilterSelection) => {
	const url = URL_ADDRESSES.apiRealEstate[END_POINT_API.LIST];
	let options = {
		method: 'GET',
		url,
		params: filterSelection,
		headers: {
			'x-rapidapi-host': process.env.NEXT_PUBLIC_KEY_HOST_HOUSES,
			'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY_HOUSES_API,
		},
	};
	return options;
};

export { getOptionsToFetchHouses };

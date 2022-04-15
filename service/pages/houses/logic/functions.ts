import {
	CATEGORIES,
	CONTEXT_LIST_HOUSES,
	NUMBER_OF_PRODUCTS_PER_PAGE,
} from '../constant';
import { TFilterSelection } from '../type';

// const example = {proprety_a=2, proprety_b=null, proprety_c='NO MIN'}
// const result = removeEmptyValueFromParams(example);  => result= {proprety_a=2}
const removeEmptyValueFromParams = (filterSelection: TFilterSelection) => {
	let result = { ...filterSelection };
	const keys = Object.keys(filterSelection);
	keys.map((key: string) => {
		if (
			!filterSelection[key] ||
			filterSelection[key] === (CATEGORIES.NO_MIN || CATEGORIES.NO_MAX)
		) {
			delete result[key];
		}
	});
	return result;
};

const getTheTotalOfPages = (totalData: number) =>
	Math.round(totalData / NUMBER_OF_PRODUCTS_PER_PAGE);

const getContextOfHousesDisplaying = (
	state: boolean,
	serverError: boolean,
	list: any[],
) => {
	const isItThePresentationPage = !state && !serverError;
	const doWeHaveAnErrorServer = serverError;
	const doWeHaveProducts = state && list.length > 0;
	const doWeHaveAnEmptyListForTheSelectionReturned = state && list.length === 0;
	const context = doWeHaveProducts
		? CONTEXT_LIST_HOUSES.PRODUCTS_AVAILABLE
		: isItThePresentationPage
		? CONTEXT_LIST_HOUSES.NO_SELECTION_SO_FAR
		: doWeHaveAnErrorServer
		? CONTEXT_LIST_HOUSES.ERROR_SERVER
		: doWeHaveAnEmptyListForTheSelectionReturned
		? CONTEXT_LIST_HOUSES.NO_PRODUCTS_AVAILABLE
		: null;
	return context;
};

export {
	removeEmptyValueFromParams,
	getTheTotalOfPages,
	getContextOfHousesDisplaying,
};

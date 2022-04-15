import { ERROR_LOG_ASYNC_MESSAGE } from '../../../Common/constant';
import { logMessage } from '../../../Common/logic/functions';
import { fetchHousesAPI } from '../dataManagment/reducer';
import { TFilterSelection } from '../type';

const getParamsForTheAPICall = (contextQuery: any) =>
	Object.fromEntries(new URLSearchParams(contextQuery.query.selection));

const handleChangingPage = async (contextQuery: any, store: any) => {
	try {
		const params: TFilterSelection = getParamsForTheAPICall(contextQuery);
		await store.dispatch(fetchHousesAPI(params));
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'houses/function',
			'handleChangingPage',
		)},
			${error}`);
	} finally {
		return;
	}
};

export default handleChangingPage;

// For client side rendering
// const getThePageRequired = (page: number, houses: any) => {
//   const displayHousesStartAt =
//     page * NUMBER_OF_PRODUCTS_PER_PAGE - NUMBER_OF_PRODUCTS_PER_PAGE;
//   const displayHousesEndAt = displayHousesStartAt + NUMBER_OF_PRODUCTS_PER_PAGE;
//   const dataOfThePageRequired = houses.listing.slice(
//     displayHousesStartAt,
//     displayHousesEndAt
//   );
//   return dataOfThePageRequired;
// };

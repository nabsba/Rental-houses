import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { DEVISE, ERROR_LOG_ASYNC_MESSAGE } from '../../../Common/constant';
import { logMessage } from '../../../Common/logic/functions';
import {
	resultTemplate,
	serverGetApi,
} from '../../../Common/logic/requestServer';
import { TResult } from '../../../Common/type';
import { getOptionsToFetchHouses } from '../config/config';
import { CATEGORIES, CONTEXT_LIST_HOUSES, REDUCER } from '../constant';
import { TFilterSelection, THousesReducer } from '../type';
import * as housesDataUseCase from '../../../../service/Common/dataMangment/useCase/data.json';
import { filterSelectionCategoryDefault } from './data_eng';

const initialState: THousesReducer = {
	filterSelection: {
		...filterSelectionCategoryDefault,
	},
	houses: {
		state: false,
		serverError: false,
		listing: [],
	},
	devise: DEVISE.UK,
};

const getDataFromConditionalCase = (type: string, result: TResult) => {
	switch (type) {
		case CONTEXT_LIST_HOUSES.NO_PRODUCTS_AVAILABLE:
			result.state = true;
			result.data = [];
			break;
		case CONTEXT_LIST_HOUSES.PRODUCTS_AVAILABLE:
			result.state = true;
			result.data = JSON.parse(JSON.stringify(housesDataUseCase));
			break;
		case CONTEXT_LIST_HOUSES.ERROR_SERVER:
			throw new Error('Error server');
		default:
			break;
	}
	return result;
};
export const fetchHousesAPI =
	(params: TFilterSelection): any =>
	async (dispatch: any) => {
		let result: TResult = { ...resultTemplate };
		try {
			const options = getOptionsToFetchHouses(params);
			if (process.env.NEXT_PUBLIC_KEY_DEVELOPMENT) {
				const context = CONTEXT_LIST_HOUSES.PRODUCTS_AVAILABLE;
				result = getDataFromConditionalCase(context, result);
			} else {
				result = await serverGetApi(
					options.url,
					options.headers,
					options.params,
				);
			}
			if (typeof result.data === 'string') result.data = {};
			result.data.filterSelection = params;
			// There are two sides of the store; server side and client side.
			// storeHousesData will be updated first, it will update the store of the server side only! (if called from getServerSideProps). (To test; console.log the current state of server's side and client's one, they are different until you hydrate each other!)
			// Then 'Hydrate' will received (automatically) the store (server side updated in storeHousesData) as an 'action'. This is where your merge should happen.
		} catch (error) {
			result.state = false;
			result.serverError = true;
			logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
				'dataManagment/reducer',
				'fetchHousesAPI',
			)},
			${error}`);
		} finally {
			await dispatch(data.actions.storeHousesData(result));
		}
	};
const data = createSlice({
	name: REDUCER.NAME,
	initialState,
	reducers: {
		updateFilterSelection: (
			state: THousesReducer,
			action: { payload: { type: string; value: any } },
		) => {
			const { type, value } = action.payload;
			switch (type) {
				case CATEGORIES.BEDROOMS_MIN:
					const isANumber = /\d/.test(value[0]) || typeof value === 'number';
					state.filterSelection.minimum_beds = isANumber
						? value.length > 0
							? parseInt(value[0])
							: value
						: 0;
					state.filterSelection.page_number = 1;
					break;
				case CATEGORIES.BEDROOMS_MAX:
					const isValueANumber =
						/\d/.test(value[0]) || typeof value === 'number';
					state.filterSelection.maximum_beds = isValueANumber
						? value.length > 0
							? parseInt(value[0])
							: value
						: 0;
					state.filterSelection.page_number = 1;
					break;
				case CATEGORIES.MILES:
					state.filterSelection.radius = value;
					state.filterSelection.page_number = 1;
					break;
				case CATEGORIES.PRICE:
					const min = value[0] > 0 ? value[0] : 0;
					const max = value[1] > 0 ? value[1] : 0;
					state.filterSelection.minimum_price = min;
					state.filterSelection.maximum_price = max;
					state.filterSelection.page_number = 1;
					break;
				case CATEGORIES.ADDRESS:
					if (value[0]) {
						state.filterSelection.area = value[0].terms[0].value;
						state.filterSelection.page_number = 1;
					}

					break;
				case CATEGORIES.TYPE:
					state.filterSelection.property_type = value.join();
					state.filterSelection.page_number = 1;
					break;
				default:
					return;
			}
		},
		storeHousesData: (state: THousesReducer, action: { payload: TResult }) => {
			state.filterSelection = action.payload.data.filterSelection;
			if (action.payload.state) {
				state.houses = {
					...action.payload.data,
					state: action.payload.state,
					listing: action.payload.data.listing
						? action.payload.data.listing
						: [],
				};
			}
			if (action.payload.serverError) {
				state.houses.serverError = action.payload.serverError;
				state.houses.state = action.payload.state;
			}
			// console.log('currentState', current(state), 'currentState');
		},
	},
	extraReducers: {
		// We receive the store of the server's side as an action.
		[HYDRATE]: (state, action) => {
			return {
				...state,
				filterSelection: action.payload.dataHouses.filterSelection,
				houses: {
					...action.payload.dataHouses.houses,
					state: action.payload.dataHouses.houses.state,
					serverError: action.payload.dataHouses.houses.serverError,
				},
			};
		},
	},
});

const { updateFilterSelection } = data.actions;
const dataHouses = data.reducer;
export default dataHouses;

export { updateFilterSelection };

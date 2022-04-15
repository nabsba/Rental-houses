import { DEVISE } from './Common/constant';
import { wrapper } from './Common/dataMangment/reducer';
import { updateFilterSelection } from './pages/houses/dataManagment/reducer';
import { navigation } from './pages/Common/dataManagment/data_eng';
import {
	getContextOfHousesDisplaying,
	getTheTotalOfPages,
	removeEmptyValueFromParams,
} from './pages/houses/logic/functions';
import { CONTEXT_LIST_HOUSES } from './pages/houses/constant';
import handleChangingPage from './pages/houses/logic/changingPage';

export {
	wrapper,
	navigation,
	updateFilterSelection,
	DEVISE,
	removeEmptyValueFromParams,
	getTheTotalOfPages,
	handleChangingPage,
	getContextOfHousesDisplaying,
	CONTEXT_LIST_HOUSES,
};

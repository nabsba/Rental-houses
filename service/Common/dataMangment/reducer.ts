import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import dataHouses from '../../pages/houses/dataManagment/reducer';
import { infosBrowser } from '../../infosBrowser/dataManagment/reducer';

const reducer = combineReducers({
	dataHouses,
	infosBrowser,
});
export type AppStore = ReturnType<typeof makeStore>;
const makeStore = () =>
	configureStore({
		reducer,
		devTools: true,
	});
export const wrapper = createWrapper<AppStore>(makeStore);
export default makeStore;

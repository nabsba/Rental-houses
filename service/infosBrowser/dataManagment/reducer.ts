import { createSlice } from '@reduxjs/toolkit';
import { REDUCER } from '../constant';
import { TInfosBrowser } from '../type';

const initialStateInfosBrowswer: TInfosBrowser = {
	isWebWorker: false,
	isServiceWorker: false,
	isIndexDB: false,
	storageClient: {
		used: 0,
		available: 0,
	},
};

const data = createSlice({
	name: REDUCER.NAME,
	initialState: initialStateInfosBrowswer,
	reducers: {
		updateInfoDevice: (state, action: { payload: TInfosBrowser }) => {
			state.isServiceWorker = action.payload.isServiceWorker;
			state.isIndexDB = action.payload.isServiceWorker;
			state.storageClient = action.payload.storageClient;
		},
	},
});

const infosBrowser = data.reducer;
const { updateInfoDevice } = data.actions;

export { infosBrowser, updateInfoDevice };

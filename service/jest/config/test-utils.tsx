/* eslint-disable*/
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
	createHistory,
	createMemorySource,
	LocationProvider,
} from '@reach/router';
import { getDesignTokens } from '../../../pages/_app';

const renderWithRouter = (
	ui: React.ReactNode,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {},
) => {
	return {
		...render(
			<ThemeProvider theme={createTheme(getDesignTokens('light'))}>
				{/* <Provider store={reducers}> */}
				<LocationProvider history={history}>{ui}</LocationProvider>
				{/* </Provider> */}
			</ThemeProvider>,
		),
		history,
	};
};

export default renderWithRouter;

/* eslint-disable no-console */
import axios from 'axios';
import { ERROR_LOG_ASYNC_MESSAGE } from '../constant';
import { TResult } from '../type';
import { logMessage } from './functions';

const resultTemplate: TResult = {
	state: false,
	data: null,
	errorCodeServer: '',
	serverError: false,
	errorMessage: '',
	errorCodeSql: '',
};

const serverGetApi = async (
	url: string,
	headers: any,
	params: any,
	time?: number | null,
	source?: any,
): Promise<TResult> => {
	const result: TResult = { ...resultTemplate };
	let query: any = {};
	try {
		query = await axios.get(url, {
			timeout: time ? time : 15000,
			cancelToken: source ? source.token : null,
			headers,
			params,
		});
		result.state = Boolean(query.data);
		result.data = query.data;
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'bridge/requestServer',
			'serverGetApi',
		)},
			${error}`);

		result.serverError = true;
		result.errorMessage =
			typeof error === 'string' ? error : JSON.stringify(error);
	} finally {
		return result;
	}
};

const serverGet = async (
	url: string,
	time?: number | null,
	source?: any,
	params?: any,
): Promise<TResult> => {
	let result: TResult = { ...resultTemplate };
	try {
		result = await axios.get(url, {
			timeout: time ? time : 15000,
			cancelToken: source ? source.token : null,
			params,
		});
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE('bridge/requestServer', 'serverGet')},
			${error}`);
		result.serverError = true;
		result.errorMessage =
			typeof error === 'string' ? error : JSON.stringify(error);
	} finally {
		result = result.data ? result.data : result;
		return result;
	}
};
// todo: Protection against XSRF axios
const serverPost = async (
	url: string,
	body: any,
	time?: number | null,
): Promise<TResult> => {
	let result: TResult = { ...resultTemplate };
	try {
		result = await axios.post(url, body, { timeout: time ? time : 15000 });
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'Service/Common/logic/requestServer',
			'serverPost',
		)},
			${error}`);

		result.serverError = true;
		result.errorCodeServer = '500';
	} finally {
		result = result.data ? result.data : result;
		return result;
	}
};

export { serverGetApi, serverPost, serverGet, resultTemplate };

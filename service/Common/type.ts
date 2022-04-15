import { TInfosBrowser } from '../infosBrowser/type';
import { THousesReducer } from '../pages/houses/type';

export type TResult = {
	state: boolean;
	data: any;
	errorCodeServer: string;
	serverError: boolean;
	errorMessage: string;
	errorCodeSql: string;
};

export type CacheOption = {
	mode: string;
	cache: string | undefined;
	credentials: string;
};

export type IndexDBDataBase = {
	name: string;
	version: number;
	store: string;
};
export type IndexDBTransaction = {
	stores: string[];
	mode: string;
};

export type TAnyValues =
	| string
	| number
	| boolean
	| null
	| undefined
	| Record<string, unknown>;

export type TReducers = {
	dataHouses: THousesReducer;
	infosBrowser: TInfosBrowser;
};

export type TFolderPath = {
	folder: string;
	subFolder?: string;
	fileName?: string;
};

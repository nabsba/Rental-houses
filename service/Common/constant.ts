const ERROR_LOG_ASYNC_MESSAGE = (path: string, method: string): string =>
	`*** file: ${path}, method: ${method} `;

const LOG_MESSAGE = {
	SERVICE_WORKER_SUCCESS: 'SERVICE WORKER SUCCESS REGISTRATION',
	SERVICE_WORKER_FAILED: 'SERVICE WORKER FAILED REGISTRATION',
};

const DEVISE: { [key: string]: string } = {
	UK: '£',
	EUROS: '€',
	DOLLARS: '$',
};

const ADMINISTRATION = {
	EMAIL: 'admin@example.com',
};
const ERROR_CODE = {
	FETCH_PRODUCTS: {
		NAME: 'Products',
		CODE: 100,
	},
	SLIDER: {
		NAME: 'Slider',
		CODE: 200,
	},
};
// Local server
const URL_ADDRESS: { [key: string]: string } = {
	HEROKU: 'https://rental-houses.vercel.app',
	// Reminder: active the self api, write: npx json-server db.json --routes routes.json
	SELF_API: 'http://localhost:3000',
};

const URL_ADDRESSES: {
	default: string;
	apiRealEstate: {
		[key: string]: string;
	};
	google: {
		place: string;
	};
} = {
	default: URL_ADDRESS[process.env.HOST ? process.env.HOST : 'LOCAL'],
	apiRealEstate: {
		list: 'https://zoopla.p.rapidapi.com/properties/list',
	},
	google: {
		place: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_KEY_GOOGLE}&libraries=places`,
	},
};
const THEME_VARIANT = {
	SPACING: {
		PADDING_ARTICLE: 4,
		MARGIN_LIGHT: 5,
		MARGIN_MAIN: 10,
	},
};
//Note: make sure it's the same content as the one in the frontend
const DASHBOARD_ADMIN_FOLDER_STRUCTURE = {
	dataPage: {
		folder: 'data',
		subFolder: 'adminDashboard',
		fileName: 'data.json',
	},
};

const INDEX_DB_SCHEMAS = {
	DATA_BASE: 'rentalHouses',
	VERSION_1: 1,
	STORE: 'houses',
	KEY: 'branch_id',
};

const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	HOUSES: '/houses',
	SELECTION: '/houses/selection',
	DETAILS: '/houses/selection/details',
	NOT_FOUND: '/404',
	REQUEST_TIME_OUT: '/408',
	SERVER_ERROR: '/500',
};

export {
	ERROR_LOG_ASYNC_MESSAGE,
	LOG_MESSAGE,
	ADMINISTRATION,
	ERROR_CODE,
	URL_ADDRESSES,
	DEVISE,
	THEME_VARIANT,
	DASHBOARD_ADMIN_FOLDER_STRUCTURE,
	INDEX_DB_SCHEMAS,
	ROUTES,
	URL_ADDRESS,
};

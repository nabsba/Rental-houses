import { URL_ADDRESS } from '../../../Common/constant';

const head = {
	title: (status: number) => `Error ${status}`,
	meta: {
		name: 'description',
		content: (status: number) => `Page error ${status}`,
	},
	canonical: (endpoint: number) => `${URL_ADDRESS.HEROKU}/${endpoint}`,
	meta2: { name: 'viewport', content: 'initial-scale=1, width=device-width' },
};

export { head };

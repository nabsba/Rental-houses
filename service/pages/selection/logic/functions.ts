import {
	ERROR_LOG_ASYNC_MESSAGE,
	INDEX_DB_SCHEMAS,
} from '../../../Common/constant';
import { logMessage } from '../../../Common/logic/functions';
import {
	createDBIndexDB,
	addDataToIndexDB,
	getDataFromID,
} from '../../../Common/logic/indexDB';
import { getInformationsOfBrowser } from '../../../infosBrowser/logic/functions';
import { TInfosBrowser } from '../../../infosBrowser/type';

const saveHousesToBrowserClient = async (houses: any) => {
	try {
		const infosBrowser: TInfosBrowser = await getInformationsOfBrowser();
		if (
			infosBrowser.isIndexDB &&
			infosBrowser.storageClient.available &&
			infosBrowser.storageClient.available > 0
		) {
			createDBIndexDB(
				INDEX_DB_SCHEMAS.DATA_BASE,
				INDEX_DB_SCHEMAS.VERSION_1,
				INDEX_DB_SCHEMAS.STORE,
				INDEX_DB_SCHEMAS.KEY,
			);
			if (houses.listing && houses.listing.length > 0) {
				Promise.all(
					houses.listing.map(async (house: any) => {
						await addDataToIndexDB(
							INDEX_DB_SCHEMAS.DATA_BASE,
							INDEX_DB_SCHEMAS.VERSION_1,
							INDEX_DB_SCHEMAS.STORE,
							house,
						);
					}),
				);
			}
		} else {
			houses.listing.map(async (house: any) => {
				sessionStorage.setItem(house.branch_id, JSON.stringify(house));
			});
		}
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'selection/logic/functions',
			'saveHousesToBrowserClient',
		)}
			${error}`);
	}
};
const retrieveHouseFromBrowserClient = async (id: string) => {
	let house;
	try {
		const infosBrowser: TInfosBrowser = await getInformationsOfBrowser();
		if (
			infosBrowser.isIndexDB &&
			infosBrowser.storageClient.available &&
			infosBrowser.storageClient.available > 0
		) {
			house = await getDataFromID(
				INDEX_DB_SCHEMAS.DATA_BASE,
				INDEX_DB_SCHEMAS.VERSION_1,
				INDEX_DB_SCHEMAS.STORE,
				id,
			);
		} else {
			house = sessionStorage.getItem(id);
			house = house ? JSON.parse(house) : null;
		}
	} catch (error) {
		logMessage(`${ERROR_LOG_ASYNC_MESSAGE(
			'selection/logic/functions',
			'retrieveHouseFromBrowserClient',
		)},
			${error}`);
		house = false;
	} finally {
		return house;
	}
};

export { retrieveHouseFromBrowserClient, saveHousesToBrowserClient };

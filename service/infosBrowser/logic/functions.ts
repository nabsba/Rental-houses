import { TInfosBrowser } from '../type';

const getInformationsOfBrowser = async () => {
	let storage: { used: number | undefined; available: number | undefined } = {
		used: 0,
		available: 0,
	};
	if ('storage' in navigator && 'estimate' in navigator.storage) {
		const { usage, quota } = await navigator.storage.estimate();
		if (usage && quota) storage = { used: usage, available: quota };
	}
	const isBrowserSupportWebWorker = typeof Worker !== 'undefined';
	const isBrowserSupportServiceWorker = 'serviceWorker' in navigator;
	const isIndexDbSupported = true;
	const infosBrowser: TInfosBrowser = {
		isWebWorker: isBrowserSupportWebWorker,
		isServiceWorker: isBrowserSupportServiceWorker,
		isIndexDB: isIndexDbSupported,
		storageClient: storage,
	};
	return infosBrowser;
};

export { getInformationsOfBrowser };

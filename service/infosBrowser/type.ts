export type TInfosBrowser = {
	isWebWorker: boolean;
	isServiceWorker: boolean;
	isIndexDB: boolean;
	storageClient: {
		used: number | undefined;
		available: number | undefined;
	};
};

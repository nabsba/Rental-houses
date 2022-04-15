type TFilterSelection = {
	[key: string]: any;
};

type THousesData = {
	state: boolean;
	serverError: boolean;
	[key: string]: any;
	listing: any[];
};
type THousesReducer = {
	filterSelection: TFilterSelection;
	houses: THousesData;
	devise: string;
};
type TOptionsArgumentsToFetchHouses = {
	pageRequired: number;
	typeOfUrl: string;
	params: { [key: string]: string | number };
};

type THouse = {
	property_type: any;
	devise: any;
	agent_address: any;
	agent_postcode: any;
	num_bedrooms: any;
	num_bathrooms: any;
	num_recepts: any;
	description: any;
	longitude: any;
	latitude: any;
	images: any;
	title: any;
	rental_prices: { per_month: any };
};
export type {
	THousesReducer,
	TFilterSelection,
	TOptionsArgumentsToFetchHouses,
	THousesData,
	THouse,
};

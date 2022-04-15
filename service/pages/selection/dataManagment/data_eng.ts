import { URL_ADDRESS } from '../../../Common/constant';

const displayList = (list: any[]) => {
	let array: any = [];
	list.map((house, index) =>
		array.push({
			['@type']: 'ListItem',
			postion: index + 1,
			item: house.property_type,
			description: house.description,
		}),
	);
	array = JSON.stringify(array);
	return array;
};

const head = {
	title: 'Rental house',
	meta: {
		name: 'description',
		content: 'View the houses availables in England',
	},
	canonical: (endpoint: string) => `${URL_ADDRESS.HEROKU}/${endpoint}`,
	meta2: { name: 'viewport', content: 'initial-scale=1, width=device-width' },
	dataStructureSeo: (list: any[]) => `[
	{
		"alternateName": "Rental houses Search",
		"@context": "http://schema.org",
		"url": "${URL_ADDRESS.HEROKU}/",
		"name": "Rental houses",
		"@type": "WebSite"
	},
		{
		"logo": "${URL_ADDRESS.HEROKU}/static/images/logo-alt.png",
		"@context": "http://schema.org",
		"contactPoint": [
			{
				"areaServed": "UK",
				"telephone": "+44 20 3544 1000",
				"contactType": "Customer service",
				"@type": "ContactPoint"
			}
		],
		"url": "${URL_ADDRESS.HEROKU}/",
		"name": "rental houses",
		"sameas": [
			"https://twitter.com/rentalHouses",
			"https://www.facebook.com/rentalHousesUK",
			"https://www.instagram.com/rentalHouses/",
			"https://www.youtube.com/user/rentalHousesUK",
			"https://www.linkedin.com/company/rentalHouses/about/",
			"https://www.pinterest.co.uk/rentalHouses/",
			"https://en.wikipedia.org/wiki/ZPG_plc"
		],
		"@type": "Organization"
	},
	{
		"@context": "http://schema.org",
		"@type": "ItemList",
    "itemListElement": 	${displayList(list)},
		"@type": "WebPage"
	}
]`,
};

export { head };
// ${list.map((house) => house.agent_address.toString())}

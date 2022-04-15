import { URL_ADDRESS } from '../../../Common/constant';
import { DEFAULT_IMAGES } from '../../houses/constant';
import { imageSize } from '../../houses/dataManagment/data_eng';

const getSrcImage = (pic: any) => {
	const original = pic && pic.original;
	if (original) return pic.original;
	const medium = imageSize.size.medium.find(
		(value: string) => pic && pic[value],
	);
	if (medium) return pic[medium];
	const small = imageSize.size.small.find((value: string) => pic && pic[value]);
	if (small) return pic[small];
	return DEFAULT_IMAGES.THUMBNAIL;
};
const displayPics = (pics: any) => {
	let arr: any[] = [];
	pics.map((pic: any) => {
		arr.push({ ['@type']: 'ImageObject', contentUrl: getSrcImage(pic) });
	});
	return JSON.stringify(arr);
};
const dummyDataToPreventLayoutShift = {
	property_type: '',
	devise: '',
	agent_address: '',
	agent_postcode: '',
	num_bedrooms: '',
	num_bathrooms: '',
	num_recepts: '',
	description: '',
	title: '',
	rental_prices: { per_month: '' },
	images: [
		{ original: '' },
		{ original: '' },
		{ original: '' },
		{ original: '' },
	],
};
const head = {
	title: 'Details of the house selected with his geolocalisation',
	meta: {
		name: 'description',
		content: 'Detail of the house selected - locate the house using Google map',
	},
	canonical: `${URL_ADDRESS.HEROKU}/selection/details/`,
	meta2: { name: 'viewport', content: 'initial-scale=1, width=device-width' },
	dataStructureSeo: (house: any) => `[
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
			"@type": "${house.category}",
			"name": "${house.agent_address}",
			"description": "${house.description}",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "${house.agent_address}",
				"addressLocality": "${house.county}",
				"addressRegion": "West Midlands"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": ${house.latitude},
				"longitude": ${house.longitude}
			},
			"photo": ${displayPics(house.images)}
		}
]`,
};

export { head, dummyDataToPreventLayoutShift };

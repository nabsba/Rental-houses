import TFilter from '../../../../component/tree/organism/filter/type';
import TNoProductsYet from '../../../../component/tree/organism/noProductsYet/type';
import { URL_ADDRESS } from '../../../Common/constant';
import { CATEGORIES, NUMBER_OF_PRODUCTS_PER_PAGE } from '../constant';

const head = {
	title: 'Houses',
	meta: {
		name: 'description',
		content:
			"Select the type of houses you would like to find in England - find the lastest article about the houses' market",
	},
	canonical: `${URL_ADDRESS.HEROKU}/houses/`,
	meta2: { name: 'viewport', content: 'initial-scale=1, width=device-width' },
	dataStructureSeo: `[
	{
		"alternateName": "Rental House Search",
		"potentialAction": {
			"target": "${URL_ADDRESS.HEROKU}/selection/?q={search_term_string}",
			"query-input": "required name=search_term_string",
			"@type": "SearchAction"
		},
		"@context": "http://schema.org",
		"url": "${URL_ADDRESS.HEROKU}",
		"name": "Zoopla",
		"@type": "WebSite"
	},

	{
  "@context": "https://schema.org/",
  "@type": "Article",
  "name": "Growing demand",
  "description": "The UK will need new rental homes to respond to the growth in demand continues.",
  "contentReferenceTime": "2022-04-05T11:30:00-07:00"
},
{
  "@context": "https://schema.org/",
  "@type": "Article",
  "name": "A home during covid",
  "description": "A story about people who bought their first home during covid.",
  "contentReferenceTime": "2022-04-05T11:30:00-07:00"
},
{
  "@context": "https://schema.org/",
  "@type": "Article",
  "name": "Rise of the house's price",
  "description": "Uk house price rise at fastest rate in 15 years.",
  "contentReferenceTime": "2022-04-05T11:30:00-07:00"
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
	}
]`,
};
const imageSize = {
	size: {
		small: ['354x255', '480x360'],
		medium: ['645x430', '768x576'],
		large: ['1024x768'],
	},
};
const filter: TFilter = {
	image: imageSize,
	button: {
		value: 'Submit',
		type: 'submit',
	},
	filterPartOne: {
		title: 'Houses',
		icon: 'Filter',
	},
	categories: [
		{
			type: CATEGORIES.MILES,
			propertyForQuery: ['radius'],
			functionToCall: () => null,
			values: [0, 30],
			marks: [
				{
					value: 0,
					label: '0 miles',
				},
				{
					value: 30,
					label: '30 miles',
				},
			],
		},
		{
			type: CATEGORIES.PRICE,
			propertyForQuery: ['minimum_price', 'maximum_price'],
			functionToCall: () => null,
			values: [0, 3000],
			marks: [
				{
					value: 0,
					label: '£ 0',
				},
				{
					value: 3000,
					label: '£ 3000',
				},
			],
		},
		{
			type: CATEGORIES.TYPE,
			propertyForQuery: ['property_type'],
			functionToCall: () => null,
			values: ['appartment', 'houses', 'duplex'],
		},
		{
			type: CATEGORIES.ADDRESS,
			propertyForQuery: ['area'],
			functionToCall: () => null,
			values: ['Where'],
		},
		{
			type: CATEGORIES.BEDROOMS,
			propertyForQuery: ['minimum_beds', 'maximum_beds'],
			functionToCall: () => null,
			values: [1, 2, 3, 4, 5, 6],
		},
	],
	filterSelection: {
		order_by: '',
		ordering: '',
		page_number: '',
		page_size: 0,
	},
	updateFilterSelection: Function,
	alertText: 'You need to enter a location',
	notificationDisplay: ['Hide filter', 'Show filter'],
};
const filterSelectionCategoryDefault = {
	order_by: 'age',
	ordering: 'descending',
	page_size: NUMBER_OF_PRODUCTS_PER_PAGE,
	page_number: '1',
};
const noProductsYet: TNoProductsYet = {
	lastHousesNews: [
		{
			title: 'growing demand',
			shortDescription:
				'The UK will need nearly 230,000 new rental homes to avoid a shortfall if the current growth in demand continues, according to a new forecast. Private rented sector supply will have to increase by 227,000 homes a year to meet the demand for 1.8 million new households over the next decade, according to analysis by the consultancy Capital Economics.',
			image: {
				// src: '/asset/image/houses/articles/growingDemand.webp',
				src: 'https://res.cloudinary.com/doiy4k5ox/image/upload/v1649242355/rentalHouses/articles/growingDemand_nzqecn.webp',
				alt: 'growingDemand',
				height: '15rem',
				width: '10rem',
				priority: true,
				layout: 'fill',
			},
			link: 'https://www.theguardian.com/business/2022/feb/14/uk-needs-230000-rental-homes-meet-demand',
		},
		{
			title: 'A home during covid?',
			shortDescription:
				'They bought their first homes during Covid – and now they regret it. Home ownership was initially a pandemic silver lining for Kay Kingsman, a travel blogger based in Portland, Oregon. After Covid-19 put an indefinite hold on her usual globe-trotting endeavors, she’d spent the better part of 16 months working her tech industry day job from the house she shared with several roommates, wishing she had more space to herself.',
			image: {
				// src: '/asset/image/houses/articles/covidHouse.webp',
				src: 'https://res.cloudinary.com/doiy4k5ox/image/upload/v1649242355/rentalHouses/articles/covidHouse_ykfi71.webp',
				alt: 'covid house',
				height: '15rem',
				width: '10rem',
				priority: true,
				layout: 'fill',
			},
			link: 'https://www.theguardian.com/lifeandstyle/2022/mar/16/us-home-buying-ownsership-covid-pandemic-regrets',
		},
		{
			title: "Rise of the house's price",
			shortDescription:
				'UK house prices rise at fastest rate in 15 years, says Halifax. The UK will need nearly 230,000 new rental homes to avoid a shortfall if the current growth in demand continues, according to a new forecast. Private rented sector supply will have to increase by 227,000 homes a year to meet the demand for 1.8 million new households over the next decade, according to analysis by the consultancy Capital Economics.',
			image: {
				// src: '/asset/image/houses/articles/priceRise.webp',
				src: 'https://res.cloudinary.com/doiy4k5ox/image/upload/v1649242355/rentalHouses/articles/priceRise_pnwkto.webp',
				alt: 'growingDemand',
				height: '15rem',
				width: '10rem',
				priority: true,
				layout: 'fill',
			},
			link: 'https://www.theguardian.com/business/2022/feb/14/uk-needs-230000-rental-homes-meet-demand',
		},
	],
	title: "Last informations about the house' market",
	linkText: 'Link',
};
const noProductAvailable = 'No content available for the selection';
export {
	filter,
	head,
	filterSelectionCategoryDefault,
	noProductsYet,
	imageSize,
	noProductAvailable,
};

import { ROUTES, URL_ADDRESS } from '../../../Common/constant';

const imageAndButton = {
	imageAsComponent: {
		src: '/asset/image/houses/house.webp',
		alt: 'house picture',
		priority: true,
		layout: 'fill',
	},
	navigationAsComponent: {
		text: '',
		href: `${ROUTES.HOUSES}`,
	},
	button: {
		value: 'Discover',
	},
	route: ROUTES.HOUSES,
};

const head = {
	title: 'Rental house',
	meta: {
		name: 'description',
		content:
			"Search for property with the UK's leading resource. Browse houses and flats for sale and to rent, and find estate agents in your area with rental houses.",
	},
	canonical: `${URL_ADDRESS.HEROKU}/`,
	meta2: { name: 'viewport', content: 'initial-scale=1, width=device-width' },
	dataStructureSeo: `[
		{
		"alternateName": "Rental house Property Search",
		"potentialAction": {
			"target": "${URL_ADDRESS.HEROKU}/search/?q={search_term_string}",
			"query-input": "required name=search_term_string",
			"@type": "SearchAction"
		},
		"@context": "http://schema.org",
		"url": "${URL_ADDRESS.HEROKU}/",
		"name": "rental house",
		"@type": "WebSite"
       
	},
		{
    "@context": "https://schema.org",
    "@type": "Organization",
  "address": {
    "@type": "postalAddress",
    "addressLocality": "Birmingham, UK",
    "postalCode": "b29js",
    "streetAddress": "706 Campfire Ave, Meriden"
  },
  "email": "unreal@outlook.com",
  "faxNumber": "310-437-2766",
  "member": [
    {
       "@type": "Person",
      "name": "Nabil sba"
    }
  ],
  "name": "Brand",
  "telephone": "310-437-2766",
   "contactPoint": [
			{
				"areaServed": "UK",
				"telephone": "+44 20 3544 1000",
				"contactType": "Customer service",
				"@type": "ContactPoint"
			}
		],
  "sameas": [
			"https://twitter.com/rentalHouses",
			"https://www.facebook.com/rentalHousesUK",
			"https://www.instagram.com/rentalHouses/",
			"https://www.youtube.com/user/rentalHousesUK",
			"https://www.linkedin.com/company/rentalHouses/about/",
			"https://www.pinterest.co.uk/rentalHouses/",
			"https://en.wikipedia.org/wiki/ZPG_plc"
		]
  }
 
    
    ]`,
};

export { imageAndButton, head };

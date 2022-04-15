import { TNavigation } from '../../../../component/tree/molecule';
import { ROUTES } from '../../../Common/constant';

const navigation: TNavigation = {
	title: 'brand',
	menus: [
		{
			text: 'home',
			href: `${ROUTES.HOME}`,
		},
		// {
		//   text: 'about',
		//   href: `${ROUTES.ABOUT}`
		// }
	],
	icons: ['Burger', 'Account', 'Close'],
};
const footer = {
	title: 'Logo',
	paragraph1:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	icons: ['Facebook', 'Instagram', 'Twitter', 'Whatsapp', 'Twitch'],
	informations: [
		{
			icon: 'Phone',
			name: 'Phone',
			information: '310-437-2766',
		},
		{
			icon: 'Mail',
			name: 'Mail',
			information: 'unreal@outlook.com',
		},
		{
			icon: 'Location',
			name: 'Address',
			information: '706 Campfire Ave, Meriden, b29js Birmingham, UK',
		},
	],
	routes: [
		{
			name: 'About',
			href: `${ROUTES.ABOUT}`,
		},
		{
			name: 'Contact',
			href: '/contact',
		},
		{
			name: 'Privacy policy',
			href: '/privacy policy',
		},
		{
			name: ' Site map',
			href: '/site map',
		},
		{
			name: 'Terms of use',
			href: '/terms of use',
		},
	],
	icon: 'Copyright',
	subtext: '2021 - 2022, All rights reserved',
};
export { navigation, footer };

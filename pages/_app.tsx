import '../component/Common/css/share.css';
import '../component/Common/css/variables.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../service/Common/dataMangment/reducer';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LayoutOne } from '../component/specialCase';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';
export const getDesignTokens = (
	mode: PaletteMode | string,
): Record<string, unknown> => {
	const paletteColorsShared = {
		primary: {
			light: '#ceccca',
			main: '#acacac',
			dark: '#808080',
		},
		border: 'rgb(225 224 224)',
		warning: {
			light: '#ff9800',
			main: '#ed6c02',
			dark: '#e65100',
		},
		success: {
			light: '#4caf50',
			main: '#2e7d32',
			dark: '#1b5e20',
		},
		infos: {
			light: '#03a9f4',
			main: '#d6d6d6',
			dark: '#01579b',
		},
	};
	return {
		palette: {
			mode,
			...(mode === 'light'
				? {
						// palette values for light mode
						...paletteColorsShared,
						neutral: {
							light: '#ffffff',
							main: '#a9a9a9',
							dark: '#181818',
						},
						typography: {
							light: '#a9a9a9',
							main: '#343434',
						},
				  }
				: {
						// palette values for dark mode
						...paletteColorsShared,
						neutral: {
							light: '#181818',
							main: '#a9a9a9',
							dark: '#ffffff',
						},
						typography: {
							light: '#a9a9a9',
							main: '#ffffff',
						},
				  }),
		},
		typography: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
		},
	};
};
const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }: AppProps) {
	useEffect(() => {
		if (!('serviceWorker' in navigator)) {
			console.warn('Progressive Web App support is disabled');
			return;
		}
		const wb = new Workbox('sw.js', { scope: '/' });
		wb.register();
	}, []);
	return (
		<ThemeProvider theme={createTheme(getDesignTokens('light'))}>
			<LayoutOne>
				<motion.div
					key={router.route}
					variants={variants}
					initial="hidden"
					animate="enter"
					exit="exit"
					transition={{ type: 'linear' }}
				>
					<Component {...pageProps} />
				</motion.div>
			</LayoutOne>
		</ThemeProvider>
	);
}

export default wrapper.withRedux(MyApp);

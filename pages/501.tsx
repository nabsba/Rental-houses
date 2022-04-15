import Head from 'next/head';
import React from 'react';
import ErrorBoundaryFallback from '../component/specialCase/errorBoundary/ErrorBoundaryFallback';
import { head } from '../service/pages/error/dataManagment/data_eng';

const Custom501: React.FC = () => {
	return (
		<>
			<Head>
				<title>{head.title(501)}</title>
				<meta charSet="utf-8" />
				<meta name={head.meta.name} content={head.meta.content(501)} />
				<link rel="canonical" href={head.canonical(501)} />
				<link rel="icon" href="/favicon.ico" />
				<meta name={head.meta2.name} content={head.meta2.content} />
				<link rel="manifest" href="/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ErrorBoundaryFallback code={501} />
		</>
	);
};
export default Custom501;

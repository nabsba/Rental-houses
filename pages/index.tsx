import type { NextPage } from 'next';
import Head from 'next/head';
import { Astra } from '../component/tree/template';
import {
	head,
	imageAndButton,
} from '../service/pages/home/dataManagment/data_eng';

const Home: NextPage = () => {
	const astra = {
		imageAndButton,
	};
	return (
		<div>
			<Head>
				<title>{head.title}</title>
				<meta charSet="utf-8" />
				<meta name={head.meta.name} content={head.meta.content} />
				<link rel="canonical" href={head.canonical} />
				<link rel="icon" href="/favicon.ico" />
				<meta name={head.meta2.name} content={head.meta2.content} />
				<link rel="manifest" href="/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `${head.dataStructureSeo}`,
					}}
				/>
			</Head>
			<Astra data={astra} />
		</div>
	);
};
export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Achernar from '../../../component/tree/template/achernar/Achernar';
import { useDispatch, useSelector } from 'react-redux';
import { TReducers } from '../../../service/Common/type';
import {
	getContextOfHousesDisplaying,
	handleChangingPage,
	wrapper,
} from '../../../service';
import { updateFilterSelection } from '../../../service/pages/houses/dataManagment/reducer';
import { useEffect } from 'react';
import { saveHousesToBrowserClient } from '../../../service/pages/selection/logic/functions';
import {
	filter,
	noProductAvailable,
} from '../../../service/pages/houses/dataManagment/data_eng';
import { head } from '../../../service/pages/selection/dataManagment/data_eng';
import { useRouter } from 'next/router';

const SelectionHouses: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const {
		dataHouses: { filterSelection, houses, devise },
	} = useSelector((state: TReducers) => state);

	useEffect(() => {
		let controller: any = new AbortController();
		(async () => {
			await saveHousesToBrowserClient(houses);
			controller = null;
		})();
		return () => controller?.abort();
	}, [dispatch, houses]);

	const achernarData = {
		filter: {
			...filter,
			updateFilterSelection: (type: string, value: string) =>
				dispatch(updateFilterSelection({ type, value })),
			filterSelection,
		},
		houses,
		context: getContextOfHousesDisplaying(
			houses.state,
			houses.serverError,
			houses.listing,
		),
		filterSelection,
		devise,
		noProductAvailable,
	};
	return (
		<div style={{ marginTop: '10rem' }}>
			<Head>
				<title>{head.title}</title>
				<meta name={head.meta.name} content={head.meta.content} />
				<meta name={head.meta2.name} content={head.meta2.content} />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href={`${head.canonical(router.asPath)}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `${head.dataStructureSeo(houses.listing)}`,
					}}
				/>
			</Head>
			<Achernar data={achernarData} />
		</div>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(
	(store: any) => async (context: any) => {
		await handleChangingPage(context, store);
		return {
			props: {
				result: true,
			},
		};
	},
);
export default SelectionHouses;

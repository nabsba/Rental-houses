import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { TReducers } from '../../service/Common/type';
import { updateFilterSelection } from '../../service/pages/houses/dataManagment/reducer';
import {
	filter,
	head,
	noProductsYet,
} from '../../service/pages/houses/dataManagment/data_eng';
import Head from 'next/head';
import { Filter, NoProductsYet } from '../../component/tree/organism';
import styles from '../../component/tree/template/achernar/./style.module.css';

type TProps = {
	page: number;
};
const Houses: NextPage<TProps> = () => {
	const dispatch = useDispatch();
	const {
		dataHouses: { filterSelection },
	} = useSelector((state: TReducers) => state);

	const filterData = {
		...filter,
		updateFilterSelection: (type: string, value: string) =>
			dispatch(updateFilterSelection({ type, value })),
		filterSelection,
	};

	const EpicHTML = (
		<>
			<section className={styles.achernar_part_one}>
				<Filter data={filterData} />
			</section>
			<section>
				<NoProductsYet data={noProductsYet} />
			</section>
		</>
	);

	return (
		<div style={{ marginTop: '10rem' }}>
			<Head>
				<title>{head.title}</title>
				<meta name={head.meta.name} content={head.meta.content} />
				<meta name={head.meta2.name} content={head.meta2.content} />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href={`${head.canonical}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `${head.dataStructureSeo}`,
					}}
				/>
			</Head>
			<main>{EpicHTML}</main>
		</div>
	);
};

export default Houses;

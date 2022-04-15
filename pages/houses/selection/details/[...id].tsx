import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Monocerotis from '../../../../component/tree/template/monocerotis/Monocerotis';
import { useRouter } from 'next/router';
import { retrieveHouseFromBrowserClient } from '../../../../service/pages/selection/logic/functions';
import {
	dummyDataToPreventLayoutShift,
	head,
} from '../../../../service/pages/details/dataManagment/data_eng';

type Props = {
	houseID: string | null;
};

const House: React.FC<Props> = () => {
	const [houseData, setHouseData] = useState();
	const router = useRouter();
	const { id } = router.query;
	useEffect(() => {
		const controller: any = new AbortController();
		if (id && id.length > 0) {
			(async () => {
				const house = await retrieveHouseFromBrowserClient(id[0]);
				setHouseData(house);
			})();
			return () => controller?.abort();
		}
	}, [id]);

	return (
		<div>
			<Head>
				<title>{head.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="canonical" href={`${head.canonical}${id}`} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: houseData ? `${head.dataStructureSeo(houseData)}` : '',
					}}
				/>
			</Head>
			<div style={{ display: houseData ? 'none' : 'relative' }}>
				<Monocerotis
					data={{
						house: dummyDataToPreventLayoutShift,
					}}
				/>
			</div>
			{houseData && (
				<div>
					<Monocerotis
						data={{
							house: houseData,
						}}
					/>
				</div>
			)}
		</div>
	);
};
export default House;

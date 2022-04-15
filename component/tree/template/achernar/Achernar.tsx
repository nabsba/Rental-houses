import React from 'react';
import { Filter, HousesArticle, PaginationHTML } from '../../organism';
import styles from './style.module.css';
import TAchernar from './type';
import { CONTEXT_LIST_HOUSES } from '../../../../service/pages/houses/constant';
import { getTheTotalOfPages } from '../../../../service';
import { useRouter } from 'next/router';
import { Paragraph } from '../../atom';
import { useTheme } from '@mui/styles';
import { ROUTES, THEME_VARIANT } from '../../../../service/Common/constant';

type Props = {
	data: TAchernar;
};

const Achernar: React.FC<Props> = ({
	data: {
		filter,
		houses,
		context,
		devise,
		filterSelection,
		noProductAvailable,
	},
}) => {
	const router = useRouter();
	const theme: any = useTheme();
	const GetContextDisplay = (type: string | null) => {
		switch (type) {
			case CONTEXT_LIST_HOUSES.PRODUCTS_AVAILABLE:
				const totalPages = getTheTotalOfPages(houses.result_count);
				return (
					<div className={styles.filter_houses_and_pagination}>
						<div
							style={{
								marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_MAIN),
							}}
						>
							<HousesArticle
								data={{ list: houses.listing, devise, image: filter.image }}
							/>
						</div>
						<PaginationHTML
							data={{
								totalPages,
								pageNumber: parseInt(filterSelection.page_number),
							}}
						/>
					</div>
				);
			case CONTEXT_LIST_HOUSES.NO_PRODUCTS_AVAILABLE:
				return <Paragraph data={noProductAvailable} />;
			case CONTEXT_LIST_HOUSES.ERROR_SERVER:
				router.push({
					pathname: ROUTES.SERVER_ERROR,
				});
				break;
			default:
				return null;
		}
	};
	return (
		<div className={styles.achernar}>
			<section className={styles.achernar_part_one}>
				<Filter data={filter} />
			</section>
			<section
				className={styles.achernar_part_two}
				style={{
					marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_MAIN),
				}}
			>
				{GetContextDisplay(context)}
			</section>
		</div>
	);
};
export default Achernar;

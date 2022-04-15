// import React from 'react';
import styles from './style.module.css';
import TPagination from './type';

type Props = {
	data: TPagination;
};

import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import NavigationAsComponent from '../../atom/navigation/NavigationAsComponent';
import { ButtonVariant } from '../../molecule';
import { useTheme } from '@mui/styles';
import { ROUTES } from '../../../../service/Common/constant';
import { useSelector } from 'react-redux';
import { TReducers } from '../../../../service/Common/type';
import _ from 'lodash';

const List = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'flex',
});

const PaginationHTML: React.FC<Props> = ({
	data: { totalPages, pageNumber },
}) => {
	const theme: any = useTheme();
	const { items } = usePagination({
		count: totalPages,
	});

	const {
		dataHouses: { filterSelection },
	} = useSelector((state: TReducers) => state);

	return (
		<nav>
			<List>
				{items.map(({ page, type, selected, ...item }, index) => {
					let children = null;
					if (type === 'start-ellipsis' || type === 'end-ellipsis') {
						children = '…';
					} else if (type === 'page') {
						children = (
							<div className={styles.button_pagination_wrapper}>
								<div
									className={styles.button_pagination}
									style={{
										fontWeight: selected ? 'bold' : undefined,
										color: theme.palette.typography.light,
										backgroundColor:
											pageNumber == page
												? theme.palette.neutral.main
												: theme.palette.neutral.light,
									}}
									{...item}
								>
									<NavigationAsComponent
										data={{
											text: '',
											href: (() => {
												const filterSelectionWithTheNewPage =
													_.cloneDeep(filterSelection);
												filterSelectionWithTheNewPage.page_number = page;
												return `${ROUTES.SELECTION}/${new URLSearchParams(
													filterSelectionWithTheNewPage,
												).toString()}`;
											})(),
											isComponent: (
												<ButtonVariant
													data={{
														value: page.toString(),
														isItSelected: false,
													}}
												/>
											),
										}}
									/>
								</div>
							</div>
						);
					} else {
						children = (
							<div>
								<div {...item} />
								<ButtonVariant
									data={{
										value: type,
										isItSelected: false,
									}}
								/>
							</div>
						);
					}

					return <li key={index}>{children}</li>;
				})}
			</List>
		</nav>
	);
};

export default PaginationHTML;

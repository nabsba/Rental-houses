import React, { useState } from 'react';
import { H3, Span } from '../../atom';
import styles from './style.module.css';
import TFilter, { TCategory } from './type';
import { useTheme } from '@mui/styles';
import { ROUTES, THEME_VARIANT } from '../../../../service/Common/constant';
import { getFragmentFilter, getIcon } from '../../../factory';
import { ButtonVariant } from '../../molecule';
import NavigationAsComponent from '../../atom/navigation/NavigationAsComponent';
import TransitionAlerts from '../../atom/alert/component';

type Props = {
	data: TFilter;
};

const Filter: React.FC<Props> = ({
	data: {
		button,
		filterPartOne,
		categories,
		filterSelection,
		updateFilterSelection,
		alertText,
		notificationDisplay,
	},
}) => {
	const theme: any = useTheme();
	// const [isFragmentOnHover, setIsFragmentOnHover] = useState('');
	const [doWeFireAlert, setDoWeFireAlert] = useState(false);
	const [filterApparence, setFilterApparence] = useState(false);
	categories.map((category: TCategory) => {
		category.functionToCall = updateFilterSelection;
	});
	const handleAppararenceAlert = (indice: boolean) => setDoWeFireAlert(indice);

	const CommunHTML = (
		<div className={styles.filter_fragment_wrap}>
			{categories.map((category: TCategory) => (
				<div
					// onMouseEnter={() => setIsFragmentOnHover(category.type)}
					// onMouseLeave={() => setIsFragmentOnHover('')}
					// style={{
					// 	color:
					// 		category.type === isFragmentOnHover
					// 			? theme.palette.neutral.main
					// 			: theme.palette.neutral.dark,
					// }}
					style={{
						color: theme.palette.neutral.dark,
					}}
					className={styles.filter_fragment}
					key={category.type}
				>
					{getFragmentFilter(category)}
				</div>
			))}
			<TransitionAlerts
				severity={'warning'}
				indiceAlert={doWeFireAlert}
				text={alertText}
				functionToCall={handleAppararenceAlert}
			/>
			<div
				className={styles.filter_fragment_submit}
				onClick={() => handleAppararenceAlert(!Boolean(filterSelection.area))}
			>
				<NavigationAsComponent
					data={{
						text: '',
						href: filterSelection.area
							? `${ROUTES.SELECTION}/${new URLSearchParams(
									filterSelection,
							  ).toString()}`
							: ROUTES.HOUSES,
						isComponent: (
							<ButtonVariant
								data={{
									value: button.value,
									isItSelected: false,
								}}
							/>
						),
					}}
				/>
			</div>
		</div>
	);
	const MobileHTML = (
		<div className={styles.filter_bottom_mobile}>
			<div
				className={`${styles.filter_part_bottom_neutral} ${
					filterApparence ? styles.filter_part_bottom_effect : ''
				}`}
				style={{
					backgroundColor: theme.palette.neutral.light,
					padding: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT),
				}}
			>
				<div
					className={styles.filter_cross}
					style={{
						color: theme.palette.neutral.dark,
						padding: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT),
					}}
					onClick={() => setFilterApparence(!filterApparence)}
				>
					{getIcon('Close')}
				</div>
				{CommunHTML}
			</div>
		</div>
	);
	const DesktopHTML = (
		<div className={styles.filter_bottom_desktop}>
			<div
				className={`${styles.filter_part_bottom_neutral} ${
					filterApparence ? styles.filter_part_bottom_effect : ''
				}`}
				style={{
					backgroundColor: theme.palette.neutral.light,
					paddingLeft: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT),
					paddingRight: theme.spacing(THEME_VARIANT.SPACING.MARGIN_LIGHT),
					marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_MAIN),
				}}
			>
				{CommunHTML}
			</div>
		</div>
	);
	return (
		<div
			className={styles.filter}
			style={{ color: theme.palette.neutral.light }}
		>
			<div
				className={styles.filter_part_header}
				style={{
					color: theme.palette.neutral.dark,
					marginBottom: theme.spacing(THEME_VARIANT.SPACING.MARGIN_MAIN),
				}}
			>
				<H3 title={filterPartOne.title} />
				<div
					className={styles.filter_part_one_sub}
					style={{
						color: theme.palette.neutral.dark,
					}}
					onClick={() => setFilterApparence(!filterApparence)}
				>
					<div style={{ paddingRight: theme.spacing(2) }}>
						<Span
							data={
								filterApparence
									? notificationDisplay[0]
									: notificationDisplay[1]
							}
						/>
					</div>
					{getIcon(filterPartOne.icon)}
				</div>
			</div>
			{MobileHTML}
			{DesktopHTML}
		</div>
	);
};
export default Filter;

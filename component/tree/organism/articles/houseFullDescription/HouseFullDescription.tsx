import React from 'react';
import { CreateMarkup } from '../../../../specialCase';
import { SliderVariant2 } from '../../../molecule';
import BottomArticleHouse from '../../../molecule/bottomArticleHouse/BottomArticleHouse';
import GooglePlaceMap from '../../googlePlaceMap/GooglePlaceMap';
import styles from './style.module.css';
// import THouseFullDescription from './type';
import Image from 'next/image';
import { imageSize } from '../../../../../service/pages/houses/dataManagment/data_eng';
import { DEFAULT_IMAGES } from '../../../../../service/pages/houses/constant';
import { useTheme } from '@mui/styles';
import {
	shimmer,
	toBase64,
} from '../../../../../service/Common/logic/functions';

type Props = {
	// data: THouseFullDescription;
	data: any;
};

const HouseFullDescription: React.FC<Props> = ({
	data: {
		house: {
			property_type,
			devise,
			agent_address,
			agent_postcode,
			num_bedrooms,
			num_bathrooms,
			num_recepts,
			description,
			images,
			title,
			rental_prices: { per_month },
			latitude,
			longitude,
		},
	},
}) => {
	const theme: any = useTheme();
	const styleComponent = {
		color: theme.palette.typography.light,
		fontFamily: theme.typography.fontFamily,
		lineHeight: theme.spacing(4),
	};
	const getSrcImage = (image: any) => {
		const original = image && image.original;
		if (original) return image.original;
		const medium: any = imageSize.size.medium.find(
			(value: string) => image && image[value],
		);
		if (medium) return images[medium];
		return DEFAULT_IMAGES.THUMBNAIL;
	};

	const imagesOfTheHouse = (() =>
		images.map((image: any, index: number) => (
			<div
				key={index}
				className={`image_of_the_house_wrapper`}
				style={{ position: 'relative', height: '100%' }}
			>
				<Image
					key={index}
					priority
					src={getSrcImage(image)}
					layout="fill"
					alt={title}
					placeholder="blur"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(700, 475),
					)}`}
					objectFit="cover"
				/>
			</div>
		)))();

	return (
		<div className={styles.house_full_description}>
			<div style={{ marginBottom: theme.spacing(4) }}>
				<SliderVariant2
					data={{
						list: imagesOfTheHouse,
					}}
				/>
			</div>
			<div style={{ marginBottom: theme.spacing(4) }}>
				<BottomArticleHouse
					data={{
						property_type,
						devise,
						per_month,
						agent_address,
						agent_postcode,
						num_bedrooms,
						num_bathrooms,
						num_recepts,
					}}
				/>
			</div>
			<div
				className={styles.house_full_description_bottom_article_house}
				style={{ marginBottom: theme.spacing(4) }}
			>
				<div
					style={styleComponent}
					className={styles.house_full_description_markup}
					dangerouslySetInnerHTML={CreateMarkup(description)}
				/>
				<div className={styles.google_place_map}>
					<GooglePlaceMap
						data={{
							markers: [{ lat: latitude, lng: longitude }],
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default HouseFullDescription;

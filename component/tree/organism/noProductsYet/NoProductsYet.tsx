import { useTheme } from '@mui/styles';
import React, { useState } from 'react';
import { THEME_VARIANT } from '../../../../service/Common/constant';
import { H1, H3, Paragraph } from '../../atom';
import { ButtonVariant } from '../../molecule';
import styles from './style.module.css';
import TNoProductsYet from './type';
import Image from 'next/image';

type TProps = {
	data: TNoProductsYet;
};

const NoProductsYet: React.FC<TProps> = ({
	data: { lastHousesNews, title, linkText },
}) => {
	const theme: any = useTheme();
	const [indice, setIndice] = useState('');

	return (
		<>
			<div
				style={{
					marginTop: theme.spacing(10),
				}}
			>
				<H1 title={title} />
			</div>
			<div
				className={styles.no_products_yet}
				style={{
					marginTop: theme.spacing(8),
					marginBottom: theme.spacing(8),
				}}
			>
				{lastHousesNews.map((article) => (
					<div
						key={article.title}
						style={{
							padding: theme.spacing(THEME_VARIANT.SPACING.PADDING_ARTICLE),
						}}
						className={styles.no_products_yet_sub}
						onMouseEnter={() => setIndice(article.title)}
						onMouseLeave={() => setIndice('')}
					>
						<div className={styles.no_products_yet_sub_header}>
							<H3 title={article.title} />
						</div>
						<div className={styles.no_product_article_img}>
							<Image
								src={article.image.src}
								alt={article.image.alt}
								priority
								layout={'fill'}
								blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
							/>
						</div>
						<div className={styles.no_products_yet_paragraph}>
							<div
								style={{
									paddingTop: theme.spacing(
										THEME_VARIANT.SPACING.PADDING_ARTICLE,
									),
									paddingBottom: theme.spacing(
										THEME_VARIANT.SPACING.PADDING_ARTICLE * 3,
									),
								}}
								className={`${styles.no_products_yet_paragraph_description} ${
									indice === article.title
										? styles.no_products_yet_paragraph_description_effect
										: ''
								}`}
							>
								<Paragraph data={article.shortDescription} />
							</div>
							<div className={styles.no_products_yet_paragraph_fake}></div>
						</div>
						<a target="_blank" href={article.link} rel="noopener noreferrer">
							<ButtonVariant
								data={{
									value: linkText,
									isItSelected: false,
								}}
							/>
						</a>
					</div>
				))}
			</div>
		</>
	);
};
export default NoProductsYet;

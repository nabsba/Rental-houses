import React from 'react';
import { H1 } from '../../atom';
import { HouseFullDescription } from '../../organism';
import styles from './style.module.css';
import TMonorcrerotis from './type';

type Props = {
	data: TMonorcrerotis;
};
const Monorcrerotis: React.FC<Props> = ({ data: { house } }) => {
	return (
		<div className={styles.monorcrerotis}>
			<section className={styles.monorcrerotis_part_one}>
				<div style={{ opacity: house.property_type ? 1 : 0 }}>
					<H1
						title={`Description of the ${house.property_type.toLowerCase()}`}
					/>
				</div>
				<HouseFullDescription
					data={{
						house,
					}}
				/>
			</section>
		</div>
	);
};

export default Monorcrerotis;

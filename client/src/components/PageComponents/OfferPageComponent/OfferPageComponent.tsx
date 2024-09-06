import React from 'react';
import styles from './OfferPageComponent.module.scss';
import Button from '../../Buttons/Button/Button';
export default function OfferPageComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<p className={styles.title}>
					Отпразднуйте в одном из
			<br />
					самых лучших ресторанов.
				</p>
				<p className={styles.text}>Только в этом месяце бизнес-ланч от 250 ₽</p>
			</div>
			<div className={styles.right}>
				<Button>ЗАКАЗ СТОЛИКА </Button>
			</div>
		</div>
	);
}

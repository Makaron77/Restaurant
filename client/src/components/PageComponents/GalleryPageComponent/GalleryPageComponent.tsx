import React from 'react';
import styles from './GalleryPageComponent.module.scss';

export default function GalleryPageComponent() {
	return (
		<div className={styles.container}>
			<p className={styles.header}>
				Галерея <span>Блюд</span>
			</p>
			<div className={styles.dishes}>
				<div className={styles.dishesTop}>
					<img src='images/table.jpg' alt='table' />
					<img src='images/coffee.jpg' alt='table' />
					<img src='images/soup.jpg' alt='soup' />
				</div>

				<div className={styles.dishesBottom}>
					<img src='images/coffee.jpg' alt='table' />
					<img src='images/soup.jpg' alt='soup' />
					<img src='images/table.jpg' alt='table' />
				</div>
			</div>
			<p className={styles.header}>
				Наши <span>Повара</span>
			</p>
			<div className={styles.cooks}>
				<img src='images/cook1.jpg' alt='cook1' />
				<img src='images/cook2.jpg' alt='cook2' />
				<img src='images/cook3.jpg' alt='cook3' />
			</div>
		</div>
	);
}

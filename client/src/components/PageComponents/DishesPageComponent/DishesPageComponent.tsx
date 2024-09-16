import React from 'react'
import styles from './DishesPageComponent.module.scss'
import burgers from './dishesData';
export default function DishesPageComponent() {
	

	return (
		<div className={styles.container}>
			<p className={styles.header}>
				Наши<span>Новинки</span>
			</p>

			<div className={styles.main}>
				<div className={styles.left}>
					<img src='images/pizza.jpg' alt='' />
				</div>
				<div className={styles.right}>
					{burgers.map(burger => (
						<div
							key={burger.id}
							className={`${styles[`burger${burger.id}`]} ${styles.burger}`}
						>
							<img src={burger.img} alt='burger' />
							<p>{burger.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

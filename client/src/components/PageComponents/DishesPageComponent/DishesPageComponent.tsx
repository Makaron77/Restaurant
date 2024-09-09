import React from 'react'
import styles from './DishesPageComponent.module.scss'

export default function DishesPageComponent() {
	const burgers = [
		{
			id: 1,
			img: 'images/hamburger.jpg',
			text: 'Гамбургер мини  220 ₽',
		},
		{
			id: 2,
			img: 'images/hamburger.jpg',
			text: 'Гамбургер мини  220 ₽',
		},
		{
			id: 3,
			img: 'images/hamburger.jpg',
			text: 'Гамбургер мини  220 ₽',
		},
	];

	return (
		<div className={styles.container}>
			<p className={styles.header}>
				Наши<span>Блюда</span>
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

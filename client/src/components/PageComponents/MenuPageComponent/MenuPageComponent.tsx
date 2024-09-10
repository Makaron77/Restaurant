import React from 'react'
import styles from './MenuPageComponent.module.scss'
import Button from '../../Buttons/Button/Button'
import CarouselComponent from '../../Carousel/CarouselComponent';



const cards = [
	{
		id: 1,
		img: '/images/big_burger.png',
		title: 'Гамбургер макси',
		text: 'Максимально толстый слой мяса',
	},
	{
		id: 2,
		img: '/images/big_burger.png',
		title: 'Чизбургер макси',
		text: 'Максимально толстый слой мяса',
	},
	{
		id: 3,
		img: '/images/big_burger.png',
		title: 'Биг-мак макси',
		text: 'Максимально толстый слой мяса',
	},
];

export default function MenuPageComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Наше меню</div>
			<div className={styles.cards}>
				{cards.map(card => (
					<div key={card.id} className={styles.card}>
						<img src={card.img} alt='CardMenu' loading='lazy' />
						<p className={styles.title}>{card.title}</p>
						<p className={styles.text}>{card.text}</p>
						<Button size='large'>ЗАКАЗАТЬ</Button>
					</div>
				))}
			</div>
			{/* <div style={{ width: '300px', height: '100%' }}> */}{' '}
			<div className={styles.containerCarousel}>
				<CarouselComponent />
			</div>
		</div>
	);
}

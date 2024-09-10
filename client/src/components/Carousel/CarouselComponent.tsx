import React from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.scss';
import Button from '../Buttons/Button/Button';

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

const CarouselComponent: React.FC = () => (
	<Carousel
		className={`${styles.menu__carousel} menu__carousel`}
		autoplay
		draggable={true}
		arrows={true}
	>
		{cards.map(card => (
			<div key={card.id} className={`${styles.card} ${styles.contentStyle}`}>
				<img src={card.img} alt='CardMenu' loading='lazy' />
				<p className={styles.title}>{card.title}</p>
				<p className={styles.text}>{card.text}</p>
				<Button size='large'>ЗАКАЗАТЬ</Button>
			</div>
		))}
	</Carousel>
);

export default CarouselComponent;

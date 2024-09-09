import React from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.scss'
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
	},]



const CarouselComponent: React.FC = () => (
	<Carousel
		
		className={`${styles.menu__carousel} menu__carousel`}
		// autoplay
		draggable={true}
		arrows={true}
	>
		{/* <div className={styles.cards}> */}
		{cards.map(card => (
			<div key={card.id} className={`${styles.card} ${styles.contentStyle}`}>
				<img src={card.img} alt='CardMenu' loading='lazy' />
				<p className={styles.title}>{card.title}</p>
				<p className={styles.text}>{card.text}</p>
				<Button size='large'>ЗАКАЗАТЬ</Button>
			</div>
		))}
		{/* </div> */}
	</Carousel>
);





















// const CarouselComponent: React.FC = () => (
// 	<Carousel className='menu__carousel'  autoplay draggable={true} arrows={true}>
// 		<div>
// 			<div className={styles.contentStyle}>
// 				<img src='/images/big_burger.png' alt='' />
// 				<p className={styles.title}>Гамбургер макси</p>
// 				<p className={styles.text}>Максимально толстый слой мяса</p>
// 			</div>
// 		</div>
// 		<div>
// 			<h3 className={styles.contentStyle}>2</h3>
// 		</div>
// 		<div>
// 			<h3 className={styles.contentStyle}>3</h3>
// 		</div>
// 		<div>
// 			<h3 className={styles.contentStyle}>4</h3>
// 		</div>
// 	</Carousel>
// );

export default CarouselComponent;

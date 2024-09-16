import React from 'react';
import styles from './MenuPageComponent.module.scss';
import Button from '../../Buttons/Button/Button';
import CarouselComponent from './Carousel/CarouselComponent';
import cards from './menuCarouselData.ts'
import BookMenu from '../../BookMenu/BookMenu.tsx';

export default function MenuPageComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>Наше меню</div>

			{/* <BookMenu /> */}

			{/* <div className={styles.cards}>
				{cards.map(card => (
					<div key={card.id} className={styles.card}>
						<img src={card.img} alt='CardMenu' loading='lazy' />
						<p className={styles.title}>{card.title}</p>
						<p className={styles.text}>{card.text}</p>
						<Button size='large'>ЗАКАЗАТЬ</Button>
					</div>
				))}
			</div> */}

			{/* <div className={styles.containerCarousel}>
				<CarouselComponent />
			</div> */}
		</div>
	);
}

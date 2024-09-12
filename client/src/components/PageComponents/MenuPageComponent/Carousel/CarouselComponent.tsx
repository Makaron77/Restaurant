import React from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.scss';
import Button from '../../../Buttons/Button/Button.js';

import cards from '../menuCarouselData.ts';

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

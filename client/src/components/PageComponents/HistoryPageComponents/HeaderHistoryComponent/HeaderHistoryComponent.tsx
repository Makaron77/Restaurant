import React from 'react';
import styles from './HeaderHistoryComponent.module.scss';
export default function HeaderHistoryComponent() {
	const cards = [
		{
			id: 1,
			img: '/images/поднос.svg',
			title: 'Магическая',
			title1: ' Атмосфера',
			text: `В нашем заведении царит
магическая атмосфера
наполненная вкусными
  ароматами.`,
		},
		{
			id: 2,
			img: '/images/поднос.svg',
			title: 'Лучшее качество',
			title1: ' Еды',
			text: `Качество нашей
Еды - отменное!`,
		},
		{
			id: 3,
			img: '/images/поднос.svg',
			title: 'Недорогая',
			title1: ' Еда',
			text: `Стоимость нашей Еды
зависит только от ее
количества. Качество
всегда на высоте!`,
		},
	];
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				{cards.map(card => (
					<div className={styles.card} key={card.id}>
						<img src={card.img} alt='карточка' />
						<p className={styles.title}>
							{card.title}
							<span className={styles.highlight}>{card.title1}</span>
						</p>
						<p className={styles.text}>{card.text}</p>
					</div>
				))}
			</header>
		</div>
	);
}

import React from 'react';
import styles from './HeaderHistoryComponent.module.scss';
import cardsHistory from './historyData';
export default function HeaderHistoryComponent() {

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				{cardsHistory.map(card => (
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

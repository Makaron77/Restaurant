import React from 'react';
import styles from './MainHistoryComponent.module.scss';

export default function MainHistoryComponent() {
	return (
		<div className={styles.historyAndImagesContainer}>
			<div className={styles.history}>
				<div className={styles.historyContainer}>
					<p className={styles.title}>
						Наша <span className={styles.title1}>История</span>
					</p>
					<p className={styles.text}>
						Как и у любого другого самобытного места, у нас есть своя, особая
						история. Идея ресторана пришла основателям неожиданно. Во время
						прогулки по лесу создатель нашего ресторана застрял в сотнях
						километров от ближайшего населенного пункта. Вдали от цивилизации и
						связи им пришлось навремя обустровать себе нехитрый быт, добывать и
						готовить себе еду.
					</p>
				</div>
				<div className={styles.statistics}>
					<div className={styles.item}>
						<p className={styles.number}>93</p>
						<p className={styles.label}>Напитки</p>
					</div>

					<div className={styles.item}>
						<p className={styles.number}>206</p>
						<p className={styles.label}>Еда</p>
					</div>

					<div className={styles.item}>
						<p className={styles.number}>71</p>
						<p className={styles.label}>Закуски</p>
					</div>
				</div>
			</div>

			<div className={styles.historyImg}>
	
				<img className={styles.img} src='images/imagesALL.jpg' alt='img2' />
			
			</div>
		</div>
	);
}

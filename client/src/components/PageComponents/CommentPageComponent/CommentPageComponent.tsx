import React from 'react'
import styles from './CommentPageComponent.module.scss'
import { Carousel } from 'antd';
import dataComments from './commentsData';

export default function CommentPageComponent() {
	return (
		<Carousel
			className={`${styles.comment__carousel} comment__carousel`}
			autoplay
			draggable={true}
			// arrows={true}

		>
			{dataComments.map(comment => (
				<div
					key={comment.id}
					className={`${styles.comment} ${styles.contentStyle}`}
				>
					<p>{comment.text}</p>
					<img src={comment.photo} alt='photo' />
					<p className={styles.visitor}>Посетитель</p>
					<p>{comment.name}</p>
				</div>
			))}
		</Carousel>
	);
}

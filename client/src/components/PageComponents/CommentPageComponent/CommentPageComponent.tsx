import React from 'react'
import styles from './CommentPageComponent.module.scss'
import { Carousel } from 'antd';

const dataComments = [
	{
		id: 1,
		text: 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплемент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!',
		photo: '/images/client.png',
		name: 'Николай',
	},
	{
		id: 2,
		text: 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплемент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!',
		photo: '/images/client.png',
		name: 'Николай',
	},
	{
		id: 3,
		text: 'Лучшая возможность попробовать разные кухни в одном месте. Качество еды на пять с плюсом. Ходим сюда уже больше восьми лет, и не разу не встретили плохого отношения персонала, посетителей. Про цены писать вообще нет смысла, т.к. Так дешево и вкусно вы нигде не поедите. По оценке цена-качество это лучшее место!',
		photo:
			'https://img.freepik.com/free-photo/front-view-of-smiley-man-outdoors-in-the-city_23-2148955558.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid',
		name: 'Amatol',
	},
	{
		id: 4,
		text: 'Еда отменная, выбор гигантский и можно часто ходить, заказывая постоянно что-то новенькое. За еду реально высший балл. Обслуживание — смотря кто обслуживает)) нежные азиатские крошки вежливые и ненавязчивые, а мужчина там есть один, так он может ответить клиентам: "побыстрей это вам в макдональдс". Но я на позитиве, место в любом случае классное)))',
		photo:
			'https://opis-cdn.tinkoffjournal.ru/mercury/neuro-real-people-in.kfosjq..jpg',
		name: 'Настя',
	},
];

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

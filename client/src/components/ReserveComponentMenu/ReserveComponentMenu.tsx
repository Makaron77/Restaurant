import React, { useContext } from 'react';
import styles from './ReserveComponentMenu.module.scss';
import InputCalendar from '../InputCalendar/InputCalendar';
import Button from '../Buttons/Button/Button';
import CalendarComponent from '../InputCalendar/InputCalendar';
import { UserContext } from '../../context/context';
export default function ReserveComponentMenu() {
	const { reserveActiveMenu, setReserveActiveMenu } = useContext(UserContext);
	return (
		<div
			className={`${styles.menu} ${reserveActiveMenu ? styles.active : ''}`}
			onClick={() => setReserveActiveMenu(false)}
		>
			<div className={styles.menuContent} onClick={e => e.stopPropagation()}>
				<svg
					className={styles.svg}
					onClick={() => setReserveActiveMenu(!reserveActiveMenu)}
					version='1.0'
					xmlns='http://www.w3.org/2000/svg'
					width='30.000000pt'
					height='30.000000pt'
					viewBox='0 0 78.000000 78.000000'
					preserveAspectRatio='xMidYMid meet'
				>
					<g
						transform='translate(0.000000,78.000000) scale(0.100000,-0.100000)'
						fill='none'
						stroke='none'
					>
						<path
							d='M202 578 c-22 -22 -12 -43 60 -115 l72 -73 -72 -73 c-72 -72 -82 -93
-60 -115 22 -22 43 -12 115 60 l73 72 73 -72 c72 -72 93 -82 115 -60 22 22 12
43 -60 115 l-72 73 72 73 c72 72 82 93 60 115 -22 22 -43 12 -115 -60 l-73
-72 -73 72 c-72 72 -93 82 -115 60z'
						/>
					</g>
				</svg>
				<p className={styles.header}>ЗАБРОНИРОВАТЬ СТОЛИК</p>
				<div className={styles.inputs}>
					<input
						type='text'
						name='fullName'
						placeholder='ФИО*'
						required
						className={styles.fullName}
					></input>
					<input
						type='tel'
						name='mobile'
						placeholder='Телефон*'
						required
						className={styles.mobile}
					></input>

					<div className={styles.calendar}>
						<CalendarComponent />
					</div>

					<input
						type='text'
						name='comment'
						placeholder='Комментарий'
						className={styles.comment}
					/>
					<button className={styles.btn}>ОТПРАВИТЬ</button>
				</div>
				<div className={styles.todo}>
					<p>
						Нажимая кнопку «Отправить», даю свое{' '}
						<a href='#privacy_policy'>согласие</a> на обработку персональных
						данных
					</p>
					<p>* - Поля обязательные для заполнения</p>
				</div>
			</div>
		</div>
	);
}

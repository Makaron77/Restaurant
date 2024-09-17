import React, { useContext, useState } from 'react';
import styles from './ReserveComponentMenu.module.scss';
import { UserContext } from '../../context/context';
import { message } from 'antd';
import TextField from '@mui/material/TextField';
import { handleInputChange, sendHandler } from './formHandlers';

export default function ReserveComponentMenu() {
	const { reserveActiveMenu, setReserveActiveMenu } = useContext(UserContext);
	const [validateForm, setValidateForm] = useState({
		fullName: '',
		email: '',
		mobile: '',
		comment: '',
		date: '',
	});

	

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
						<path d='M202 578 c-22 -22 -12 -43 60 -115 l72 -73 -72 -73 c-72 -72 -82 -93 -60 -115 22 -22 43 -12 115 60 l73 72 73 -72 c72 -72 93 -82 115 -60 22 22 12 43 -60 115 l-72 73 72 73 c72 72 82 93 60 115 -22 22 -43 12 -115 -60 l-73 -72 -73 72 c-72 72 -93 82 -115 60z' />
					</g>
				</svg>
				<p className={styles.header}>ЗАБРОНИРОВАТЬ СТОЛИК</p>
				<form
					onSubmit={event =>
						sendHandler(
							setValidateForm,
							validateForm,
							event,
							message,
							setReserveActiveMenu,
						)
					}
					className={styles.inputs}
				>
					<input
						onChange={event => handleInputChange(event, setValidateForm)}
						type='text'
						name='fullName'
						value={validateForm.fullName}
						placeholder='ФИО*'
						required
						className={styles.fullName}
					/>
					<input
						onChange={event => handleInputChange(event, setValidateForm)}
						type='text'
						name='email'
						value={validateForm.email}
						placeholder='Email*'
						required
						className={styles.email}
					/>
					<input
						onChange={event => handleInputChange(event, setValidateForm)}
						type='tel'
						name='mobile'
						value={validateForm.mobile}
						placeholder='Телефон*'
						required
						className={styles.mobile}
					/>
					<div className={styles.calendar}>
						<TextField
							onChange={event => handleInputChange(event, setValidateForm)}
							id='datetime-local'
							label='Next appointment'
							type='datetime-local'
							name='date'
							value={validateForm.date}
							className={styles.textField}
						/>
					</div>
					<input
						onChange={event => handleInputChange(event, setValidateForm)}
						type='text'
						name='comment'
						value={validateForm.comment}
						placeholder='Комментарий'
						className={styles.comment}
					/>
					<button className={styles.btn} type='submit'>
						ОТПРАВИТЬ
					</button>
				</form>
				<div className={styles.todo}>
					<p>
						Нажимая кнопку «Отправить», даю свое
						<a href='#privacy_policy'>согласие</a> на обработку персональных
						данных
					</p>
					<p>* - Поля обязательные для заполнения</p>
				</div>
			</div>
		</div>
	);
}

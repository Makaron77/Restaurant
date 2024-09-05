import React from 'react'
import styles from './MainComponent.module.scss'
import Button from '../../../Buttons/Button/Button';
export default function MainComponent() {
	return (
		<div className={styles.headerDown}>
			<div className={styles.headerTitle}>
				{' '}
				Добро пожаловать в
				<div className={styles.headerSubtitle}>Наш ресторан</div>
			
				<div className={styles.headerSuptitle}>ДОМ ЛУЧШЕЙ ЕДЫ </div>
				<Button  size='small'>МЕНЮ</Button>
			</div>
		</div>
	);
}

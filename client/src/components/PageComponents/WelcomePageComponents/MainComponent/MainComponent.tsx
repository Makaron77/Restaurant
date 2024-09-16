// src/components/PageComponents/WelcomePageComponents/MainComponent/MainComponent.tsx
import React, { useContext } from 'react';
import styles from './MainComponent.module.scss';
import Button from '../../../Buttons/Button/Button';
import { UserContext } from '../../../../context/context';

export default function MainComponent() {
	const { scrollTo } = useContext(UserContext);

	return (
		<div className={styles.headerDown}>
			<div className={styles.headerTitle}>
				Добро пожаловать в
				<div className={styles.headerSubtitle}>Наш ресторан</div>
				<div className={styles.headerSuptitle}>ДОМ ЛУЧШЕЙ ЕДЫ </div>
				<Button size='small' onClick={() => scrollTo('#menu')}>
					МЕНЮ
				</Button>
			</div>
		</div>
	);
}

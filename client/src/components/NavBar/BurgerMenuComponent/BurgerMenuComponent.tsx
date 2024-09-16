import React, { useContext } from 'react';
import styles from './BurgerMenuComponent.module.scss';
import navData from '../navData.ts';
import { UserContext } from '../../../context/context.tsx';

const BurgerMenuComponent = ({ active, setActive }) => {
	const { reserveActiveMenu, setReserveActiveMenu } = useContext(UserContext);
	
const handleReserveClick = () => {
    setActive(!active);
    setReserveActiveMenu(!reserveActiveMenu);
  };

	return (
		<div
			className={`${styles.menu} ${active ? styles.active : ''}`}
			onClick={() => setActive(false)}
		>
			<div className={styles.menuContent} onClick={e => e.stopPropagation()}>
				<div className={styles.list}>
					{navData.map((item, i) =>
						item.href === '#reserve' ? (
							<a key={i} href={item.href} onClick={handleReserveClick}>
								{item.label}
							</a>
						) : (
							<a key={i} href={item.href}>
								{item.label}
							</a>
						),
					)}
				</div>
				<div className={styles.contacts}>
					<p>г.Москва, ул.Пушкина, 77 стр.7</p>
					<p>+7(777)777-77-77</p>
					<p>dom-edi@gmail.com</p>
				</div>
				<svg
					className={styles.svg}
					onClick={() => setActive(!active)}
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
			</div>
		</div>
	);
};

export default BurgerMenuComponent;

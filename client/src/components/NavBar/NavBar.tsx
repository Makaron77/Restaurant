import React, { useContext, useEffect, useState } from 'react';
import './NavBar.scss';
import Button from '../Buttons/Button/Button';
import navData from './navData.ts';
import BurgerMenuComponent from './BurgerMenuComponent/BurgerMenuComponent.js';
import ReserveComponentMenu from '../ReserveComponentMenu/ReserveComponentMenu.tsx';
import { UserContext } from '../../context/context.tsx';

export default function NavBar() {
	const [menuActive, setMenuActive] = useState(false);
	// const [scrolled, setScrolled] = useState(false);
	const { reserveActiveMenu, setReserveActiveMenu } = useContext(UserContext);
	const [scrolled, setScrolled] = useState(false);
	const { scrollTo } = useContext(UserContext);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={`bg__container ${scrolled ? 'scrolled' : ''}`}>
			<div className={'nav'}>
				{/* <div className="background"></div> */}
				<div className='nav__logo'>
					<a href='#'>
						<img src='images/logo.svg' alt='Лого' />
					</a>
				</div>

				<div className='nav__list'>
					{navData.map((item, i) => (
						<a key={i} href={item.href} onClick={() => scrollTo(item.href)}>
							{item.label}
						</a>
					))}
				</div>

				<div className='nav__contacts'>
					<div className='nav__contacts--numPhone'>
						<div className='nav__contacts--images'>
							<svg
								className='nav__contacts--svg'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z' />
								<path d='M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z' />
							</svg>
						</div>

						<div className='nav__contacts--number'>
							<a href='#'>+999-888-76-54</a>
						</div>
					</div>

					<div className='nav__contacts--text'>
						Свяжитесь с нами для бронирования
					</div>
				</div>
				<Button
					className='nav__btn'
					onClick={() => setReserveActiveMenu(!reserveActiveMenu)}
				>
					ЗАКАЗ СТОЛИКА
				</Button>

				<ReserveComponentMenu />

				<div
					onClick={() => setMenuActive(!menuActive)}
					className='nav__burgerMenu'
				>
					<svg
						className='nav__burgerMenu--svg'
						width='31'
						height='18'
						viewBox='0 0 31 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect width='30.875' height='3.25' rx='1.625' fill='#FF7400' />
						<rect
							y='7.25'
							width='30.875'
							height='3.25'
							rx='1.625'
							fill='#FF7400'
						/>
						<rect
							y='14.5'
							width='30.875'
							height='3.25'
							rx='1.625'
							fill='none'
						/>
					</svg>
				</div>
				<div className='burger__component'>
					<BurgerMenuComponent active={menuActive} setActive={setMenuActive} />
				</div>
			</div>
		</div>
	);
}
